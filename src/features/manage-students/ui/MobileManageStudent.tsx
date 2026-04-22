"use client";

import { Student } from "@/entities/students/types";
import { Button, modal } from "@bds-web/ui";
import MobileUpdateStudentModal from "./MobileUpdateStudentModal";

interface Props {
  data: Student;
}

const MobileManageStudent = ({ data }: Props) => {
  return (
    <>
      <div className="flex gap-2 justify-end">
        <Button 
          buttonSize="small"
          buttonType="text"
          onClick={() =>
            modal.open({
              title: `학생 정보 상세보기`,
              content: <MobileUpdateStudentModal student={data} />,
            })
          }>
          수정
        </Button>
      </div>
    </>
  );
};

export default MobileManageStudent;