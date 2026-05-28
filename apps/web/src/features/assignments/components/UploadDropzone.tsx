"use client";

import { Upload } from "lucide-react";

interface Props {
  onFileChange: (
    file: File
  ) => void;
}

export default function UploadDropzone({
  onFileChange,
}: Props) {

  return (
    <label
      className="
      border-2
      border-dashed
      rounded-2xl
      p-10
      flex
      flex-col
      items-center
      justify-center
      cursor-pointer
      hover:border-blue-500
      transition-all
      duration-300
      bg-white/5
    "
    >
      <Upload size={40} />

      <p className="mt-4 font-medium">
        Drag & drop PDF
      </p>

      <p className="text-sm text-gray-500">
        or browse files
      </p>

      <input
        type="file"
        accept=".pdf"
        className="hidden"
        onChange={(e) => {

          const file =
            e.target.files?.[0];

          if (file) {
            onFileChange(file);
          }
        }}
      />
    </label>
  );
}