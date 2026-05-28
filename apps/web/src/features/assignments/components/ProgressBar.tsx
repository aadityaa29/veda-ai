interface Props {
  progress: number;
}

export default function ProgressBar({
  progress,
}: Props) {

  return (
    <div
      className="
      w-full
      h-3
      bg-white/10
      rounded-full
      overflow-hidden
    "
    >
      <div
        className="
        h-full
        bg-gradient-to-r
        from-blue-500
        to-cyan-400
        transition-all
        duration-500
      "
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
}