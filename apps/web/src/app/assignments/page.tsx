"use client";

import { useEffect } from "react";

import {
  Sparkles,
  FileText,
  Activity,
  ArrowRight,
  Search,
} from "lucide-react";

import DashboardLayout from "@/src/components/layout/DashboardLayout";

import AssignmentGrid from "@/src/features/assignments/components/AssignmentGrid";

import { useAssignmentStore } from "@/src/stores/assignment.store";

export default function AssignmentsPage() {
  const {
    assignments,
    fetchAssignments,
  } = useAssignmentStore();

  useEffect(() => {
    fetchAssignments();
  }, []);

  return (
    <DashboardLayout>
      <div className="relative min-h-screen overflow-hidden bg-[#0A0A0A] text-white">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_40%)]" />

        {/* Noise Grid */}
        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]
            bg-[size:40px_40px]
            pointer-events-none
          "
        />

        <div className="relative z-10 space-y-6 p-6">
          {/* Header */}
          <div
            className="
              rounded-3xl
              border
              border-zinc-800
              bg-[#111111]
              p-6
            "
          >
            <div
              className="
                flex
                flex-col
                gap-6
                lg:flex-row
                lg:items-center
                lg:justify-between
              "
            >
              {/* Left */}
              <div>
                <div
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-zinc-800
                    bg-zinc-900
                    px-3
                    py-1.5
                  "
                >
                  <Sparkles className="h-4 w-4 text-blue-400" />

                  <span className="text-xs font-medium text-zinc-300">
                    AI Workspace
                  </span>
                </div>

                <h1
                  className="
                    mt-5
                    text-3xl
                    font-semibold
                    tracking-tight
                  "
                >
                  Assignments
                </h1>

                <p
                  className="
                    mt-2
                    max-w-xl
                    text-sm
                    leading-6
                    text-zinc-400
                  "
                >
                  Manage, organize, and generate
                  AI-powered assignments from your
                  workspace dashboard.
                </p>
              </div>

              {/* Create Button */}
              <button
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-2xl
                  bg-white
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-black
                  transition-all
                  hover:bg-zinc-200
                "
              >
                Create Assignment

                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Analytics */}
          <div className="grid gap-4 md:grid-cols-3">
            {/* Card */}
            <div
              className="
                rounded-3xl
                border
                border-zinc-800
                bg-[#111111]
                p-5
              "
            >
              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-2xl
                  bg-blue-500/10
                "
              >
                <FileText className="h-5 w-5 text-blue-400" />
              </div>

              <h3 className="mt-5 text-2xl font-semibold">
                {assignments.length}
              </h3>

              <p className="mt-1 text-sm text-zinc-400">
                Total Assignments
              </p>
            </div>

            {/* Card */}
            <div
              className="
                rounded-3xl
                border
                border-zinc-800
                bg-[#111111]
                p-5
              "
            >
              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-2xl
                  bg-emerald-500/10
                "
              >
                <Activity className="h-5 w-5 text-emerald-400" />
              </div>

              <h3 className="mt-5 text-2xl font-semibold">
                Live
              </h3>

              <p className="mt-1 text-sm text-zinc-400">
                AI Processing
              </p>
            </div>

            {/* Card */}
            <div
              className="
                rounded-3xl
                border
                border-zinc-800
                bg-[#111111]
                p-5
              "
            >
              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-2xl
                  bg-violet-500/10
                "
              >
                <Sparkles className="h-5 w-5 text-violet-400" />
              </div>

              <h3 className="mt-5 text-2xl font-semibold">
                Smart
              </h3>

              <p className="mt-1 text-sm text-zinc-400">
                AI Generated Content
              </p>
            </div>
          </div>

          {/* Toolbar */}
          <div
            className="
              flex
              flex-col
              gap-4
              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >
            {/* Search */}
            <div
              className="
                flex
                w-full
                max-w-md
                items-center
                gap-3
                rounded-2xl
                border
                border-zinc-800
                bg-[#111111]
                px-4
                py-3
                transition-all
                focus-within:border-blue-500
              "
            >
              <Search className="h-4 w-4 text-zinc-500" />

              <input
                type="text"
                placeholder="Search assignments..."
                className="
                  w-full
                  bg-transparent
                  text-sm
                  text-white
                  outline-none
                  placeholder:text-zinc-500
                "
              />
            </div>

            {/* Filter Button */}
            <button
              className="
                rounded-2xl
                border
                border-zinc-800
                bg-[#111111]
                px-5
                py-3
                text-sm
                font-medium
                text-zinc-300
                transition-all
                hover:bg-zinc-900
              "
            >
              Latest First
            </button>
          </div>

          {/* Assignment Section */}
          <div
            className="
              overflow-hidden
              rounded-3xl
              border
              border-zinc-800
              bg-[#111111]
            "
          >
            {/* Section Header */}
            <div
              className="
                flex
                items-center
                justify-between
                border-b
                border-zinc-800
                p-6
              "
            >
              <div>
                <h2 className="text-xl font-semibold">
                  Assignment Library
                </h2>

                <p className="mt-1 text-sm text-zinc-400">
                  Browse and manage generated
                  assignments
                </p>
              </div>

              <div
                className="
                  rounded-xl
                  border
                  border-zinc-800
                  bg-zinc-900
                  px-3
                  py-2
                  text-sm
                  font-medium
                  text-zinc-300
                "
              >
                {assignments.length} Items
              </div>
            </div>

            {/* Grid */}
            <div className="p-6">
              <AssignmentGrid
                assignments={assignments}
              />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}