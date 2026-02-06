"use client";

import { SegmentItem } from "@/shared/types/segment-item";
import { useState } from "react";
import { DAYS } from "../constants/days";
import { useGetSchedulesByUserId } from "@/entities/schedules/queries";

export const useUpdateStudnet = (userId: number) => {
  const [day, setDay] = useState<SegmentItem>(DAYS[0]);
  const { data: schedulesResponse } = useGetSchedulesByUserId(userId);
  const data = schedulesResponse?.data || []; 
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
