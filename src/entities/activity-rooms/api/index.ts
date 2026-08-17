import api from "@/shared/libs/api";
import { StudentActivityRoom, StudentActivityRoomRequest } from "../types";

export const ActivityRoomApi = {
  getActivityRooms: async (studentId: number) => {
    return await api.get<StudentActivityRoom[]>(
      `/students/${studentId}/activity-rooms`,
    );
  },

  updateActivityRooms: async (
    studentId: number,
    data: StudentActivityRoomRequest[],
  ) => {
    return await api.put<StudentActivityRoom[]>(
      `/students/${studentId}/activity-rooms`,
      data,
    );
  },
};
