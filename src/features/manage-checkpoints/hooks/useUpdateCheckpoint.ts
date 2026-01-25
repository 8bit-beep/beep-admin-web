import { useUpdateCheckpointMutation } from "@/entities/checkpoints/mutations";
import { Checkpoint } from "@/entities/checkpoints/types";
import { FormEvent, useState } from "react";

export const useUpdateCheckpoint = (data: Checkpoint) => {
  const [name, setName] = useState(data.name);
  const [startAt, setStartAt] = useState(data.startAt.slice(0, 5));
  const [endAt, setEndAt] = useState(data.endAt.slice(0, 5));
  const [attendanceStartAt, setAttendanceStartAt] = useState(
    data.attendanceStartAt.slice(0, 5),
  );
  const [attendanceEndAt, setAttendanceEndAt] = useState(
    data.attendanceEndAt.slice(0, 5),
  );

  const { mutateAsync, isPending } = useUpdateCheckpointMutation();
  const disabled =
    !name.trim() ||
    !startAt.trim() ||
    !endAt.trim() ||
    !attendanceStartAt.trim() ||
    !attendanceEndAt.trim() ||
    isPending;

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (disabled) return;
    await mutateAsync({
      id: data.id,
      name,
      startAt: `${startAt}`,
      endAt: `${endAt}`,
      attendanceStartAt: `${attendanceStartAt}`,
      attendanceEndAt: `${attendanceEndAt}`,
    });
  };

  return {
    name,
    setName,
    startAt,
    setStartAt,
    endAt,
    setEndAt,
    attendanceStartAt,
    setAttendanceStartAt,
    attendanceEndAt,
    setAttendanceEndAt,
    disabled,
    onSubmit,
  };
};
