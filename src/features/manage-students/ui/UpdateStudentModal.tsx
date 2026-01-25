"use client";

import { Student } from "@/entities/students/types";
import Segment from "@/shared/ui/Segment";
import { Button, modal } from "@bds-web/ui";
import Image from "next/image";
import { DAYS } from "../constants/days";
import ScheduleItem from "./ScheduleItem";
import { useUpdateStudnet } from "../hooks/useUpdateStudent";

interface Props {
  data: Student;
}

const UpdateStudentModal = ({ data }: Props) => {
  const { day, setDay, filteredData } = useUpdateStudnet(data.id);

  return (
    <div className="w-176 flex flex-col gap-5">
      <header className="w-full flex items-center gap-3">
        <Image
          src={data.profileImageUrl || "/default-profile.svg"}
          alt={`${data.username}의 프로필 사진`}
          width={64}
          height={64}
          className="w-16 h-16 rounded-full"
          loading="eager"
        />
        <div className="flex-1">
          <h3 className="text-h3">{data.username}</h3>
          <p className="text-body">{data.email}</p>
        </div>
        <p className="text-body">
          {data.studentInfo.grade}학년 {data.studentInfo.classNumber}반{" "}
          {data.studentInfo.num}번
        </p>
      </header>
      <section className="w-full flex flex-col gap-3">
        <h4 className="text-caption1">체크포인트 별 실 위치 변경</h4>
        <Segment segment={DAYS} selected={day} onSelect={setDay} />
        <div className="w-full max-h-44 min-h-22 overflow-y-scroll">
          {filteredData.length > 0 ? (
            filteredData.map((schedule) => (
              <ScheduleItem key={schedule.id} data={schedule} />
            ))
          ) : (
            <p className="text-center text-body text-greyscale-40">
              해당 요일에 스케쥴이 없습니다.
            </p>
          )}
        </div>
        <Button buttonSize="large" buttonType="primary" onClick={() => modal.close()}>
          수정 완료
        </Button>
      </section>
    </div>
  );
};

export default UpdateStudentModal;
