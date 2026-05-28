interface Props {
  index: number;
}

export default function QuestionTypeRow({
  index,
}: Props) {

  return (
    <div
      className="
      grid
      grid-cols-3
      gap-4
      mb-4
    "
    >
      <select
        className="
        border
        rounded-xl
        p-3
      "
      >
        <option>
          MCQ
        </option>

        <option>
          Subjective
        </option>

        <option>
          Short Answer
        </option>
      </select>

      <input
        type="number"
        placeholder="Marks"
        className="
        border
        rounded-xl
        p-3
      "
      />

      <input
        type="number"
        placeholder="Count"
        className="
        border
        rounded-xl
        p-3
      "
      />
    </div>
  );
}