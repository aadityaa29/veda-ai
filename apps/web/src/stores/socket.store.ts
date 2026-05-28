"use client";

import { create } from "zustand";

import { io, Socket } from "socket.io-client";

import { useGenerationStore } from "@/src/stores/generation.store";

import { useAssignmentStore } from "@/src/stores/assignment.store";
import DownloadPdfButton
from "@/src/features/assignments/components/DownloadPdfButton";
interface SocketStore {

  socket: Socket | null;

  connect: () => void;

  joinRoom: (
    assignmentId: string
  ) => void;

  listenToEvents: () => void;
}

export const useSocketStore =
  create<SocketStore>((set, get) => ({

    socket: null,

    connect: () => {

      const existingSocket =
        get().socket;

      if (existingSocket) {
        return;
      }

      const socket = io(
        process.env.NEXT_PUBLIC_API_URL!,
        {
          transports: ["websocket"],
        }
      );

      set({
        socket,
      });

      socket.on("connect", () => {
  console.log(
    "Socket connected:",
    socket.id
  );
});

socket.on(
  "disconnect",
  () => {
    console.log(
      "Socket disconnected"
    );
  }
);
    },

    joinRoom: (
      assignmentId: string
    ) => {

      const socket =
        get().socket;

      if (!socket) return;

      socket.emit(
        "join-assignment",
        assignmentId
      );

      console.log(
        "Joined room:",
        assignmentId
      );
    },

    listenToEvents: () => {

      const socket =
        get().socket;

      if (!socket) return;

      const generationStore =
        useGenerationStore.getState();

      const assignmentStore =
        useAssignmentStore.getState();

      // =========================
      // PROGRESS
      // =========================
      socket.on(
        "assignment:progress",
        (data) => {

          generationStore.setStatus(
            data.status
          );

          generationStore.addLog(
            `Status updated: ${data.status}`
          );
        }
      );

      // =========================
      // COMPLETED
      // =========================
      socket.on(
        "assignment:completed",
        (data) => {

          assignmentStore.setCurrentAssignment(
            data.assignment
          );

          generationStore.setStatus(
            "completed"
          );

          generationStore.addLog(
            "Assignment generation completed"
          );
        }
      );

      // =========================
      // FAILED
      // =========================
      socket.on(
        "assignment:failed",
        (data) => {

          generationStore.setStatus(
            "failed"
          );

          generationStore.addLog(
            data.message ||
            "Generation failed"
          );
        }
      );
    },
  }));