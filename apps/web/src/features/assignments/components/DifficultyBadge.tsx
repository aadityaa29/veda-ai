interface Props {
  difficulty: string;
}

const colors: Record<
  string,
  string
> = {

  easy:
    "bg-green-500/20 text-green-300",

  medium:
    "bg-yellow-500/20 text-yellow-300",

  hard:
    "bg-red-500/20 text-red-300",
};

export default function DifficultyBadge({
  difficulty,
}: Props) {

  return (
    <span
      className={`
      px-3
      py-1
      rounded-full
      text-xs
      font-medium

      ${
        colors[
          difficulty
        ] ||
        "bg-gray-500/20 text-gray-300"
      }
    `}
    >
      {difficulty}
    </span>
  );
}