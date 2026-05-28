"use client";

import { useState } from "react";

import {
  useForm,
} from "react-hook-form";

import {
  zodResolver,
} from "@hookform/resolvers/zod";

import {
  useRouter,
} from "next/navigation";

import {
  FileText,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import {
  assignmentSchema,
  AssignmentFormData,
} from "../utils/assignment-form.schema";

import UploadDropzone
from "./UploadDropzone";

import {
  useAssignmentStore,
} from "@/src/stores/assignment.store";

import { toast }
from "sonner";

export default function AssignmentForm() {

  const router =
    useRouter();

  const {
    createAssignment,
    loading,
  } =
    useAssignmentStore();

  const [selectedFile, setSelectedFile] =
    useState<File | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
  } = useForm<
    AssignmentFormData
  >({
    resolver:
      zodResolver(
        assignmentSchema
      ),
  });

  const onSubmit =
    async (
      data:
        AssignmentFormData
    ) => {

      try {

        const formData =
          new FormData();

        formData.append(
          "title",
          data.title
        );

        formData.append(
          "instructions",
          data.instructions
        );

        formData.append(
          "questionTypes",
          JSON.stringify([
            "mcq",
            "subjective",
          ])
        );

        formData.append(
          "file",
          data.file
        );

        const response =
          await createAssignment(
            formData
          );

        const assignment =
          response.data;

        router.push(
          `/assignments/${assignment._id}`
        );

      } catch (error) {

        console.error(error);
      }
    };

  return (
    <form
      onSubmit={handleSubmit(
        onSubmit,
        (errors) => {
          console.log(errors);
        }
      )}
      className="
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-white/10
        bg-white/[0.04]
        backdrop-blur-2xl
        p-8
        md:p-10
        max-w-4xl
        space-y-8
      "
    >

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.12),transparent_35%)] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-start justify-between gap-6">

        <div>
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-cyan-400/20
              bg-cyan-400/10
              px-4
              py-2
              text-sm
              text-cyan-200
              mb-5
            "
          >
            <Sparkles size={16} />
            AI Assignment Generator
          </div>

          <h1
            className="
              text-4xl
              font-black
              tracking-tight
              leading-tight
            "
          >
            Create New Assignment
          </h1>

          <p
            className="
              text-gray-400
              mt-3
              max-w-2xl
              leading-relaxed
            "
          >
            Upload your PDF, provide instructions,
            and let Veda AI generate a complete
            assessment automatically.
          </p>
        </div>

      </div>

      {/* Title */}
      <div className="relative z-10 space-y-3">

        <label
          className="
            text-sm
            font-semibold
            text-gray-300
          "
        >
          Assignment Title
        </label>

        <input
          {...register("title")}
          placeholder="Enter assignment title..."
          className="
            w-full
            h-16
            rounded-2xl
            border
            border-white/10
            bg-white/[0.04]
            backdrop-blur-xl
            px-5
            text-white
            placeholder:text-gray-500
            outline-none
            transition-all
            duration-300
            focus:border-cyan-400/40
            focus:bg-white/[0.06]
            focus:ring-4
            focus:ring-cyan-500/10
          "
        />
      </div>

      {/* Instructions */}
      <div className="relative z-10 space-y-3">

        <label
          className="
            text-sm
            font-semibold
            text-gray-300
          "
        >
          Instructions
        </label>

        <textarea
          {...register(
            "instructions"
          )}
          placeholder="Describe what kind of assignment you want AI to generate..."
          className="
            w-full
            min-h-[180px]
            rounded-2xl
            border
            border-white/10
            bg-white/[0.04]
            backdrop-blur-xl
            p-5
            text-white
            placeholder:text-gray-500
            outline-none
            resize-none
            transition-all
            duration-300
            focus:border-cyan-400/40
            focus:bg-white/[0.06]
            focus:ring-4
            focus:ring-cyan-500/10
          "
        />
      </div>

      {/* Upload */}
      <div className="relative z-10 space-y-4">

        <label
          className="
            text-sm
            font-semibold
            text-gray-300
          "
        >
          Upload PDF
        </label>

        <div
          className="
            rounded-3xl
            border
            border-dashed
            border-white/10
            bg-white/[0.03]
            p-4
          "
        >
          <UploadDropzone
            onFileChange={(
              file
            ) => {

              setValue(
                "file",
                file
              );

              setSelectedFile(
                file
              );
            }}
          />
        </div>

        {/* Uploaded File Preview */}
        {selectedFile && (
          <div
            className="
              flex
              items-center
              justify-between
              rounded-2xl
              border
              border-cyan-500/20
              bg-cyan-500/10
              px-5
              py-4
            "
          >
            <div
              className="
                flex
                items-center
                gap-4
                min-w-0
              "
            >
              <div
                className="
                  h-12
                  w-12
                  rounded-2xl
                  bg-gradient-to-br
                  from-cyan-400
                  to-blue-500
                  flex
                  items-center
                  justify-center
                  shrink-0
                "
              >
                <FileText
                  size={22}
                  className="text-white"
                />
              </div>

              <div className="min-w-0">
                <p
                  className="
                    font-semibold
                    text-white
                    truncate
                  "
                >
                  {selectedFile.name}
                </p>

                <p
                  className="
                    text-sm
                    text-cyan-100/70
                    mt-1
                  "
                >
                  PDF uploaded successfully
                </p>
              </div>
            </div>

            <div
              className="
                text-xs
                font-medium
                rounded-full
                bg-white/10
                px-3
                py-1
                text-cyan-100
              "
            >
              PDF
            </div>
          </div>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="
          relative
          z-10
          w-full
          h-16
          rounded-2xl
          bg-gradient-to-r
          from-cyan-500
          via-blue-500
          to-violet-500
          font-semibold
          text-lg
          shadow-2xl
          shadow-cyan-500/20
          transition-all
          duration-300
          hover:scale-[1.01]
          hover:shadow-cyan-500/30
          active:scale-[0.99]
          disabled:opacity-60
          disabled:cursor-not-allowed
          flex
          items-center
          justify-center
          gap-3
        "
      >
        {loading ? (
          <>
            <div
              className="
                h-5
                w-5
                rounded-full
                border-2
                border-white/30
                border-t-white
                animate-spin
              "
            />
            Generating Assignment...
          </>
        ) : (
          <>
            Generate Assignment
            <ArrowRight size={20} />
          </>
        )}
      </button>
    </form>
  );
}