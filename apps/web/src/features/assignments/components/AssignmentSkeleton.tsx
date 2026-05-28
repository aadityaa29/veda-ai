export default function AssignmentSkeleton() {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.04]
        backdrop-blur-xl
        p-6
        h-[280px]
        animate-pulse
      "
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.10),transparent_35%)]" />

      {/* Shimmer Effect */}
      <div
        className="
          absolute
          inset-0
          -translate-x-full
          animate-[shimmer_2.5s_infinite]
          bg-gradient-to-r
          from-transparent
          via-white/10
          to-transparent
        "
      />

      {/* Top Row */}
      <div className="relative z-10 flex items-start justify-between">
        <div className="space-y-4 flex-1">
          {/* Title */}
          <div
            className="
              h-7
              w-2/3
              rounded-2xl
              bg-white/10
            "
          />

          {/* Subtitle */}
          <div
            className="
              h-4
              w-1/3
              rounded-full
              bg-white/5
            "
          />
        </div>

        {/* Icon Placeholder */}
        <div
          className="
            h-14
            w-14
            rounded-2xl
            bg-white/10
          "
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mt-8 space-y-4">
        <div
          className="
            h-4
            w-full
            rounded-full
            bg-white/10
          "
        />

        <div
          className="
            h-4
            w-[90%]
            rounded-full
            bg-white/10
          "
        />

        <div
          className="
            h-4
            w-[70%]
            rounded-full
            bg-white/5
          "
        />
      </div>

      {/* Bottom */}
      <div
        className="
          relative
          z-10
          mt-10
          flex
          items-center
          justify-between
        "
      >
        {/* Tags */}
        <div className="flex items-center gap-3">
          <div
            className="
              h-10
              w-24
              rounded-full
              bg-white/10
            "
          />

          <div
            className="
              h-10
              w-16
              rounded-full
              bg-white/5
            "
          />
        </div>

        {/* Button */}
        <div
          className="
            h-11
            w-11
            rounded-2xl
            bg-white/10
          "
        />
      </div>

      {/* Bottom Blur */}
      <div
        className="
          absolute
          -bottom-16
          left-1/2
          -translate-x-1/2
          h-32
          w-32
          rounded-full
          bg-cyan-400/10
          blur-3xl
        "
      />
    </div>
  );
}