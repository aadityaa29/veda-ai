"use client";

import Link from "next/link";

import {
  Trash2,
  RefreshCcw,
} from "lucide-react";

interface Props {
  assignment: any;
}

export default function AssignmentCard({
  assignment,
}: Props) {

  return (
    <Link
      href={`/assignments/${assignment._id}`}
      className="block group"
    >
      <div
        className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white
        p-6
        shadow-[0_4px_20px_rgba(0,0,0,0.04)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]
        cursor-pointer
      "
      >

        {/* subtle glow */}
        <div
          className="
          absolute
          inset-0
          bg-gradient-to-br
          from-blue-50/60
          via-transparent
          to-purple-50/40
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-500
          pointer-events-none
        "
        />

        <div className="relative z-10 flex items-start justify-between gap-4">

          <div className="flex-1 min-w-0">

            <h2
              className="
              text-xl
              font-semibold
              text-zinc-900
              tracking-tight
              line-clamp-1
            "
            >
              {assignment.title}
            </h2>

            <p
              className="
              mt-2
              text-sm
              leading-relaxed
              text-zinc-500
              line-clamp-2
            "
            >
              {assignment.instructions}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">

            <button
              onClick={(e) => {
                e.preventDefault();
              }}
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-xl
                border
                border-zinc-200
                bg-white/80
                text-zinc-500
                transition-all
                duration-200
                hover:border-blue-200
                hover:bg-blue-50
                hover:text-blue-600
              "
            >
              <RefreshCcw
                size={16}
              />
            </button>

            <button
              onClick={(e) => {
                e.preventDefault();
              }}
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-xl
                border
                border-zinc-200
                bg-white/80
                text-zinc-500
                transition-all
                duration-200
                hover:border-red-200
                hover:bg-red-50
                hover:text-red-600
              "
            >
              <Trash2
                size={16}
              />
            </button>
          </div>
        </div>

        <div className="relative z-10 mt-5 flex items-center justify-between">

          <span
            className="
            inline-flex
            items-center
            rounded-full
            border
            border-blue-100
            bg-gradient-to-r
            from-blue-50
            to-indigo-50
            px-3.5
            py-1.5
            text-xs
            font-medium
            tracking-wide
            text-blue-700
          "
          >
            {assignment.status}
          </span>

          <div
            className="
            text-xs
            font-medium
            text-zinc-400
            transition-all
            duration-300
            group-hover:text-zinc-600
          "
          >
            View Details →
          </div>
        </div>
      </div>
    </Link>
  );
}