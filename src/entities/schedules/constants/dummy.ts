import { DUMMY_CHECKPOINT } from "@/entities/checkpoints/constants/dummy";
import { Schedule } from "../types";
import { DUMMY_ROOM } from "@/entities/rooms/constants/dummy";
import { DUMMY_ATTEND_TYPE } from "@/entities/attend-types/constants/dummy";

export const DUMMY_SCHEDULE: Schedule = {
  id: 1,
  dayOfWeek: "MONDAY",
  checkpoint: DUMMY_CHECKPOINT,
  type: DUMMY_ATTEND_TYPE,
  room: DUMMY_ROOM,
};
