import { AttendType } from "@/entities/attend-types/types";
import { Room } from "@/entities/rooms/types";
import { Day } from "@/shared/types/day";

export interface StudentActivityRoom {
  id: number;
  dayOfWeek: Day | null;
  type: AttendType;
  room: Room;
}

export interface StudentActivityRoomRequest {
  dayOfWeek: Day | null;
  typeId: number;
  roomId: number;
}
