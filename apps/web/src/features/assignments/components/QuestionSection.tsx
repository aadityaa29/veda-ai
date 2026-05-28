import QuestionCard
from "./QuestionCard";

interface Props {
  section: any;
}

export default function QuestionSection({
  section,
}: Props) {

  return (
    <div>

      <div
        className="
        flex
        justify-between
        items-center
        mb-6
      "
      >
        <h2
          className="
          text-2xl
          font-bold
        "
        >
          {section.sectionTitle}
        </h2>

        <div
          className="
          text-sm
          text-gray-400
        "
        >
          {
            section.questions.length
          } Questions
        </div>
      </div>

      <div className="space-y-5">
        {section.questions.map(
          (
            question: any,
            index: number
          ) => (

            <QuestionCard
              key={index}
              question={question}
              index={index}
            />
          )
        )}
      </div>
    </div>
  );
}