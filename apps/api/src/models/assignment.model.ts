import mongoose, { Schema } from "mongoose";
import { AssignmentStatus } from "./assignment-status.enum";

const AssignmentSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    dueDate: {
      type: Date,
    },

    instructions: {
      type: String,
    },

    questionTypes: {
      type: [String],
      default: [],
    },

    fileUrl: {
      type: String,
      required: true,
    },

    extractedText: {
      type: String,
    },

    status: {
      type: String,
      enum: Object.values(AssignmentStatus),
      default: AssignmentStatus.QUEUED,
    },

    generatedPaper: {
      type: Object,
    },

  failureReason: {
  type: String,
  },
  },
  {
    timestamps: true,
  }
);

export const AssignmentModel = mongoose.model(
  "Assignment",
  AssignmentSchema
);