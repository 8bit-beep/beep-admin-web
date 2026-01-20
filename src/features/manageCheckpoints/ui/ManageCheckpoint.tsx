"use client";

import { Button, modal } from "@bds-web/ui";
import { Checkpoint } from "@/entities/checkpoints/types";
import UpdateCheckpointModal from "./UpdateCheckpointModal";
import DeleteCheckpointModal from "./DeleteCheckpointModal";

interface Props {
  data: Checkpoint;
}

const ManageCheckpoint = ({ data }: Props) => {
  return (
    <div className="flex gap-2">
      <Button
        buttonType="secondary"
        buttonSize="small"
        onClick={() =>
          modal.open({
            title: "체크포인트 정보 수정",
            content: <UpdateCheckpointModal data={data} />,
          })
        }>
        수정
      </Button>
      <Button
        buttonType="danger"
        buttonSize="small"
        onClick={() =>
          modal.open({
            title: "체크포인트 정보를 삭제하시겠습니까?",
            content: <DeleteCheckpointModal checkpointId={data.id} />,
          })
        }>
        삭제
      </Button>
    </div>
  );
};

export default ManageCheckpoint;
