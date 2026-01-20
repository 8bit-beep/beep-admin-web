import { FormEvent, useState } from "react";

export const useCreateCheckpoint = () => {
  const [name, setName] = useState("");
  const [startAt, setStartAt] = useState("");
  const [endAt, setEndAt] = useState("");
  const [attendanceStartAt, setAttendanceStartAt] = useState("");
  const [attendanceEndAt, setAttendanceEndAt] = useState("");

  const disabled = !name.trim() || !startAt.trim() || !endAt.trim() || !attendanceStartAt.trim() || !attendanceEndAt.trim();

  const onSubmit = (e: FormEvent) => {
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
  }
};
