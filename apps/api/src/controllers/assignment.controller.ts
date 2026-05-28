import { Request, Response } from "express";

import { AssignmentModel } from "../models/assignment.model";
import { AssignmentStatus } from "../models/assignment-status.enum";
import { assignmentQueue } from "../queues/assignment.queue";
import { generatePdf } from "../pdf/generate-pdf";
import multer from "multer";

export const createAssignment = async (
  req: Request,
  res: Response
) => {

  try {

    const {
      title,
      dueDate,
      instructions,
      questionTypes,
    } = req.body;

    const file =
      req.file;

    if (!file) {

      return res.status(400).json({
        success: false,
        message:
          "PDF file is required",
      });
    }

    // =========================
    // CREATE ASSIGNMENT
    // =========================

    const assignment =
      await AssignmentModel.create({

        title,

        dueDate,

        instructions,

        questionTypes:
          typeof questionTypes ===
          "string"
            ? JSON.parse(
                questionTypes
              )
            : questionTypes,

        fileUrl:
          file.path,

        status:
          AssignmentStatus.QUEUED,
      });

    // =========================
    // ADD QUEUE JOB
    // =========================

    await assignmentQueue.add(
      "generate-assignment",
      {
        assignmentId:
          assignment._id,
      }
    );

    res.status(201).json({
      success: true,
      message:
        "Assignment uploaded successfully",
      data: assignment,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message:
        "Failed to create assignment",
    });
  }
};


// =========================
// GET ALL ASSIGNMENTS
// =========================

export const getAssignments = async (
  req: Request,
  res: Response
) => {

  try {

    const assignments =
      await AssignmentModel.find()
        .sort({
          createdAt: -1,
        });

    res.status(200).json({
      success: true,
      message:
        "Assignments fetched successfully",
      assignments,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message:
        "Failed to fetch assignments",
    });
  }
};


// =========================
// GET SINGLE ASSIGNMENT
// =========================

export const getAssignmentById = async (
  req: Request,
  res: Response
) => {

  try {

    const { id } =
      req.params;

    const assignment =
      await AssignmentModel.findById(
        id
      );

    if (!assignment) {

      return res.status(404).json({
        success: false,
        message:
          "Assignment not found",
      });
    }

    res.status(200).json({
      success: true,
      message:
        "Assignment fetched successfully",
      assignment,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message:
        "Failed to fetch assignment",
    });
  }
};


// =========================
// DELETE ASSIGNMENT
// =========================

export const deleteAssignment = async (
  req: Request,
  res: Response
) => {

  try {

    const { id } =
      req.params;

    await AssignmentModel.findByIdAndDelete(
      id
    );

    res.status(200).json({
      success: true,
      message:
        "Assignment deleted successfully",
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message:
        "Failed to delete assignment",
    });
  }
};


// =========================
// REGENERATE ASSIGNMENT
// =========================

export const regenerateAssignment = async (
  req: Request,
  res: Response
) => {

  try {

    const { id } =
      req.params;

    const assignment =
      await AssignmentModel.findById(
        id
      );

    if (!assignment) {

      return res.status(404).json({
        success: false,
        message:
          "Assignment not found",
      });
    }

    assignment.status =
      AssignmentStatus.QUEUED;

    await assignment.save();

    await assignmentQueue.add(
      "generate-assignment",
      {
        assignmentId:
          assignment._id,
      }
    );

    res.status(200).json({
      success: true,
      message:
        "Assignment regeneration started",
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message:
        "Failed to regenerate assignment",
    });
  }
};


// =========================
// DOWNLOAD PDF
// =========================

export const downloadPdf =
  async (
    req: Request,
    res: Response
  ) => {

    try {

      const { id } =
        req.params;

      const assignment =
        await AssignmentModel.findById(
          id
        );

      if (!assignment) {

        return res.status(404).json({
          success: false,
          message:
            "Assignment not found",
        });
      }

      const pdfPath =
        await generatePdf(
          assignment.generatedPaper,
          assignment._id.toString()
        );

      res.download(pdfPath);

    } catch (error) {

      console.error(error);

      res.status(500).json({
        success: false,
        message:
          "Failed to generate PDF",
      });
    }
  };