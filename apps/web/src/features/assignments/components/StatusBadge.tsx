interface Props {
  status: string;
}

const statusColors: Record<
  string,
  string
> = {
  queued:
    "bg-yellow-500/20 text-yellow-300",

  processing:
    "bg-blue-500/20 text-blue-300",

  extracting_pdf:
    "bg-purple-500/20 text-purple-300",

  generating:
    "bg-cyan-500/20 text-cyan-300",

  structuring:
    "bg-indigo-500/20 text-indigo-300",

  completed:
    "bg-green-500/20 text-green-300",

  failed:
    "bg-red-500/20 text-red-300",
};

export default function StatusBadge({
  status,
}: Props) {

  return (
    <span
      className={`
      px-4
      py-2
      rounded-full
      text-sm
      font-medium

      ${
        statusColors[
          status
        ]
      }
    `}
    >
      {status}
    </span>
  );
}