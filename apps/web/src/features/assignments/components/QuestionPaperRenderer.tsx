import PaperHeader
from "./PaperHeader";

import StudentInfoSection
from "./StudentInfoSection";

import QuestionSection
from "./QuestionSection";

import PaperFooter
from "./PaperFooter";

interface Props {
  paper: any;
}

export default function QuestionPaperRenderer({
  paper,
}: Props) {

  return (
    <div
      className="
      max-w-5xl
      mx-auto
      bg-[#0f172a]
      border
      border-white/10
      rounded-3xl
      p-10
      shadow-2xl
      text-white
    "
    >

      <PaperHeader
        title={paper.title}
        totalMarks={
          paper.totalMarks
        }
      />

      <StudentInfoSection />

      <div className="space-y-12">
        {paper.sections.map(
          (
            section: any,
            index: number
          ) => (

            <QuestionSection
              key={index}
              section={section}
            />
          )
        )}
      </div>

      <PaperFooter />
    </div>
  );
}