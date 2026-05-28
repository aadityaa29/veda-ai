// topnavbar.tsx

"use client";

import {
  Bell,
  Search,
  Sparkles,
  Command,
} from "lucide-react";

export default function TopNavbar() {
  return (
    <header
      className="
        sticky
        top-0
        z-30
        h-[88px]
        border-b
        border-white/10
        bg-[#020617]/70
        backdrop-blur-2xl
      "
    >
      <div
        className="
          h-full
          px-6
          lg:px-8
          flex
          items-center
          justify-between
          gap-6
        "
      >
        {/* Left */}
        <div className="flex items-center gap-6 flex-1">
          {/* Heading */}
          <div className="hidden md:block">
            <h2 className="text-2xl font-bold tracking-tight">
              Welcome back 👋
            </h2>

            <p className="text-sm text-gray-400 mt-1">
              Create and manage AI-generated assessments
            </p>
          </div>

          {/* Search */}
          <div
            className="
              relative
              flex-1
              max-w-xl
            "
          >
            <Search
              size={18}
              className="
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                text-gray-500
              "
            />

            <input
              placeholder="Search assignments, papers..."
              className="
                h-14
                w-full
                rounded-2xl
                border
                border-white/10
                bg-white/[0.04]
                backdrop-blur-xl
                pl-12
                pr-20
                text-sm
                outline-none
                transition-all
                placeholder:text-gray-500
                focus:border-cyan-400/40
                focus:bg-white/[0.06]
                focus:ring-4
                focus:ring-cyan-500/10
              "
            />

            {/* Shortcut */}
            <div
              className="
                absolute
                right-3
                top-1/2
                -translate-y-1/2
                hidden
                sm:flex
                items-center
                gap-1
                rounded-lg
                border
                border-white/10
                bg-white/[0.04]
                px-2
                py-1
                text-xs
                text-gray-400
              "
            >
              <Command size={12} />
              K
            </div>
          </div>
        </div>

        {/* Right */}
        <div
          className="
            flex
            items-center
            gap-4
          "
        >
          {/* AI Status */}
          <div
            className="
              hidden
              xl:flex
              items-center
              gap-2
              rounded-2xl
              border
              border-cyan-500/20
              bg-cyan-500/10
              px-4
              py-3
            "
          >
            <Sparkles
              size={16}
              className="text-cyan-300"
            />

            <span className="text-sm font-medium text-cyan-100">
              AI Ready
            </span>
          </div>

          {/* Notifications */}
          <button
            className="
              relative
              h-14
              w-14
              rounded-2xl
              border
              border-white/10
              bg-white/[0.04]
              backdrop-blur-xl
              flex
              items-center
              justify-center
              hover:bg-white/[0.08]
              transition-all
              duration-300
            "
          >
            <Bell size={20} />

            <span
              className="
                absolute
                top-3
                right-3
                h-2.5
                w-2.5
                rounded-full
                bg-cyan-400
                ring-4
                ring-[#020617]
              "
            />
          </button>

          {/* Profile */}
          <button
            className="
              flex
              items-center
              gap-3
              rounded-2xl
              border
              border-white/10
              bg-white/[0.04]
              backdrop-blur-xl
              px-3
              py-2
              hover:bg-white/[0.06]
              transition-all
            "
          >
            <div
              className="
                h-11
                w-11
                rounded-xl
                bg-gradient-to-br
                from-cyan-400
                via-blue-500
                to-violet-500
                shadow-lg
                shadow-cyan-500/20
              "
            />

            <div className="hidden md:block text-left">
              <p className="text-sm font-semibold">
                Aditya
              </p>

              <p className="text-xs text-gray-400">
                Administrator
              </p>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}