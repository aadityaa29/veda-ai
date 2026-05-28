"use client";

import {
  useEffect,
} from "react";

import {
  useParams,
} from "next/navigation";

import {
  Sparkles,
  Download,
  Activity,
  Clock3,
} from "lucide-react";

import DashboardLayout
from "@/src/components/layout/DashboardLayout";

import {
  useAssignmentStore,
} from "@/src/stores/assignment.store";

import {
  useSocketStore,
} from "@/src/stores/socket.store";

import LiveGenerationPanel
from "@/src/features/assignments/components/LiveGenerationPanel";

import QuestionPaperRenderer
from "@/src/features/assignments/components/QuestionPaperRenderer";

import DownloadPdfButton
from "@/src/features/assignments/components/DownloadPdfButton";

export default function AssignmentDetailsPage() {

  const params =
    useParams();

  const id =
    params.id as string;

  const {
    currentAssignment,
    fetchAssignment,
  } =
    useAssignmentStore();

  const {
    connect,
    joinRoom,
    listenToEvents,
  } =
    useSocketStore();

  useEffect(() => {

    const initialize =
      async () => {

        await fetchAssignment(
          id
        );

        await connect();

        joinRoom(id);

        listenToEvents();
      };

    initialize();

  }, [id]);

  if (!currentAssignment) {

    return (
      <DashboardLayout>

        <div
          className="
          min-h-screen
          bg-[#0A0A0A]
          text-white
          flex
          items-center
          justify-center
        "
        >
          <div
            className="
            flex
            items-center
            gap-3
            rounded-2xl
            border
            border-zinc-800
            bg-[#111111]
            px-6
            py-4
          "
          >
            <div
              className="
              h-3
              w-3
              rounded-full
              bg-blue-500
              animate-pulse
            "
            />

            <p className="text-sm text-zinc-300">
              Loading assignment...
            </p>
          </div>
        </div>

      </DashboardLayout>
    );
  }

  const isCompleted =
    currentAssignment.status ===
    "completed";

  return (
    <DashboardLayout>

      <div
        className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#0A0A0A]
        text-white
      "
      >
        {/* Background Glow */}
        <div
          className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_40%)]
        "
        />

        {/* Grid */}
        <div
          className="
          absolute
          inset-0
          bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]
          bg-[size:40px_40px]
          pointer-events-none
        "
        />

        <div
          className="
          relative
          z-10
          mx-auto
          max-w-7xl
          space-y-6
          p-6
        "
        >

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

                {/* Badge */}
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
                  <Sparkles
                    className="
                    h-4
                    w-4
                    text-blue-400
                  "
                  />

                  <span
                    className="
                    text-xs
                    font-medium
                    text-zinc-300
                  "
                  >
                    AI Assignment
                  </span>
                </div>

                {/* Title */}
                <h1
                  className="
                  mt-5
                  text-3xl
                  font-semibold
                  tracking-tight
                "
                >
                  {
                    currentAssignment.title
                  }
                </h1>

                <p
                  className="
                  mt-2
                  max-w-2xl
                  text-sm
                  leading-6
                  text-zinc-400
                "
                >
                  Monitor live AI generation,
                  review generated questions,
                  and export printable papers.
                </p>
              </div>

              {/* Actions */}
              {isCompleted && (
                <div
                  className="
                  flex
                  items-center
                  gap-3
                "
                >

                  <div
                    className="
                    hidden
                    md:flex
                    items-center
                    gap-2
                    rounded-2xl
                    border
                    border-zinc-800
                    bg-zinc-900
                    px-4
                    py-3
                  "
                  >
                    <Activity
                      className="
                      h-4
                      w-4
                      text-emerald-400
                    "
                    />

                    <span
                      className="
                      text-sm
                      text-zinc-300
                    "
                    >
                      Generation Completed
                    </span>
                  </div>

                  <div
                    className="
                    flex
                    items-center
                    gap-2
                    rounded-2xl
                    bg-white
                    px-5
                    py-3
                    text-black
                    transition-all
                    hover:bg-zinc-200
                  "
                  >
                    <Download
                      className="
                      h-4
                      w-4
                    "
                    />

                    <DownloadPdfButton
                      assignmentId={
                        currentAssignment._id
                      }
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Stats */}
          <div
            className="
            grid
            gap-4
            md:grid-cols-3
          "
          >

            {/* Status */}
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
                <Activity
                  className="
                  h-5
                  w-5
                  text-blue-400
                "
                />
              </div>

              <h3
                className="
                mt-5
                text-2xl
                font-semibold
                capitalize
              "
              >
                {
                  currentAssignment.status
                }
              </h3>

              <p
                className="
                mt-1
                text-sm
                text-zinc-400
              "
              >
                Assignment Status
              </p>
            </div>

            {/* Questions */}
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
                <Sparkles
                  className="
                  h-5
                  w-5
                  text-violet-400
                "
                />
              </div>

              <h3
                className="
                mt-5
                text-2xl
                font-semibold
              "
              >
                {
                  currentAssignment
                    ?.generatedPaper
                    ?.sections
                    ?.length || 0
                }
              </h3>

              <p
                className="
                mt-1
                text-sm
                text-zinc-400
              "
              >
                Sections Generated
              </p>
            </div>

            {/* Live */}
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
                <Clock3
                  className="
                  h-5
                  w-5
                  text-emerald-400
                "
                />
              </div>

              <h3
                className="
                mt-5
                text-2xl
                font-semibold
              "
              >
                Live
              </h3>

              <p
                className="
                mt-1
                text-sm
                text-zinc-400
              "
              >
                Realtime AI Updates
              </p>
            </div>
          </div>

          {/* Content */}
          <div
            className="
            overflow-hidden
            rounded-3xl
            border
            border-zinc-800
            bg-[#111111]
          "
          >

            {/* Header */}
            <div
              className="
              border-b
              border-zinc-800
              p-6
            "
            >
              <h2
                className="
                text-xl
                font-semibold
              "
              >
                {
                  isCompleted
                    ? "Generated Question Paper"
                    : "Live Generation"
                }
              </h2>

              <p
                className="
                mt-1
                text-sm
                text-zinc-400
              "
              >
                {
                  isCompleted
                    ? "Review and export the generated assignment paper."
                    : "AI is currently generating your assignment in realtime."
                }
              </p>
            </div>

            {/* Body */}
            <div className="p-6">

              {isCompleted ? (

                <QuestionPaperRenderer
                  paper={
                    currentAssignment.generatedPaper
                  }
                />

              ) : (

                <LiveGenerationPanel />

              )}

            </div>
          </div>
        </div>
      </div>

    </DashboardLayout>
  );
}