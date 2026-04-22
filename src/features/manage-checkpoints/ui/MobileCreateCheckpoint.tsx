"use client";

import { Button, modal } from "@bds-web/ui";
import CreateCheckpointModal from "./CreateCheckpointModal";

const CreateCheckpoint = () => {
  return (
    <Button buttonSize="medium" buttonType="primary" onClick={() => modal.open({ title: "체크포인트 추가하기", content: <CreateCheckpointModal /> })}>
      체크포인트 추가하기
    </Button>
  )
}

export default CreateCheckpoint