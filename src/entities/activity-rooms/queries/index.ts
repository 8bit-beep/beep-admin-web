import { useSuspenseQuery } from "@tanstack/react-query";
import { ActivityRoomApi } from "../api";

export const useGetActivityRooms = (studentId: number) => {
  return useSuspenseQuery({
    queryKey: ["activity-rooms", studentId],
    queryFn: () => ActivityRoomApi.getActivityRooms(studentId),
  });
};
