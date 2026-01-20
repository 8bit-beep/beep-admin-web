import { DUMMY_CHECKPOINT } from "@/entities/checkpoints/constants/dummy";
import { Schedule } from "../types";
import { DUMMY_ROOM } from "@/entities/rooms/constants/dummy";

export const DUMMY_SCHEDULE: Schedule = {
  id: 1,
  dayOfWeek: "MONDAY",
  checkpoint: DUMMY_CHECKPOINT,
  type: {
    id: 1,
    name: "동아리",
  },
  room: DUMMY_ROOM,
};
