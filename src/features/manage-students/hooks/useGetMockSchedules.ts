"use client";

import { Schedule } from "@/entities/schedules/types";
import { Day } from "@/shared/types/day";

const mockSchedules: Schedule[] = [
  {
    id: 1,
    dayOfWeek: Day.MON,
    checkpoint: { id: 1, name: "등원" },
    type: { id: 1, name: "출석" },
    room: { id: 1, name: "101호" },
  },
  {
    id: 2,
    dayOfWeek: Day.TUE,
    checkpoint: { id: 2, name: "오전 수업" },
    type: { id: 2, name: "수업" },
    room: { id: 2, name: "102호" },
  },
  {
    id: 3,
    dayOfWeek: Day.WED,
    checkpoint: { id: 3, name: "점심" },
    type: { id: 3, name: "식사" },
    room: { id: 3, name: "식당" },
  },
  {
    id: 4,
    dayOfWeek: Day.MON,
    checkpoint: { id: 4, name: "하원" },
    type: { id: 1, name: "출석" },
    room: { id: 1, name: "101호" },
  },
  {
    id: 5,
    dayOfWeek: Day.TUE,
    checkpoint: { id: 5, name: "오후 수업" },
    type: { id: 2, name: "수업" },
    room: { id: 2, name: "102호" },
  },
];

export const useGetMockSchedules = (userId: number) => {
  // 실제 API 호출 없이 목업 데이터를 즉시 반환
  // useSuspenseQuery가 기대하는 형태로 { data: ... } 객체로 감싸서 반환
  return { data: mockSchedules };
};
