"use client";

import { Button, modal } from "@bds-web/ui";
import { useDeleteRoom } from "../hooks/useDeleteRoom";

interface Props {
  roomId: number;
}

const DeleteRoomModal = ({ roomId }: Props) => {
  const deleteRoom = useDeleteRoom(roomId);

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
        onClick={deleteRoom}
        style={{ flex: 1 }}>
        삭제
      </Button>
    </div>
  );
};

export default DeleteRoomModal;
