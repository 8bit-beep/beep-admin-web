"use client";

import { Button, modal } from "@bds-web/ui";
import { Checkpoint } from "@/entities/checkpoints/types";
import MobileUpdateCheckpointModal from "./MobileUpdateCheckpointModal";

interface Props {
  data: Checkpoint;
}

const MobileManageCheckpoint = ({ data }: Props) => {
  return (
    <div className="flex gap-2">
      <Button
        buttonType="text"
        buttonSize="small"
        onClick={() =>
          modal.open({
            title: "체크포인트 정보 수정",
            content: <MobileUpdateCheckpointModal data={data} />,
          })
        }
      >
        수정
      </Button>
    </div>
  );
};

export default MobileManageCheckpoint;
