"use client";

import { Button, modal } from "@bds-web/ui";
import { useDeleteAttendType } from "../hooks/useDeleteAttendType";

interface Props {
  attendTypeId: number;
}

const DeleteAttendTypeModal = ({ attendTypeId }: Props) => {
  const deleteAttendType = useDeleteAttendType(attendTypeId);

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
        onClick={deleteAttendType}
        style={{ flex: 1 }}>
        삭제
      </Button>
    </div>
  );
};

export default DeleteAttendTypeModal;
