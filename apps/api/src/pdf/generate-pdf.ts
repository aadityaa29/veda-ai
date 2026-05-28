import puppeteer from "puppeteer";

import fs from "fs";
import path from "path";

import { buildPaperHtml }
from "./paper-template.js";

export const generatePdf =
  async (
    paper: any,
    assignmentId: string
  ) => {

    const browser =
      await puppeteer.launch();

    const page =
      await browser.newPage();

    const html =
      buildPaperHtml(paper);

    await page.setContent(html, {
  waitUntil:
    "domcontentloaded",
});

await page.waitForNetworkIdle();


    const pdfDir =
      path.join(
        process.cwd(),
        "generated-pdfs"
      );

    if (
      !fs.existsSync(pdfDir)
    ) {
      fs.mkdirSync(pdfDir);
    }

    const pdfPath =
      path.join(
        pdfDir,
        `${assignmentId}.pdf`
      );

    await page.pdf({
      path: pdfPath,

      format: "A4",

      printBackground: true,
    });

    await browser.close();

    return pdfPath;
  };