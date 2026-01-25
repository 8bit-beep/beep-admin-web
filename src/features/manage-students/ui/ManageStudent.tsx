"use client";

import { Student } from "@/entities/students/types";
import { Button, modal } from "@bds-web/ui";
import UpdateStudentModal from "./UpdateStudentModal";
import DeleteStudentModal from "./DeleteStudentModal";

interface Props {
  data: Student;
}

const ManageStudent = ({ data }: Props) => {
  return (
    <div className="flex gap-2">
      <Button
        buttonSize="small"
        buttonType="primary"
        onClick={() =>
          modal.open({
            title: "학생 정보 상세보기",
            content: <UpdateStudentModal data={data} />,
          })
        }>
        수정 및 상세
      </Button>
      <Button
        buttonSize="small"
        buttonType="danger"
        onClick={() =>
          modal.open({
            title: "학생 정보를 삭제하시겠습니까?",
            content: <DeleteStudentModal studentId={data.id} />,
          })
        }>
        삭제
      </Button>
    </div>
  );
};

export default ManageStudent;
