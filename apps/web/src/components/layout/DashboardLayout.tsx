"use client";

import Sidebar from "../navigation/Sidebar";
import TopNavbar from "../navigation/TopNavbar";
import FloatingCreateButton from "../ui/FloatingCreateButton";

interface Props {
  children: React.ReactNode;
}

export default function DashboardLayout({
  children,
}: Props) {
  return (
    <div
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#020617]
        text-white
        flex
      "
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.18),transparent_35%)] pointer-events-none" />

      <div className="absolute -top-32 -right-24 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl pointer-events-none" />

      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

      {/* Sidebar */}
      <Sidebar />

      {/* Main Section */}
      <div
        className="
          relative
          flex-1
          flex
          flex-col
          min-w-0
        "
      >
        {/* Top Navbar */}
        <div
          className="
            sticky
            top-0
            z-30
            border-b
            border-white/10
            bg-[#020617]/70
            backdrop-blur-xl
            supports-[backdrop-filter]:bg-[#020617]/60
          "
        >
          <TopNavbar />
        </div>

        {/* Page Content */}
        <main
          className="
            relative
            flex-1
            overflow-y-auto
            px-4
            py-6
            sm:px-6
            lg:px-8
          "
        >
          {/* Content Container */}
          <div
            className="
              mx-auto
              w-full
              max-w-7xl
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              shadow-[0_0_40px_rgba(0,0,0,0.35)]
              backdrop-blur-md
              p-4
              sm:p-6
              lg:p-8
            "
          >
            {children}
          </div>

          {/* Floating Gradient Border */}
          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              top-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-cyan-400/40
              to-transparent
            "
          />
        </main>

        {/* Floating Action Button */}
        <FloatingCreateButton />
      </div>
    </div>
  );
}