import { Checkpoint } from "@/entities/checkpoints/types";
import { FormEvent, useState } from "react";

export const useUpdateCheckpoint = (data: Checkpoint) => {
  const [name, setName] = useState(data.name);
  const [startAt, setStartAt] = useState(data.startAt);
  const [endAt, setEndAt] = useState(data.endAt);
  const [attendanceStartAt, setAttendanceStartAt] = useState(data.attendanceStartAt);
  const [attendanceEndAt, setAttendanceEndAt] = useState(data.attendanceEndAt);
  const disabled =
    !name.trim() ||
    !startAt.trim() ||
    !endAt.trim() ||
    !attendanceStartAt.trim() ||
    !attendanceEndAt.trim();

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (disabled) return;
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
