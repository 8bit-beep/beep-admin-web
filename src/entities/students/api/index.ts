import api from "@/shared/libs/api";
import { Student } from "../types";
import { PageResponse } from "@/shared/types/page-response";

export const StudentApi = {
  getStudents: async (grade: number, classNumber: number, page: number, size: number) => {
    return await api.get<PageResponse<Student>>("/students", {
      params: {
        grade,
        classNumber,
        page,
        size,
      },
    });
  },

  deleteStudent: async (studentId: number) => {
    return await api.delete(`/users/${studentId}`);
  },
};