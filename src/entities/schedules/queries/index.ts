import { useSuspenseQuery } from "@tanstack/react-query";
import { ScheduleApi } from "../api";

export const useGetSchedulesByUserId = (userId: number) => {
  return useSuspenseQuery({
    queryKey: ["schedules", userId],
    queryFn: async () =>  await ScheduleApi.getSchedulesByUserId(userId),
  });
}