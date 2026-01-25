"use client";

import { Button, modal } from "@bds-web/ui";
import { useDeleteStudent } from "../hooks/useDeleteStudent";

interface Props {
  studentId: number;
}

const DeleteStudentModal = ({ studentId }: Props) => {
  const deleteStudent = useDeleteStudent(studentId);

  return (
    <div className="w-full flex items-center gap-2">
      <Button
        buttonType="text"
        buttonSize="medium"
        onClick={modal.close}
        style={{ flex: 1 }}>
        취소
      </Button>
      <Button
        buttonType="danger"
        buttonSize="medium"
        onClick={deleteStudent}
        style={{ flex: 1 }}>
        삭제
      </Button>
    </div>
  );
};

export default DeleteStudentModal;
