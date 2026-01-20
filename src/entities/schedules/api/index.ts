import api from "@/shared/libs/api"
import { Schedule } from "../types";
import { ScheduleReq } from "../types/dto/req";

export const ScheduleApi = {
  getSchedulesByUserId: async (userId: number) => {
    return await api.get<Schedule[]>(`/schedules?userId=${userId}`);
  },

  updateSchedule: async (data: ScheduleReq) => {
    return await api.patch(`/schedules/${data.id}`, data);
  },

  deleteSchedule: async (scheduleId: number) => {
    return await api.delete(`/schedules/${scheduleId}`);
  },
}