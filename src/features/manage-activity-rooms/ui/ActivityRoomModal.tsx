"use client";

import { Button, Dropdown, DropdownItem } from "@bds-web/ui";
import Image from "next/image";
import { Student } from "@/entities/students/types";
import { useGetRooms } from "@/entities/rooms/queries";
import { useActivityRoomSelection } from "../hooks/useActivityRoomSelection";
import {
  AFTERSCHOOL_DAYS,
  UNASSIGNED_LABEL,
  UNASSIGNED_VALUE,
} from "../constants/activity";

interface Props {
  data: Student;
}

const ActivityRoomModal = ({ data }: Props) => {
  const rooms = useGetRooms().data.data;
  const {
    fixedTypes,
    fixedSelection,
    dailySelection,
    isChanged,
    isPending,
    selectFixed,
    selectDaily,
    save,
  } = useActivityRoomSelection(data.id);

  const options: DropdownItem[] = [
    { name: UNASSIGNED_LABEL, value: UNASSIGNED_VALUE },
    ...rooms.map((room) => ({ name: room.name, value: room.id.toString() })),
  ];

  const findOption = (value: string) =>
    options.find((option) => option.value === value) ?? null;

  return (
    <div className="w-146 flex flex-col gap-5">
      <header className="w-full flex items-center gap-3">
        <Image
          src={data.profileImage || "/default-profile.svg"}
          alt={`${data.name}의 프로필 사진`}
          width={40}
          height={40}
          className="w-10 h-10 rounded-full"
          loading="eager"
        />
        <div className="flex-1">
          <h3 className="text-accent">{data.name}</h3>
          <p className="text-caption2 text-greyscale-40">{data.username}</p>
        </div>
        <p className="text-body">
          {data.studentInfo.grade}학년 {data.studentInfo.classNumber}반{" "}
          {data.studentInfo.num}번
        </p>
      </header>
      <section className="w-full grid grid-cols-2 gap-10">
        <div className="flex flex-col gap-4">
          <h4 className="text-body text-blue-light text-center border-b border-blue-light pb-2">
            고정활동실
          </h4>
          {fixedTypes.map((type) => (
            <div key={type.id} className="w-full flex items-center justify-between gap-4">
              <span className="text-body text-static-black whitespace-nowrap">
                {type.name}
              </span>
              <Dropdown
                options={options}
                selected={findOption(fixedSelection[type.id])}
                onSelect={(item) => selectFixed(type.id, item)}
                dropdownSize="small"
                width="140px"
              />
            </div>
          ))}
          {fixedTypes.length === 0 && (
            <p className="text-caption2 text-greyscale-40 text-center">
              활동 타입이 없습니다.
            </p>
          )}
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-body text-blue-light text-center border-b border-blue-light pb-2">
            방과후 활동실
          </h4>
          {AFTERSCHOOL_DAYS.map(({ label, value }) => (
            <div key={value} className="w-full flex items-center justify-between gap-4">
              <span className="text-body text-static-black whitespace-nowrap">
                {label}
              </span>
              <Dropdown
                options={options}
                selected={findOption(dailySelection[value])}
                onSelect={(item) => selectDaily(value, item)}
                dropdownSize="small"
                width="140px"
              />
            </div>
          ))}
        </div>
      </section>
      <Button
        buttonType="primary"
        buttonSize="medium"
        disabled={!isChanged || isPending}
        onClick={save}
        style={{ width: "100%" }}>
        {isPending ? "수정 중..." : "수정 완료"}
      </Button>
    </div>
  );
};

export default ActivityRoomModal;
