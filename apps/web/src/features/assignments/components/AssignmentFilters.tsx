"use client";

import { Search, SlidersHorizontal } from "lucide-react";

export default function AssignmentFilters() {
  return (
    <div
      className="
      mb-8
      flex
      flex-col
      gap-4
      lg:flex-row
      lg:items-center
      lg:justify-between
    "
    >
      {/* Search Box */}
      <div
        className="
        group
        relative
        flex
        w-full
        items-center
        overflow-hidden
        rounded-2xl
        border
        border-zinc-200
        bg-white/90
        px-4
        py-3.5
        shadow-sm
        transition-all
        duration-300
        hover:border-blue-200
        hover:shadow-md
        focus-within:border-blue-400
        focus-within:ring-4
        focus-within:ring-blue-100
        lg:max-w-md
      "
      >
        <Search
          size={18}
          className="
            text-zinc-400
            transition-colors
            duration-300
            group-focus-within:text-blue-500
          "
        />

        <input
          type="text"
          placeholder="Search assignments..."
          className="
          ml-3
          w-full
          bg-transparent
          text-sm
          text-zinc-700
          placeholder:text-zinc-400
          outline-none
        "
        />
      </div>

      {/* Filter Section */}
      <div className="flex w-full items-center gap-3 lg:w-auto">

        <div
          className="
          flex
          items-center
          gap-2
          rounded-2xl
          border
          border-zinc-200
          bg-white
          px-4
          py-3
          shadow-sm
        "
        >
          <SlidersHorizontal
            size={16}
            className="text-zinc-500"
          />

          <select
            className="
            bg-transparent
            pr-2
            text-sm
            font-medium
            text-zinc-700
            outline-none
            cursor-pointer
          "
          >
            <option>
              All
            </option>

            <option>
              Completed
            </option>

            <option>
              Generating
            </option>

            <option>
              Failed
            </option>
          </select>
        </div>
      </div>
    </div>
  );
}