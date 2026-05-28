interface Props {
  marks: number;
}

export default function MarksBadge({
  marks,
}: Props) {

  return (
    <div
      className="
      min-w-[90px]
      text-center
      px-4
      py-2
      rounded-xl
      bg-blue-500/20
      text-blue-300
      font-semibold
      text-sm
    "
    >
      {marks} Marks
    </div>
  );
}