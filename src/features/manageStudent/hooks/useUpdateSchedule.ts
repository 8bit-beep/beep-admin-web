import { useGetAttendTypes } from "@/entities/attend-types/queries";
import { useGetRooms } from "@/entities/rooms/queries";
import { useUpdateScheduleMutation } from "@/entities/schedules/mutations";
import { Schedule } from "@/entities/schedules/types";
import { DropdownItem } from "@bds-web/ui";
import { useEffect, useState } from "react";

export const useUpdateSchedule = (data: Schedule) => {
  const rooms = useGetRooms().data.data;
  const types = useGetAttendTypes().data.data;

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

  const { mutateAsync } = useUpdateScheduleMutation(data.id);

  useEffect(() => {
    if (!room || !type) return;
    if(room.value === data.room.id?.toString() && type.value === data.type.id?.toString()) return;
    mutateAsync({
      id: data.id,
      checkpoint: data.checkpoint,
      dayOfWeek: data.dayOfWeek,
      roomId: Number(room.value),
      typeId: Number(type.value),
    });
  }, [room, type]);

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
