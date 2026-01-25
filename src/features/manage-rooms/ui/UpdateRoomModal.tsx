"use client";

import { Room } from "@/entities/rooms/types";
import { FLOOR_OPTIONS } from "@/features/filter/constants/floor";
import { Button, Dropdown, TextInput } from "@bds-web/ui";
import { useUpdateRoom } from "../hooks/useUpdateRoom";

interface Props {
  data: Room;
}

const UpdateRoomModal = ({ data }: Props) => {
  const {
    name,
    setName,
    floor,
    setFloor,
    classNumber,
    setClassNumber,
    disabled,
    onSubmit,
    options,
  } = useUpdateRoom(data);

  return (
    <form className="w-full flex flex-col gap-4" onSubmit={onSubmit}>
      <TextInput
        label="실 이름 설정"
        placeholder="실 이름을 설정해주세요."
        width="100%"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div className="w-full flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <span className="text-caption1 text-static-black">층 설정</span>
          <Dropdown
            selected={floor}
            onSelect={setFloor}
            options={FLOOR_OPTIONS}
            dropdownSize="medium"
            width="162px"
          />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-caption1 text-static-black">사용 학반</span>
          <Dropdown
            selected={classNumber}
            onSelect={setClassNumber}
            options={options}
            dropdownSize="medium"
            width="162px"
          />
        </div>
      </div>
      <Button
        buttonSize="large"
        buttonType="primary"
        type="submit"
        disabled={disabled}>
        추가하기
      </Button>
    </form>
  );
};

export default UpdateRoomModal;
