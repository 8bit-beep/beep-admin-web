import { AttendType } from "@/entities/attend-types/types";
import { Room } from "@/entities/rooms/types";
import { Day } from "@/shared/types/day";

export interface StudentActivityRoom {
  id: number;
  dayOfWeek: Day;
  type: AttendType;
  room: Room;
}

export interface StudentActivityRoomRequest {
  dayOfWeek: Day;
  typeId: number;
  roomId: number;
}
