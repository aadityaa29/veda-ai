"use client";

import { Download } from "lucide-react";

interface Props {
  assignmentId: string;
}

export default function DownloadPdfButton({
  assignmentId,
}: Props) {

  const handleDownload =
    () => {

      window.open(
        `http://localhost:8000/assignments/${assignmentId}/pdf`,
        "_blank"
      );
    };

  return (
    <button
      onClick={
        handleDownload
      }
      className="
      flex
      items-center
      gap-3

      px-5
      py-3

      rounded-2xl

      bg-gradient-to-r
      from-green-500
      to-emerald-600

      hover:scale-[1.02]

      transition-all
      duration-300
    "
    >
      <Download size={18} />

      Download PDF
    </button>
  );
}