import api from "@/shared/libs/api";
import { Student } from "../types";

export const StudentApi = {
  getStudents: async (grade: number, classNumber: number) => {
    return (await api.get<Student[]>(`/students?grade=${grade}&classNumber=${classNumber}`));
  },

  searchStudents: async (query?: string) => {
    if (!query) {
      return [];
    }
    return (await api.get<Student[]>("/students")).data.filter((student) =>
      student.username.toLowerCase().includes(query.toLowerCase()) || student.email.toLowerCase().includes(query.toLowerCase()),
    );
  },

  deleteStudent: async (studentId: number) => {
    return await api.delete(`/users/${studentId}`);
  },
};