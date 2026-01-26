import api from "@/shared/libs/api";
import { AttendType } from "../types";

export const AttendTypeApi = {
  getAttendTypes: async () => {
    return await api.get<AttendType[]>("/types");
  },

  searchAttendTypes: async (query?: string) => {
    if (!query) {
      return [];
    }
    return (await api.get<AttendType[]>("/types")).data.filter((type) =>
      type.name.toLowerCase().includes(query.toLowerCase()),
    );
  },

  createAttendType: async (data: Omit<AttendType, "id">) => {
    return await api.post("/types", data);
  },

  deleteAttendType: async (attendTypeId: number) => {
    return await api.delete(`/types/${attendTypeId}`);
  },
};
