// sidebar.tsx

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  FileText,
  Plus,
  Settings,
  Sparkles,
  ChevronRight,
} from "lucide-react";

const links = [
  {
    label: "Dashboard",
    href: "/assignments",
    icon: LayoutDashboard,
  },

  {
    label: "Create",
    href: "/create",
    icon: Plus,
  },

  {
    label: "Papers",
    href: "/papers",
    icon: FileText,
  },

  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="
        relative
        hidden
        lg:flex
        w-[290px]
        border-r
        border-white/10
        bg-white/[0.04]
        backdrop-blur-2xl
        flex-col
        overflow-hidden
      "
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.14),transparent_35%)] pointer-events-none" />

      {/* Top */}
      <div className="relative z-10 p-6">
        {/* Logo */}
        <div
          className="
            flex
            items-center
            gap-4
            px-4
            py-4
            rounded-3xl
            border
            border-white/10
            bg-white/[0.03]
          "
        >
          <div
            className="
              h-14
              w-14
              rounded-2xl
              bg-gradient-to-br
              from-cyan-400
              to-blue-600
              flex
              items-center
              justify-center
              shadow-lg
              shadow-cyan-500/20
            "
          >
            <Sparkles size={24} className="text-white" />
          </div>

          <div>
            <h1
              className="
                text-2xl
                font-black
                tracking-tight
                bg-gradient-to-r
                from-cyan-300
                via-blue-400
                to-violet-400
                bg-clip-text
                text-transparent
              "
            >
              Veda AI
            </h1>

            <p className="text-sm text-gray-400 mt-1">
              Smart Assessment Studio
            </p>
          </div>
        </div>

        {/* Section */}
        <div className="mt-10 mb-4 px-2">
          <p
            className="
              text-xs
              font-semibold
              tracking-[0.2em]
              uppercase
              text-gray-500
            "
          >
            Workspace
          </p>
        </div>

        {/* Nav */}
        <nav className="space-y-3">
          {links.map((link) => {
            const Icon = link.icon;

            const isActive =
              pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  relative
                  group
                  flex
                  items-center
                  justify-between
                  px-5
                  py-4
                  rounded-2xl
                  transition-all
                  duration-300
                  overflow-hidden
                  border

                  ${
                    isActive
                      ? `
                        border-cyan-400/30
                        bg-gradient-to-r
                        from-cyan-500/15
                        to-blue-500/10
                        shadow-lg
                        shadow-cyan-500/10
                      `
                      : `
                        border-transparent
                        hover:border-white/10
                        hover:bg-white/[0.05]
                      `
                  }
                `}
              >
                {/* Glow */}
                {isActive && (
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-r
                      from-cyan-500/10
                      to-blue-500/10
                    "
                  />
                )}

                <div
                  className="
                    relative
                    z-10
                    flex
                    items-center
                    gap-4
                  "
                >
                  <div
                    className={`
                      h-11
                      w-11
                      rounded-xl
                      flex
                      items-center
                      justify-center
                      transition-all
                      duration-300

                      ${
                        isActive
                          ? `
                            bg-gradient-to-br
                            from-cyan-400
                            to-blue-500
                            text-white
                            shadow-lg
                            shadow-cyan-500/20
                          `
                          : `
                            bg-white/[0.05]
                            text-cyan-300
                            group-hover:bg-white/[0.08]
                          `
                      }
                    `}
                  >
                    <Icon size={20} />
                  </div>

                  <div>
                    <p
                      className={`
                        font-semibold
                        transition-colors

                        ${
                          isActive
                            ? "text-white"
                            : "text-gray-300 group-hover:text-white"
                        }
                      `}
                    >
                      {link.label}
                    </p>

                    <p className="text-xs text-gray-500 mt-0.5">
                      Manage {link.label.toLowerCase()}
                    </p>
                  </div>
                </div>

                <ChevronRight
                  size={18}
                  className={`
                    relative
                    z-10
                    transition-all
                    duration-300

                    ${
                      isActive
                        ? "text-cyan-300 translate-x-0"
                        : "text-gray-600 group-hover:text-gray-300 group-hover:translate-x-1"
                    }
                  `}
                />
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom Card */}
      <div className="relative z-10 mt-auto p-6">
        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-cyan-500/20
            bg-gradient-to-br
            from-cyan-500/10
            to-blue-500/10
            p-5
          "
        >
          <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-cyan-400/20 blur-3xl" />

          <p className="text-sm text-cyan-200 font-semibold">
            AI Powered Generation
          </p>

          <h3 className="mt-2 text-xl font-bold leading-snug">
            Create smarter assignments in seconds.
          </h3>

          <button
            className="
              mt-5
              w-full
              rounded-2xl
              bg-white
              text-black
              font-semibold
              py-3
              transition-all
              hover:scale-[1.02]
              active:scale-[0.98]
            "
          >
            Generate Now
          </button>
        </div>
      </div>
    </aside>
  );
}