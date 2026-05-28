"use client";

import ProgressBar
from "./ProgressBar";

import StatusBadge
from "./StatusBadge";

import ActivityLog
from "./ActivityLog";

import ElapsedTimer
from "./ElapsedTimer";

import {
  useGenerationStore,
} from "@/src/stores/generation.store";

export default function LiveGenerationPanel() {

  const {
    status,
    progress,
    logs,
    startedAt,
  } =
    useGenerationStore();

  return (
    <div
      className="
      bg-white/5
      border
      rounded-3xl
      p-8
      space-y-6
      backdrop-blur-xl
    "
    >

      <div
        className="
        flex
        items-center
        justify-between
      "
      >
        <StatusBadge
          status={status}
        />

        <ElapsedTimer
          startedAt={
            startedAt
          }
        />
      </div>

      <ProgressBar
        progress={progress}
      />

      <ActivityLog
        logs={logs}
      />
    </div>
  );
}