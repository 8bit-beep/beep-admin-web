"use client";

import { Button, modal } from "@bds-web/ui";
import UpdateRoomModal from "./UpdateRoomModal";
import { Room } from "@/entities/rooms/types";
import DeleteRoomModal from "./DeleteRoomModal";

interface Props {
  data: Room;
}

const ManageRoom = ({ data }: Props) => {
  return (
    <div className="flex gap-2">
      <Button
        buttonType="secondary"
        buttonSize="small"
        onClick={() =>
          modal.open({
            title: "실 정보 수정",
            content: <UpdateRoomModal data={data} />,
          })
        }>
        수정
      </Button>
      <Button
        buttonType="danger"
        buttonSize="small"
        onClick={() =>
          modal.open({
            title: "실 정보를 삭제하시겠습니까?",
            content: <DeleteRoomModal roomId={data.id} />,
          })
        }>
        삭제
      </Button>
    </div>
  );
};

export default ManageRoom;
