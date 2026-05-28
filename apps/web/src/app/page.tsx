import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  FileText,
  Brain,
  Zap,
  CircleCheck,
  Upload,
  Wand2,
  BarChart3,
} from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#F7F8FA] text-[#303030]">
      {/* Grid Background */}
      <div
        className="
        absolute
        inset-0
        bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)]
        bg-[size:48px_48px]
      "
      />

      {/* Gradient Orbs */}
      <div className="absolute left-[-120px] top-[120px] h-[420px] w-[420px] rounded-full bg-cyan-400/20 blur-[140px]" />
      <div className="absolute right-[-100px] top-[240px] h-[420px] w-[420px] rounded-full bg-blue-500/20 blur-[160px]" />
      <div className="absolute bottom-[-100px] left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-violet-500/20 blur-[180px]" />

      {/* Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.03] [background-image:url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Navbar */}
      <header
        className="
        relative
        z-20
        mx-auto
        flex
        max-w-7xl
        items-center
        justify-between
        px-6
        py-6
      "
      >
        <div className="flex items-center gap-4">
          <div
            className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            bg-gradient-to-br
            from-cyan-500
            via-blue-500
            to-violet-600
            shadow-[0_10px_30px_rgba(59,130,246,0.35)]
          "
          >
            <Sparkles className="h-5 w-5 text-white" />
          </div>

          <div>
            <h1 className="text-xl font-black tracking-tight">
              Veda AI
            </h1>

            <p className="text-sm text-[#5E5E5E]/70">
              AI Assignment Generator
            </p>
          </div>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/assignments"
            className="
            text-sm
            font-semibold
            text-[#5E5E5E]
            transition-all
            hover:text-black
          "
          >
            Assignments
          </Link>

          <Link
            href="/create"
            className="
            rounded-2xl
            bg-[#303030]
            px-5
            py-3
            text-sm
            font-semibold
            text-white
            transition-all
            hover:scale-[1.02]
            hover:opacity-95
          "
          >
            Create Assignment
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <main
        className="
        relative
        z-10
        mx-auto
        grid
        max-w-7xl
        items-center
        gap-16
        px-6
        pt-16
        pb-24
        lg:grid-cols-2
      "
      >
        {/* Left Content */}
        <div>
          {/* Badge */}
          <div
            className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-white/30
            bg-white/70
            px-4
            py-2
            backdrop-blur-xl
            shadow-lg
          "
          >
            <div className="h-2 w-2 rounded-full bg-green-500" />

            <span className="text-sm font-semibold text-[#5E5E5E]">
              AI Powered Assignment Generation
            </span>
          </div>

          {/* Heading */}
          <h1
            className="
            mt-8
            max-w-4xl
            text-6xl
            font-black
            leading-[0.95]
            tracking-[-0.08em]
            md:text-7xl
            lg:text-8xl
          "
          >
            Create
            <span
              className="
              bg-gradient-to-r
              from-cyan-500
              via-blue-500
              to-violet-600
              bg-clip-text
              text-transparent
            "
            >
              {" "}
              Smart AI
            </span>
            <br />
            Assignments
            <br />
            Instantly
          </h1>

          {/* Description */}
          <p
            className="
            mt-8
            max-w-2xl
            text-lg
            leading-8
            text-[#5E5E5E]
          "
          >
            Upload PDFs, generate AI-powered question papers,
            manage realtime assignment workflows, and create
            modern educational experiences with Veda AI.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/create"
              className="
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-2xl
              bg-gradient-to-r
              from-cyan-500
              via-blue-500
              to-violet-600
              px-7
              py-4
              text-sm
              font-bold
              text-white
              shadow-[0_15px_40px_rgba(59,130,246,0.35)]
              transition-all
              hover:scale-[1.03]
            "
            >
              Start Creating
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/assignments"
              className="
              inline-flex
              items-center
              justify-center
              rounded-2xl
              border
              border-black/10
              bg-white/70
              backdrop-blur-xl
              px-7
              py-4
              text-sm
              font-bold
              text-[#303030]
              transition-all
              hover:bg-white
            "
            >
              View Assignments
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-14 flex flex-wrap gap-10">
            <div>
              <h3 className="text-3xl font-black">10K+</h3>
              <p className="mt-1 text-sm text-[#5E5E5E]">
                Questions Generated
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-black">99%</h3>
              <p className="mt-1 text-sm text-[#5E5E5E]">
                AI Accuracy
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-black">Realtime</h3>
              <p className="mt-1 text-sm text-[#5E5E5E]">
                Socket Processing
              </p>
            </div>
          </div>
        </div>

        {/* Right Dashboard Preview */}
        <div className="relative z-10">
          {/* Glow */}
          <div
            className="
            absolute
            inset-0
            rounded-[40px]
            bg-gradient-to-r
            from-cyan-500/20
            via-blue-500/20
            to-violet-500/20
            blur-3xl
          "
          />

          {/* Dashboard (Main Card) */}
          <div
            className="
            relative
            overflow-hidden
            rounded-[36px]
            border
            border-white/30
            bg-white/70
            p-6
            backdrop-blur-2xl
            shadow-[0px_24px_80px_rgba(0,0,0,0.12)]
          "
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-[#5E5E5E]">
                  Assignment Generation
                </p>

                <h3 className="mt-1 text-2xl font-black">
                  Biology Assignment
                </h3>
              </div>

              <div
                className="
                rounded-2xl
                bg-green-100
                px-4
                py-2
                text-sm
                font-bold
                text-green-700
              "
              >
                Active
              </div>
            </div>

            {/* Progress */}
            <div className="mt-8">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold">
                  AI Processing
                </p>

                <p className="text-sm font-bold text-cyan-600">
                  82%
                </p>
              </div>

              <div className="mt-3 h-3 overflow-hidden rounded-full bg-black/5">
                <div
                  className="
                  h-full
                  w-[82%]
                  rounded-full
                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-600
                "
                />
              </div>
            </div>

            {/* Steps */}
            <div className="mt-8 space-y-4">
              {[
                "PDF Uploaded Successfully",
                "Content Extracted",
                "MCQs Generated",
                "Difficulty Balanced",
              ].map((item, i) => (
                <div
                  key={i}
                  className="
                  flex
                  items-center
                  justify-between
                  rounded-2xl
                  border
                  border-black/5
                  bg-white/80
                  px-5
                  py-4
                "
                >
                  <div className="flex items-center gap-3">
                    <CircleCheck className="h-5 w-5 text-green-500" />

                    <span className="font-semibold">
                      {item}
                    </span>
                  </div>

                  <span className="text-sm text-[#5E5E5E]">
                    Completed
                  </span>
                </div>
              ))}
            </div>
          </div> 
          {/* END OF MAIN DASHBOARD CARD */}

        

          <div
            className="
            absolute
            -right-8
            bottom-24
            z-20
            rounded-2xl
            border
            border-white/30
            bg-white/80
            px-4
            py-3
            shadow-xl
            backdrop-blur-xl
          "
          >
            <div className="flex items-center gap-3">
              <Wand2 className="h-5 w-5 text-violet-600" />

              <div>
                <p className="text-xs text-[#5E5E5E]">
                  AI Generated
                </p>

                <p className="text-sm font-bold">
                  42 Questions
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Features */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "PDF Upload",
              desc: "Upload study material and extract structured educational content instantly.",
              icon: FileText,
              color: "cyan",
            },
            {
              title: "AI Question Generation",
              desc: "Generate MCQs, long answers, difficulty balancing, and answer keys automatically.",
              icon: Brain,
              color: "violet",
            },
            {
              title: "Realtime Processing",
              desc: "Track assignment creation live using realtime socket-based progress updates.",
              icon: Zap,
              color: "amber",
            },
          ].map((feature, i) => {
            const Icon = feature.icon;

            return (
              <div
                key={i}
                className="
                group
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-white/30
                bg-white/70
                p-8
                backdrop-blur-2xl
                shadow-[0px_16px_48px_rgba(0,0,0,0.06)]
                transition-all
                hover:-translate-y-2
                hover:shadow-2xl
              "
              >
                <div
                  className="
                  absolute
                  inset-0
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                  bg-gradient-to-br
                  from-cyan-500/5
                  via-blue-500/5
                  to-violet-500/5
                "
                />

                <div
                  className="
                  relative
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-br
                  from-cyan-500/10
                  to-blue-500/10
                "
                >
                  <Icon className="h-7 w-7 text-cyan-600" />
                </div>

                <h3 className="relative mt-8 text-2xl font-black tracking-tight">
                  {feature.title}
                </h3>

                <p
                  className="
                  relative
                  mt-4
                  text-base
                  leading-7
                  text-[#5E5E5E]
                "
                >
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* How It Works */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-28">
        <div
          className="
          rounded-[40px]
          border
          border-white/30
          bg-white/70
          p-10
          backdrop-blur-2xl
          shadow-[0px_24px_80px_rgba(0,0,0,0.08)]
        "
        >
          <div className="text-center">
            <p className="font-semibold text-cyan-600">
              HOW IT WORKS
            </p>

            <h2 className="mt-4 text-5xl font-black tracking-tight">
              Simple AI Workflow
            </h2>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {[
              {
                title: "Upload Material",
                icon: Upload,
                desc: "Upload PDFs, notes, or educational resources.",
              },
              {
                title: "AI Processing",
                icon: Brain,
                desc: "AI generates structured assignments automatically.",
              },
              {
                title: "Export & Share",
                icon: BarChart3,
                desc: "Export polished assignments instantly.",
              },
            ].map((step, i) => {
              const Icon = step.icon;

              return (
                <div key={i} className="relative">
                  <div
                    className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    from-cyan-500
                    to-blue-600
                    text-white
                    shadow-xl
                  "
                  >
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-8 text-2xl font-black">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-7 text-[#5E5E5E]">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}