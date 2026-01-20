import { SegmentItem } from "@/shared/types/segment-item";
import { useState } from "react";
import { DAYS } from "../constants/days";
import { DUMMY_SCHEDULE } from "@/entities/schedules/constants/dummy";

export const useUpdateStudnet = () => {
  const [day, setDay] = useState<SegmentItem>(DAYS[0]);
  const data = [DUMMY_SCHEDULE, DUMMY_SCHEDULE, DUMMY_SCHEDULE];
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
