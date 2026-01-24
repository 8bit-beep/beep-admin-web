import api from "@/shared/libs/api";
import { Student } from "../types";

export const StudentApi = {
  getStudents: async (grade: number, classNumber: number) => {
    return (await api.get<Student[]>(`/students?grade=${grade}&classNumber=${classNumber}`));
  },

  deleteStudent: async (studentId: number) => {
    return await api.delete(`/users/${studentId}`);
  },
};