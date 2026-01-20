import api from "@/shared/libs/api";
import { AttendType } from "../types";

export const AttendTypeApi = {
  getAttendTypes: async () => {
    return await api.get<AttendType[]>("/types");
  },

  createAttendType: async (data: Omit<AttendType, "id">) => {
    return await api.post("/types", data);
  },

  deleteAttendType: async (attendTypeId: number) => {
    return await api.delete(`/types/${attendTypeId}`);
  },
};