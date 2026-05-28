import { api } from "./api";

export const createAssignment =
  async (
    formData: FormData
  ) => {

    const response =
      await api.post(
        "/assignments",
        formData,
        {
          headers: {
            "Content-Type":
              "multipart/form-data",
          },
        }
      );

    return response.data;
  };

export const fetchAssignments =
  async () => {

    const response =
      await api.get(
        "/assignments"
      );

    return response.data;
  };

export const fetchAssignment =
  async (
    id: string
  ) => {

    const response =
      await api.get(
        `/assignments/${id}`
      );

    return response.data;
  };

export const deleteAssignment =
  async (
    id: string
  ) => {

    const response =
      await api.delete(
        `/assignments/${id}`
      );

    return response.data;
  };

export const regenerateAssignment =
  async (
    id: string
  ) => {

    const response =
      await api.post(
        `/assignments/${id}/regenerate`
      );

    return response.data;
  };