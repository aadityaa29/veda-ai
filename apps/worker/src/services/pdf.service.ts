import fs from "fs";
import path from "path";
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf.mjs";

const MAX_TEXT_LENGTH = 15000;

export const extractPdfText = async (
  filePath: string
): Promise<string> => {
  try {

    const absolutePath = path.resolve(
      process.cwd(),
      "../api",
      filePath
    );

    if (!fs.existsSync(absolutePath)) {
      throw new Error("PDF file not found");
    }

    const pdfBuffer =
      fs.readFileSync(absolutePath);

    const loadingTask =
      pdfjsLib.getDocument({
        data: new Uint8Array(pdfBuffer),
      });

    const pdf =
      await loadingTask.promise;

    let extractedText = "";

    for (
      let pageNum = 1;
      pageNum <= pdf.numPages;
      pageNum++
    ) {

      const page =
        await pdf.getPage(pageNum);

      const content =
        await page.getTextContent();

      const strings =
        content.items.map(
          (item: any) => item.str
        );

      extractedText +=
        strings.join(" ") + "\n";
    }

    extractedText =
      extractedText
        .replace(/\s+/g, " ")
        .trim();

    if (!extractedText) {
      throw new Error(
        "No text extracted from PDF"
      );
    }

    if (
      extractedText.length >
      MAX_TEXT_LENGTH
    ) {
      extractedText =
        extractedText.slice(
          0,
          MAX_TEXT_LENGTH
        ) +
        "\n\n[Content Truncated]";
    }

    fs.unlinkSync(absolutePath);

    return extractedText;

  } catch (error) {

    console.error(
      "PDF Extraction Error:",
      error
    );

    throw new Error(
      "Failed to extract PDF text"
    );
  }
};