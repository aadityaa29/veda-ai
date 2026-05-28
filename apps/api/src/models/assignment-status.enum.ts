export enum AssignmentStatus {
  QUEUED = "queued",

  PROCESSING = "processing",

  EXTRACTING_PDF = "extracting_pdf",

  GENERATING = "generating",

  STRUCTURING = "structuring",

  COMPLETED = "completed",

  FAILED = "failed",

  FAILED_PDF_EXTRACTION =
    "failed_pdf_extraction",

  FAILED_GENERATION =
    "failed_generation",

  FAILED_VALIDATION =
    "failed_validation",
}