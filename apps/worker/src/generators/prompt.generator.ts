interface PromptPayload {
  extractedText: string;
  instructions?: string;
  questionTypes?: string[];
}

export const generateAssignmentPrompt = ({
  extractedText,
  instructions,
  questionTypes,
}: PromptPayload) => {
  return `
You are an expert CBSE teacher.

Based on the following study material, generate a professional question paper.

IMPORTANT RULES:
- Return STRICT JSON ONLY
- No markdown
- No explanations
- No extra text
- Output must be valid parsable JSON

Generate:
- sections
- questions
- marks
- difficulty level
- answer key

Question Types:
${questionTypes?.join(", ")}

Teacher Instructions:
${instructions || "None"}

Study Material:
${extractedText}

Required JSON Structure:

{
  "title": "Sample Paper",
  "totalMarks": 100,
  "sections": [
    {
      "sectionTitle": "Section A",
      "questions": [
        {
          "question": "What is...",
          "type": "mcq",
          "difficulty": "easy",
          "marks": 2,
          "options": [
            "A",
            "B",
            "C",
            "D"
          ],
          "answer": "A"
        }
      ]
    }
  ]
}
`;
};