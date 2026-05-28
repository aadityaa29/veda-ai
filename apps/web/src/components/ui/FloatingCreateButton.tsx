"use client";

import Link from "next/link";

import { Plus } from "lucide-react";

export default function FloatingCreateButton() {

  return (
    <Link
      href="/create"
      className="
      fixed
      bottom-6
      right-6
      lg:hidden

      w-16
      h-16

      rounded-full

      bg-gradient-to-r
      from-cyan-500
      to-blue-600

      flex
      items-center
      justify-center

      shadow-2xl

      hover:scale-110

      transition-all
      duration-300

      z-50
    "
    >
      <Plus size={28} />
    </Link>
  );
}