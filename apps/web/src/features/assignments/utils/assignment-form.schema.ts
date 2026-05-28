import { z } from "zod";

export const assignmentSchema =
  z.object({

    title:
      z.string().min(3),

    instructions:
      z.string().min(5),

    questionTypes:
      z.array(
        z.object({

          type:
            z.string(),

          marks:
            z.number(),

          count:
            z.number(),
        })
      ).optional(),

    file:
      z.instanceof(File),
  });

export type AssignmentFormData =
  z.infer<
    typeof assignmentSchema
  >;