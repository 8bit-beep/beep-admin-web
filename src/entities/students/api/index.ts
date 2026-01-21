import api from "@/shared/libs/api";
import { Student } from "../types";
import { PageResponse } from "@/shared/types/page-response";

export const StudentApi = {
  getStudents: async (grade: number, classNumber: number) => {
    return (await api.get<PageResponse<Student>>(`/students?grade=${grade}&classNumber=${classNumber}`));
  },

  deleteStudent: async (studentId: number) => {
    return await api.delete(`/users/${studentId}`);
  },
};