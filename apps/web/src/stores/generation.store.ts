import { create } from "zustand";

interface LogEntry {
  timestamp: string;
  message: string;
}

interface GenerationStore {
  status: string;

  progress: number;

  logs: LogEntry[];

  startedAt: number | null;

  setStatus: (
    status: string
  ) => void;

  setProgress: (
    progress: number
  ) => void;

  addLog: (
    message: string
  ) => void;

  startGeneration: () => void;

  reset: () => void;
}

export const useGenerationStore =
  create<GenerationStore>(
    (set) => ({

      status: "idle",

      progress: 0,

      logs: [],

      startedAt: null,


      setStatus: (
        status
      ) =>
        set({
          status,
        }),


      setProgress: (
        progress
      ) =>
        set({
          progress,
        }),


      addLog: (
        message
      ) =>
        set((state) => ({
          logs: [
            ...state.logs,

            {
              timestamp:
                new Date().toLocaleTimeString(),

              message,
            },
          ],
        })),

      startGeneration:
        () =>
          set({
            startedAt:
              Date.now(),
          }),

      reset: () =>
        set({
          status: "idle",

          progress: 0,

          logs: [],

          startedAt: null,
        }),
    })
  );