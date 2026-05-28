import dotenv from "dotenv";
import mongoose from "mongoose";
import { Worker } from "bullmq";

import { redis } from "../config/redis.js";

import { extractPdfText } from "../services/pdf.service.js";

import { generateQuestionPaper } from "../services/gemini.service.js";

import { safeJsonParse } from "../utils/json-repair.js";

import { AssignmentModel } from "../../../api/src/models/assignment.model.js";

import { AssignmentStatus } from "../../../api/src/models/assignment-status.enum.js";

import { buildQuestionPaperPrompt } from "../../../../packages/prompts/src/builders/question-paper.builder.js";

import { QuestionPaperSchema } from "../../../../packages/shared/src/schemas/question-paper.schema.js";

import { emitAssignmentEvent } from "../../../api/src/socket/emitter.js";

dotenv.config();

// Mongo Connection
mongoose
  .connect(process.env.MONGODB_URI!)
  .then(() => {
    console.log("Worker MongoDB connected");
  });

const worker = new Worker(
  "assignment-generation",

  async (job) => {
    const { assignmentId } = job.data;

    try {

      console.log(
        "Processing assignment:",
        assignmentId
      );

      // Fetch Assignment
      const assignment =
        await AssignmentModel.findById(
          assignmentId
        );

      if (!assignment) {
        throw new Error(
          "Assignment not found"
        );
      }

      // =========================================
      // STATUS → PROCESSING
      // =========================================
      assignment.status =
        AssignmentStatus.PROCESSING;

      await assignment.save();

      emitAssignmentEvent(
        assignmentId,
        "assignment:progress",
        {
          status:
            AssignmentStatus.PROCESSING,
        }
      );

      // =========================================
      // STATUS → EXTRACTING PDF
      // =========================================
      assignment.status =
        AssignmentStatus.EXTRACTING_PDF;

      await assignment.save();

      emitAssignmentEvent(
        assignmentId,
        "assignment:progress",
        {
          status:
            AssignmentStatus.EXTRACTING_PDF,
        }
      );

      // =========================================
      // EXTRACT PDF
      // =========================================
      let extractedText = "";

      try {

        extractedText =
          await extractPdfText(
            assignment.fileUrl
          );

      } catch (error) {

        assignment.status =
          AssignmentStatus.FAILED_PDF_EXTRACTION;

        assignment.failureReason =
          error instanceof Error
            ? error.message
            : "PDF extraction failed";

        await assignment.save();

        emitAssignmentEvent(
          assignmentId,
          "assignment:failed",
          {
            status:
              AssignmentStatus.FAILED_PDF_EXTRACTION,

            message:
              assignment.failureReason,
          }
        );

        throw error;
      }

      assignment.extractedText =
        extractedText;

      await assignment.save();

      // =========================================
      // STATUS → GENERATING
      // =========================================
      assignment.status =
        AssignmentStatus.GENERATING;

      await assignment.save();

      emitAssignmentEvent(
        assignmentId,
        "assignment:progress",
        {
          status:
            AssignmentStatus.GENERATING,
        }
      );

      // =========================================
      // BUILD PROMPT
      // =========================================
      const prompt =
        buildQuestionPaperPrompt({
          extractedText,

          instructions:
            assignment.instructions || undefined,

          questionTypes:
            assignment.questionTypes,
        });

      // =========================================
      // GEMINI GENERATION
      // =========================================
      let aiResponse = "";

      try {

        aiResponse =
          await generateQuestionPaper(
            prompt
          );

      } catch (error) {

        assignment.status =
          AssignmentStatus.FAILED_GENERATION;

        assignment.failureReason =
          error instanceof Error
            ? error.message
            : "AI generation failed";

        await assignment.save();

        emitAssignmentEvent(
          assignmentId,
          "assignment:failed",
          {
            status:
              AssignmentStatus.FAILED_GENERATION,

            message:
              assignment.failureReason,
          }
        );

        throw error;
      }

      // =========================================
      // VALIDATION + RETRY
      // =========================================
      let parsedPaper;

      try {

        const repairedJson =
          safeJsonParse(aiResponse);

        parsedPaper =
          QuestionPaperSchema.parse(
            repairedJson
          );

      } catch (error) {

        console.log(
          "Validation failed. Retrying once..."
        );

        try {

          const retryResponse =
            await generateQuestionPaper(
              prompt
            );

          const repairedRetryJson =
            safeJsonParse(
              retryResponse
            );

          parsedPaper =
            QuestionPaperSchema.parse(
              repairedRetryJson
            );

        } catch (retryError) {

          assignment.status =
            AssignmentStatus.FAILED_VALIDATION;

          assignment.failureReason =
            retryError instanceof Error
              ? retryError.message
              : "Validation failed";

          await assignment.save();

          emitAssignmentEvent(
            assignmentId,
            "assignment:failed",
            {
              status:
                AssignmentStatus.FAILED_VALIDATION,

              message:
                assignment.failureReason,
            }
          );

          throw retryError;
        }
      }

      // =========================================
      // STATUS → STRUCTURING
      // =========================================
      assignment.status =
        AssignmentStatus.STRUCTURING;

      await assignment.save();

      emitAssignmentEvent(
        assignmentId,
        "assignment:progress",
        {
          status:
            AssignmentStatus.STRUCTURING,
        }
      );

      // =========================================
      // SAVE GENERATED PAPER
      // =========================================
      assignment.generatedPaper =
        parsedPaper;

      // =========================================
      // STATUS → COMPLETED
      // =========================================
      assignment.status =
        AssignmentStatus.COMPLETED;

      await assignment.save();

      // =========================================
      // EMIT COMPLETED EVENT
      // IMPORTANT UPDATED PAYLOAD
      // =========================================
      emitAssignmentEvent(
        assignmentId,
        "assignment:completed",
        {
          assignment,
        }
      );

      console.log(
        "Assignment generation completed"
      );

    } catch (error) {

      console.error(
        "Worker failed:",
        error
      );

      await AssignmentModel.findByIdAndUpdate(
        assignmentId,
        {
          status:
            AssignmentStatus.FAILED,

          failureReason:
            error instanceof Error
              ? error.message
              : "Unknown error",
        }
      );

      emitAssignmentEvent(
        assignmentId,
        "assignment:failed",
        {
          status:
            AssignmentStatus.FAILED,

          message:
            error instanceof Error
              ? error.message
              : "Unknown error",
        }
      );
    }
  },

  {
    connection: redis,
  }
);

console.log(
  "Assignment worker started"
);