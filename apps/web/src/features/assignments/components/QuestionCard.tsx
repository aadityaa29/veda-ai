import DifficultyBadge
from "./DifficultyBadge";

import MarksBadge
from "./MarksBadge";

interface Props {
  question: any;
  index: number;
}

export default function QuestionCard({
  question,
  index,
}: Props) {

  return (
    <div
      className="
      border
      border-white/10
      rounded-2xl
      p-6
      bg-white/5
      backdrop-blur-xl
    "
    >

      {/* Top Row */}
      <div
        className="
        flex
        justify-between
        items-start
        gap-4
        mb-5
      "
      >

        <div
          className="
          flex
          items-center
          gap-3
          flex-wrap
        "
        >

          <span
            className="
            text-lg
            font-bold
          "
          >
            Q{index + 1}
          </span>

          <DifficultyBadge
            difficulty={
              question.difficulty
            }
          />

          <span
            className="
            px-3
            py-1
            rounded-full
            text-xs
            bg-purple-500/20
            text-purple-300
          "
          >
            {question.type}
          </span>
        </div>

        <MarksBadge
          marks={
            question.marks
          }
        />
      </div>

      {/* Question */}
      <p
        className="
        text-lg
        leading-relaxed
        mb-6
      "
      >
        {question.question}
      </p>

      {/* Options */}
      {question.options && (
        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-4
          mb-6
        "
        >
          {question.options.map(
            (
              option: string,
              optionIndex: number
            ) => (

              <div
                key={optionIndex}
                className="
                border
                border-white/10
                rounded-xl
                p-4
                bg-white/5
              "
              >
                <span
                  className="
                  font-semibold
                  mr-2
                "
                >
                  {String.fromCharCode(
                    65 + optionIndex
                  )}.
                </span>

                {option}
              </div>
            )
          )}
        </div>
      )}

      {/* Answer */}
      {question.answer && (
        <div
          className="
          mt-5
          border
          border-green-500/20
          bg-green-500/10
          rounded-2xl
          p-4
        "
        >

          <p
            className="
            text-sm
            text-green-300
            font-medium
            mb-2
          "
          >
            Correct Answer
          </p>

          <p>
            {question.answer}
          </p>
        </div>
      )}
    </div>
  );
}