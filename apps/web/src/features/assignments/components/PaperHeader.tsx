interface Props {
  title: string;
  totalMarks: number;
}

export default function PaperHeader({
  title,
  totalMarks,
}: Props) {

  return (
    <div
      className="
      border-b
      border-white/10
      pb-8
      mb-10
    "
    >

      <div
        className="
        flex
        justify-between
        items-start
      "
      >

        <div>
          <h1
            className="
            text-4xl
            font-bold
          "
          >
            Greenwood Public School
          </h1>

          <p
            className="
            text-gray-400
            mt-2
          "
          >
            AI Generated Question Paper
          </p>
        </div>

        <div
          className="
          bg-blue-500/20
          text-blue-300
          px-5
          py-3
          rounded-2xl
          font-semibold
        "
        >
          Total Marks:
          {" "}
          {totalMarks}
        </div>
      </div>

      <div className="mt-8">
        <h2
          className="
          text-3xl
          font-bold
        "
        >
          {title}
        </h2>
      </div>
    </div>
  );
}