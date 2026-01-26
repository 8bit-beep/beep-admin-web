"use client";

import { Button, TextInput } from "@bds-web/ui";
import { useCreateCheckpoint } from "../hooks/useCreateCheckpoint";

const CreateCheckpointModal = () => {
  const {
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
  } = useCreateCheckpoint();

  return (
    <form className="w-full flex flex-col gap-4" onSubmit={onSubmit}>
      <TextInput
        label="실 이름 설정"
        placeholder="실 이름을 설정해주세요."
        width="100%"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div className="space-y-1">
        <span className="text-caption1 text-static-black">체크포인트 기간 설정</span>
        <div className="w-full flex items-center justify-between">
          <TextInput
            placeholder="HH:MM"
            width="144px"
            value={startAt}
            onChange={(e) => setStartAt(e.target.value)}
          />
          <span>-</span>
          <TextInput
            placeholder="HH:MM"
            width="144px"
            value={endAt}
            onChange={(e) => setEndAt(e.target.value)}
          />
        </div>
      </div>
      <div className="space-y-1">
        <span className="text-caption1 text-static-black">
          출석 가능 기간 설정
        </span>
        <div className="w-full flex items-center justify-between">
          <TextInput
            placeholder="HH:MM"
            width="144px"
            value={attendanceStartAt}
            onChange={(e) => setAttendanceStartAt(e.target.value)}
          />
          <span>-</span>
          <TextInput
            placeholder="HH:MM"
            width="144px"
            value={attendanceEndAt}
            onChange={(e) => setAttendanceEndAt(e.target.value)}
          />
        </div>
      </div>

      <Button
        buttonSize="large"
        buttonType="primary"
        type="submit"
        disabled={disabled}>
        체크포인트 추가하기
      </Button>
    </form>
  );
};

export default CreateCheckpointModal;
