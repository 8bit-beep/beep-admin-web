"use client";

import { Button, modal } from "@bds-web/ui";
import CreateRoomModal from "./CreateRoomModal";

const CreateRoom = () => {
  return (
    <Button buttonSize="medium" buttonType="primary" onClick={() => modal.open({ title: "실 추가하기", content: <CreateRoomModal /> })}>
      실 추가하기
    </Button>
  );
};

export default CreateRoom;
