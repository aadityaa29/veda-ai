export const extractJsonFromText = (
  text: string
): string => {

  let cleaned = text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/[\u2018\u2019]/g, "'")
    .trim();

  // Find FIRST {
  const start =
    cleaned.indexOf("{");

  // Find LAST }
  const end =
    cleaned.lastIndexOf("}");

  if (
    start === -1 ||
    end === -1
  ) {
    throw new Error(
      "No JSON found"
    );
  }

  cleaned =
    cleaned.slice(
      start,
      end + 1
    );

  return cleaned;
};

export const repairJson = (
  json: string
): string => {

  return json

    // Remove trailing commas
    .replace(/,\s*}/g, "}")
    .replace(/,\s*]/g, "]")

    // Remove invisible chars
    .replace(/\u0000/g, "")

    // Remove bad control chars
    .replace(
      /[\x00-\x1F\x7F]/g,
      ""
    )

    // Fix line breaks
    .replace(/\n/g, " ")

    // Collapse spaces
    .replace(/\s+/g, " ")

    .trim();
};

export const safeJsonParse = (
  text: string
) => {

  try {

    const extracted =
      extractJsonFromText(
        text
      );

    const repaired =
      repairJson(
        extracted
      );

    return JSON.parse(
      repaired
    );

  } catch (error) {

    console.error(
      "RAW AI RESPONSE:\n",
      text
    );

    console.error(
      "JSON Parse Error:",
      error
    );

    throw new Error(
      "Failed to parse AI response"
    );
  }
};