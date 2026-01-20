import { DUMMY_ATTEND_TYPE } from "@/entities/attend-types/constants/dummy";
import { DUMMY_ROOM } from "@/entities/rooms/constants/dummy";
import { Schedule } from "@/entities/schedules/types";
import { DropdownItem } from "@bds-web/ui";
import { useState } from "react";

export const useUpdateSchedule = (data: Schedule) => {
  const rooms = [DUMMY_ROOM, DUMMY_ROOM, DUMMY_ROOM];
  const types = [DUMMY_ATTEND_TYPE, DUMMY_ATTEND_TYPE, DUMMY_ATTEND_TYPE];

  const roomOptions = rooms.map((room) => ({
    name: room.name,
    value: room.id.toString(),
  }));
  const typeOptions = types.map((type) => ({
    name: type.name,
    value: type.id.toString(),
  }));

  const initRoom = roomOptions.find(
    (room) => room.value === data.room.id?.toString(),
  ) || { name: "-", value: "" };
  const initType = typeOptions.find(
    (type) => type.value === data.type.id?.toString(),
  ) || { name: "-", value: "" };

  const [room, setRoom] = useState<DropdownItem | null>(initRoom);
  const [type, setType] = useState<DropdownItem | null>(initType);

  return {
    rooms,
    room,
    setRoom,
    roomOptions,
    type,
    setType,
    typeOptions,
  };
};
