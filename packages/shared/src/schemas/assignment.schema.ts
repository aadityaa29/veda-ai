import { z } from "zod";

export const QuestionTypeSchema = z.object({
  type: z.string(),
  count: z.number().min(1),
  marks: z.number().min(1),
});

export const AssignmentSchema = z.object({
  title: z.string().min(3),
  dueDate: z.string(),
  instructions: z.string().optional(),
  questionTypes: z.array(QuestionTypeSchema),
  extractedText: z.string().optional(),
});

export type AssignmentInput = z.infer<typeof AssignmentSchema>;
