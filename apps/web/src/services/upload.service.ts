import { api } from "./api";

export const uploadService = {

  uploadPdf: async (
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
  },
};