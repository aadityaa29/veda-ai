interface Props {
  label: string;
  value: number;
}

export default function CounterInput({
  label,
  value,
}: Props) {

  return (
    <div
      className="
      bg-white/5
      border
      rounded-2xl
      p-5
    "
    >
      <p className="text-gray-400">
        {label}
      </p>

      <h2
        className="
        text-3xl
        font-bold
        mt-2
      "
      >
        {value}
      </h2>
    </div>
  );
}