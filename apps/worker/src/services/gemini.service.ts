import {
  GoogleGenerativeAI,
} from "@google/generative-ai";

import dotenv from "dotenv";

dotenv.config();

const genAI =
  new GoogleGenerativeAI(
    process.env.GEMINI_API_KEY!
  );

// =========================================
// MODEL
// =========================================

const model =
  genAI.getGenerativeModel({

    // More stable for JSON generation
    model: "gemini-2.0-flash",
  });

// =========================================
// GENERATE QUESTION PAPER
// =========================================

export const generateQuestionPaper =
  async (
    prompt: string
  ): Promise<string> => {

    try {

      const finalPrompt = `
IMPORTANT:
- Return STRICT JSON ONLY
- DO NOT use markdown
- DO NOT use \`\`\`json
- DO NOT explain anything
- DO NOT add extra text
- Response MUST start with {
- Response MUST end with }
- Ensure valid parsable JSON
- Keep answers concise
- Maximum 3-4 lines per answer
- Generate at most 15 questions total

${prompt}
`;

      const result =
        await model.generateContent({

          contents: [
            {
              role: "user",

              parts: [
                {
                  text:
                    finalPrompt,
                },
              ],
            },
          ],

          generationConfig: {

            temperature: 0.3,

            topP: 0.8,

            topK: 40,

            // Prevent truncation
            maxOutputTokens:
              8192,

            // VERY IMPORTANT
            responseMimeType:
              "application/json",
          },
        });

      const response =
        result.response.text();

      return response;

    } catch (error) {

      console.error(
        "Gemini Generation Error:",
        error
      );

      throw new Error(
        "Failed to generate question paper"
      );
    }
  };