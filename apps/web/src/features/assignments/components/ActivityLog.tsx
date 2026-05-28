interface Props {
  logs: {
    timestamp: string;
    message: string;
  }[];
}

export default function ActivityLog({
  logs,
}: Props) {

  return (
    <div
      className="
      relative
      overflow-hidden
      rounded-3xl
      border
      border-zinc-800
      bg-[#111111]
      h-[320px]
    "
    >

      {/* Header */}
      <div
        className="
        sticky
        top-0
        z-10
        flex
        items-center
        justify-between
        border-b
        border-zinc-800
        bg-[#111111]/95
        px-5
        py-4
        backdrop-blur-xl
      "
      >
        <div>
          <h3
            className="
            text-sm
            font-semibold
            text-white
          "
          >
            Activity Logs
          </h3>

          <p
            className="
            mt-1
            text-xs
            text-zinc-500
          "
          >
            Live AI generation updates
          </p>
        </div>

        <div
          className="
          flex
          items-center
          gap-2
          rounded-full
          border
          border-zinc-800
          bg-zinc-900
          px-3
          py-1
        "
        >
          <div
            className="
            h-2
            w-2
            rounded-full
            bg-emerald-400
            animate-pulse
          "
          />

          <span
            className="
            text-[11px]
            font-medium
            text-zinc-400
          "
          >
            Live
          </span>
        </div>
      </div>

      {/* Logs */}
      <div
        className="
        h-[calc(320px-73px)]
        overflow-y-auto
        px-5
        py-4
        space-y-3
      "
      >
        {logs.map(
          (log, index) => (

            <div
              key={index}
              className="
              group
              flex
              items-start
              gap-4
              rounded-2xl
              border
              border-zinc-800
              bg-zinc-900/40
              p-4
              transition-all
              hover:border-zinc-700
              hover:bg-zinc-900/70
            "
            >

              {/* Timeline Dot */}
              <div
                className="
                mt-1.5
                h-2.5
                w-2.5
                rounded-full
                bg-blue-400
                shadow-[0_0_12px_rgba(96,165,250,0.8)]
              "
              />

              {/* Content */}
              <div className="flex-1">

                <div
                  className="
                  text-xs
                  font-medium
                  text-blue-400
                "
                >
                  {log.timestamp}
                </div>

                <p
                  className="
                  mt-1
                  text-sm
                  leading-6
                  text-zinc-300
                "
                >
                  {log.message}
                </p>
              </div>
            </div>
          )
        )}

        {/* Empty State */}
        {logs.length === 0 && (
          <div
            className="
            flex
            h-full
            items-center
            justify-center
          "
          >
            <div className="text-center">

              <div
                className="
                mx-auto
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                bg-zinc-900
                border
                border-zinc-800
              "
              >
                <div
                  className="
                  h-2
                  w-2
                  rounded-full
                  bg-zinc-600
                "
                />
              </div>

              <p
                className="
                mt-4
                text-sm
                text-zinc-500
              "
              >
                No activity logs yet
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}