import { DUMMY_ROOM } from "@/entities/rooms/constants/dummy";
import { Schedule } from "@/entities/schedules/types";
import { DropdownItem } from "@bds-web/ui";
import { useState } from "react";

export const useUpdateSchedule = (data: Schedule) => {
  const rooms = [DUMMY_ROOM, DUMMY_ROOM, DUMMY_ROOM];
  const options = rooms.map((room) => ({
    name: room.name,
    value: room.id.toString(),
  }));

  const initRoom = options.find(
    (room) => room.value === data.room.id?.toString(),
  ) || { name: "-", value: "" };
  const [room, setRoom] = useState<DropdownItem | null>(initRoom);

  return {
    rooms,
    room,
    setRoom,
    options
  };
};
