import { Day } from "@/shared/types/day";

export const FIXED_ACTIVITY_TYPE_NAMES = ["나르샤", "동아리"];
export const AFTERSCHOOL_TYPE_NAME = "방과후";

export const AFTERSCHOOL_DAYS: { label: string; value: Day }[] = [
  { label: "월요일", value: "MONDAY" },
  { label: "화요일", value: "TUESDAY" },
  { label: "수요일", value: "WEDNESDAY" },
  { label: "목요일", value: "THURSDAY" },
];

export const UNASSIGNED_VALUE = "none";
export const UNASSIGNED_LABEL = "미지정";
