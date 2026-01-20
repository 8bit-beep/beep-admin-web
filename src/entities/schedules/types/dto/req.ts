import { Checkpoint } from "@/entities/checkpoints/types";
import { Day } from "@/shared/types/day";

export interface ScheduleReq {
  id: number;
  checkpoint: Partial<Checkpoint>;
  dayOfWeek: Day;
  roomId: number;
  typeId: number;
}