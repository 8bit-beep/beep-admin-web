"use client";

import { Button, modal } from "@bds-web/ui";
import { useDeleteCheckpoint } from "../hooks/useDeleteCheckpoint";

interface Props {
  checkpointId: number;
}

const DeleteCheckpointModal = ({ checkpointId }: Props) => {
  const deleteCheckpoint = useDeleteCheckpoint(checkpointId);

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
        onClick={deleteCheckpoint}
        style={{ flex: 1 }}>
        삭제
      </Button>
    </div>
  );
};

export default DeleteCheckpointModal;
