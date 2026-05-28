"use client";

import {
  Sparkles,
  Wand2,
  FileText,
  Brain,
  Zap,
  CheckCircle2,
} from "lucide-react";

import DashboardLayout
from "@/src/components/layout/DashboardLayout";

import AssignmentForm
from "@/src/features/assignments/components/AssignmentForm";

export default function CreatePage() {
  return (
    <DashboardLayout>
      <div className="relative overflow-hidden">
        {/* Background Effects */}
        <div
          className="
          pointer-events-none
          absolute
          inset-0
          bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]
          bg-[size:44px_44px]
          opacity-30
        "
        />

        <div
          className="
          absolute
          left-[-100px]
          top-[120px]
          h-[320px]
          w-[320px]
          rounded-full
          bg-cyan-500/10
          blur-[120px]
        "
        />

        <div
          className="
          absolute
          right-[-80px]
          top-[200px]
          h-[300px]
          w-[300px]
          rounded-full
          bg-violet-500/10
          blur-[120px]
        "
        />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Hero Section */}
          <div
            className="
            relative
            overflow-hidden
            rounded-[40px]
            border
            border-white/10
            bg-white/[0.04]
            backdrop-blur-2xl
            shadow-[0px_24px_80px_rgba(0,0,0,0.35)]
            p-8
            md:p-10
          "
          >
            {/* Glow Overlay */}
            <div
              className="
              absolute
              inset-0
              bg-gradient-to-r
              from-cyan-500/5
              via-blue-500/5
              to-violet-500/5
            "
            />

            <div
              className="
              relative
              grid
              gap-10
              lg:grid-cols-[1.2fr_0.8fr]
              lg:items-center
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
                  border-white/10
                  bg-white/10
                  px-4
                  py-2
                  backdrop-blur-xl
                "
                >
                  <Sparkles className="h-4 w-4 text-cyan-400" />

                  <span
                    className="
                    text-sm
                    font-semibold
                    text-white/80
                  "
                  >
                    AI Powered Assignment Creation
                  </span>
                </div>

                {/* Heading */}
                <h1
                  className="
                  mt-8
                  text-5xl
                  font-black
                  leading-[0.95]
                  tracking-[-0.07em]
                  text-white
                  md:text-6xl
                  lg:text-7xl
                "
                >
                  Create
                  <span
                    className="
                    bg-gradient-to-r
                    from-cyan-400
                    via-blue-500
                    to-violet-500
                    bg-clip-text
                    text-transparent
                  "
                  >
                    {" "}
                    AI Assignments
                  </span>
                  <br />
                  in Seconds
                </h1>

                {/* Description */}
                <p
                  className="
                  mt-8
                  max-w-2xl
                  text-lg
                  leading-8
                  text-white/60
                "
                >
                  Upload study material, generate structured
                  AI question papers, and build intelligent
                  assignments with realtime processing.
                </p>

                {/* Feature Pills */}
                <div
                  className="
                  mt-10
                  flex
                  flex-wrap
                  gap-4
                "
                >
                  {[
                    "PDF Upload",
                    "MCQ Generation",
                    "Answer Key",
                    "Realtime AI",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/5
                      px-4
                      py-3
                      text-sm
                      font-semibold
                      text-white/80
                      backdrop-blur-xl
                    "
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right AI Preview */}
              <div className="relative">
                {/* Glow */}
                <div
                  className="
                  absolute
                  inset-0
                  rounded-[32px]
                  bg-gradient-to-r
                  from-cyan-500/20
                  via-blue-500/20
                  to-violet-500/20
                  blur-3xl
                "
                />

                {/* Card */}
                <div
                  className="
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-white/10
                  bg-[#0B1220]/80
                  p-6
                  backdrop-blur-2xl
                  shadow-2xl
                "
                >
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-white/50">
                        AI Processing
                      </p>

                      <h3
                        className="
                        mt-1
                        text-2xl
                        font-black
                        text-white
                      "
                      >
                        Biology Assignment
                      </h3>
                    </div>

                    <div
                      className="
                      rounded-2xl
                      bg-green-500/10
                      px-4
                      py-2
                      text-sm
                      font-bold
                      text-green-400
                    "
                    >
                      Active
                    </div>
                  </div>

                  {/* Progress */}
                  <div className="mt-8">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold text-white/70">
                        Generation Progress
                      </p>

                      <p className="text-sm font-bold text-cyan-400">
                        82%
                      </p>
                    </div>

                    <div className="mt-3 h-3 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="
                        h-full
                        w-[82%]
                        rounded-full
                        bg-gradient-to-r
                        from-cyan-500
                        via-blue-500
                        to-violet-500
                      "
                      />
                    </div>
                  </div>

                  {/* Tasks */}
                  <div className="mt-8 space-y-4">
                    {[
                      {
                        text: "PDF Uploaded",
                        icon: FileText,
                      },
                      {
                        text: "Content Extracted",
                        icon: Brain,
                      },
                      {
                        text: "Questions Generated",
                        icon: Wand2,
                      },
                      {
                        text: "Difficulty Optimized",
                        icon: Zap,
                      },
                    ].map((item, i) => {
                      const Icon = item.icon;

                      return (
                        <div
                          key={i}
                          className="
                          flex
                          items-center
                          justify-between
                          rounded-2xl
                          border
                          border-white/10
                          bg-white/[0.03]
                          px-5
                          py-4
                        "
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className="
                              flex
                              h-10
                              w-10
                              items-center
                              justify-center
                              rounded-xl
                              bg-cyan-500/10
                            "
                            >
                              <Icon className="h-5 w-5 text-cyan-400" />
                            </div>

                            <span className="font-semibold text-white">
                              {item.text}
                            </span>
                          </div>

                          <CheckCircle2 className="h-5 w-5 text-green-400" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="mt-10">
            <div
              className="
              relative
              overflow-hidden
              rounded-[40px]
              border
              border-white/10
              bg-white/[0.04]
              p-6
              md:p-8
              backdrop-blur-2xl
              shadow-[0px_24px_80px_rgba(0,0,0,0.25)]
            "
            >
              {/* Glow */}
              <div
                className="
                absolute
                inset-0
                bg-gradient-to-br
                from-cyan-500/[0.03]
                via-transparent
                to-violet-500/[0.03]
              "
              />

              <div className="relative">
                <div className="mb-8">
                  <p
                    className="
                    text-sm
                    font-semibold
                    tracking-[0.25em]
                    text-cyan-400
                  "
                  >
                    ASSIGNMENT BUILDER
                  </p>

                  <h2
                    className="
                    mt-4
                    text-3xl
                    font-black
                    tracking-tight
                    text-white
                  "
                  >
                    Configure Your Assignment
                  </h2>

                  <p
                    className="
                    mt-3
                    text-white/60
                    leading-7
                  "
                  >
                    Customize question types, marks,
                    difficulty levels, and AI generation
                    settings.
                  </p>
                </div>

                <AssignmentForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}