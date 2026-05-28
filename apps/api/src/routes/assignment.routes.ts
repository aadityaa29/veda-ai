import { Router } from "express";
import {
  createAssignment,
  getAssignments,
  getAssignmentById,
  deleteAssignment,
  regenerateAssignment,
  downloadPdf,
} from "../controllers/assignment.controller";
import { upload } from "../config/multer";

const router = Router();

router.post(
  "/",
  upload.single("file"),
  createAssignment
);

router.get("/", getAssignments);

router.get("/:id", getAssignmentById);

router.delete("/:id", deleteAssignment);

router.post("/:id/regenerate", regenerateAssignment);

router.get(
  "/:id/pdf",
  downloadPdf
);

export default router;