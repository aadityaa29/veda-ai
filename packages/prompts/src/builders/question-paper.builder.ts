interface BuildQuestionPaperPromptParams {
  extractedText: string;
  questionTypes?: string[];
  instructions?: string;
}


export const buildQuestionPaperPrompt = ({
  extractedText,
  questionTypes,
  instructions,
}: BuildQuestionPaperPromptParams) => {
  return `
You are an expert CBSE teacher.

Your task is to generate a professional question paper.

IMPORTANT RULES:
- Return STRICT JSON ONLY
- NO markdown
- NO explanations
- NO code blocks
- NO extra text
- Output MUST be valid parsable JSON



Generate:
- sections
- questions
- marks
- difficulty
- answer keys

Question Types:
${questionTypes?.join(", ") || "mcq"}

Teacher Instructions:
${instructions || "None"}

Study Material:
${extractedText}

Required JSON Format:

{
  "title": "Sample Question Paper",
  "totalMarks": 100,
  "sections": [
    {
      "sectionTitle": "Section A",
      "questions": [
        {
          "question": "What is Newton's First Law?",
          "type": "mcq",
          "difficulty": "easy",
          "marks": 2,
          "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
          ],
          "answer": "Option A"
        }
      ]
    }
  ]
}

IMPORTANT RULES:

1. Return ONLY valid JSON
2. DO NOT use markdown
3. DO NOT wrap response in json
4. DO NOT explain anything
5. DO NOT include extra text
6. Response must start with {
7. Response must end with }
8. Ensure all quotes are escaped properly
9. Ensure valid JSON syntax

`;
};