import { useCreateCheckpointMutation } from "@/entities/checkpoints/mutations";
import { FormEvent, useState } from "react";

export const useCreateCheckpoint = () => {
  const [name, setName] = useState("");
  const [startAt, setStartAt] = useState("");
  const [endAt, setEndAt] = useState("");
  const [attendanceStartAt, setAttendanceStartAt] = useState("");
  const [attendanceEndAt, setAttendanceEndAt] = useState("");

  const { mutateAsync, isPending } = useCreateCheckpointMutation();
  const disabled = !name.trim() || !startAt.trim() || !endAt.trim() || !attendanceStartAt.trim() || !attendanceEndAt.trim() || isPending;

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (disabled) return;
    await mutateAsync({
      name,
      startAt,
      endAt,
      attendanceStartAt,
      attendanceEndAt,
    });
    setName("");
    setStartAt("");
    setEndAt("");
    setAttendanceStartAt("");
    setAttendanceEndAt("");
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
