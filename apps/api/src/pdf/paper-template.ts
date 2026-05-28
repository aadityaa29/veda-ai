export const buildPaperHtml = (
  paper: any
) => {

  return `
  <!DOCTYPE html>

  <html>

    <head>

      <style>

        body {
          font-family: Arial;
          padding: 40px;
          color: #111;
        }

        h1, h2 {
          margin: 0;
        }

        .header {
          text-align: center;
          margin-bottom: 40px;
        }

        .student-info {
          display: flex;
          justify-content: space-between;
          margin-bottom: 40px;
        }

        .section {
          margin-bottom: 40px;
        }

        .question {
          margin-bottom: 25px;
          padding: 15px;
          border: 1px solid #ddd;
          border-radius: 12px;
        }

        .meta {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
        }

        .options {
          margin-top: 10px;
        }

        .option {
          margin-bottom: 5px;
        }

      </style>

    </head>

    <body>

      <div class="header">

        <h1>
          Greenwood Public School
        </h1>

        <p>
          AI Generated Question Paper
        </p>

        <h2>
          ${paper.title}
        </h2>

        <p>
          Total Marks:
          ${paper.totalMarks}
        </p>

      </div>

      <div class="student-info">

        <div>
          Name: ____________
        </div>

        <div>
          Roll No: ____________
        </div>

      </div>

      ${paper.sections.map(
        (section: any) => `

          <div class="section">

            <h2>
              ${section.sectionTitle}
            </h2>

            ${section.questions.map(
              (
                question: any,
                index: number
              ) => `

                <div class="question">

                  <div class="meta">

                    <strong>
                      Q${index + 1}
                    </strong>

                    <span>
                      ${question.marks} Marks
                    </span>

                  </div>

                  <p>
                    ${question.question}
                  </p>

                  ${
                    question.options
                    ? `
                      <div class="options">

                        ${question.options.map(
                          (
                            option: string,
                            optionIndex: number
                          ) => `

                            <div class="option">

                              ${String.fromCharCode(
                                65 + optionIndex
                              )}.

                              ${option}

                            </div>

                          `
                        ).join("")}

                      </div>
                    `
                    : ""
                  }

                </div>

              `
            ).join("")}

          </div>

        `
      ).join("")}

    </body>

  </html>
  `;
};