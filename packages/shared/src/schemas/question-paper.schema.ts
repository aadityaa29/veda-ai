import { z } from "zod";


export const QuestionSchema = z.object({
  question: z.string(),

  type: z.string(),

  difficulty: z.string(),

  marks: z.number(),

  options: z.array(z.string()).optional(),

  answer: z.string(),
});


export const SectionSchema = z.object({
  sectionTitle: z.string(),

  questions: z.array(QuestionSchema),
});


export const QuestionPaperSchema = z.object({
  title: z.string(),

  totalMarks: z.number(),

  sections: z.array(SectionSchema),
});