"use client";

import { create } from "zustand";

import * as assignmentService
from "@/src/services/assignment.service";

interface AssignmentStore {

  assignments: any[];

  currentAssignment: any | null;

  loading: boolean;

  createAssignment: (
    formData: FormData
  ) => Promise<any>;

  fetchAssignments: () => Promise<void>;

  fetchAssignment: (
    id: string
  ) => Promise<void>;

  setCurrentAssignment: (
    assignment: any
  ) => void;
}

export const useAssignmentStore =
  create<AssignmentStore>((set) => ({

    assignments: [],

    currentAssignment: null,

    loading: false,

    // =========================
    // CREATE ASSIGNMENT
    // =========================

    createAssignment:
      async (
        formData
      ) => {

        try {

          set({
            loading: true,
          });

          const data =
            await assignmentService.createAssignment(
              formData
            );

          return data;

        } finally {

          set({
            loading: false,
          });
        }
      },

    // =========================
    // FETCH ALL
    // =========================

    fetchAssignments:
      async () => {

        const data =
          await assignmentService.fetchAssignments();

        console.log(
          "FETCH ASSIGNMENTS:",
          data
        );

        set({
          assignments:
            data.assignments ||
            [],
        });
      },

    // =========================
    // FETCH SINGLE
    // =========================

    fetchAssignment:
      async (
        id
      ) => {

        const data =
          await assignmentService.fetchAssignment(
            id
          );

        console.log(
          "FETCH ASSIGNMENT:",
          data
        );

        set({
          currentAssignment:
            data.assignment,
        });
      },

    // =========================
    // SET CURRENT
    // =========================

    setCurrentAssignment:
      (
        assignment
      ) => {

        set({
          currentAssignment:
            assignment,
        });
      },
  }));