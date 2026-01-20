import { Checkpoint } from "@/entities/checkpoints/types";
import { Day } from "../../../shared/types/day";
import { Room } from "@/entities/rooms/types";
import { AttendType } from "@/entities/attend-types/types";

export interface Schedule {
  id: number;
  dayOfWeek: Day;
  checkpoint: Partial<Checkpoint>;
  type: AttendType;
  room: Partial<Room>;
}
