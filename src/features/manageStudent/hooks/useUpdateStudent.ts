import { SegmentItem } from "@/shared/types/segment-item";
import { useState } from "react";
import { DAYS } from "../constants/days";
import { useGetSchedulesByUserId } from "@/entities/schedules/queries";

export const useUpdateStudnet = (userId: number) => {
  const [day, setDay] = useState<SegmentItem>(DAYS[0]);
  const { data: res } = useGetSchedulesByUserId(userId);
  const { data } = res; 
  const filteredData =
    day.value === "ALL"
      ? data
      : data.filter((schedule) => schedule.dayOfWeek === day.value);

  return {
    day,
    setDay,
    filteredData,
  };
};
