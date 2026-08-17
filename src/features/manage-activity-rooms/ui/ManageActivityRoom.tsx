"use client";

import { Student } from "@/entities/students/types";
import { Button, modal } from "@bds-web/ui";
import ActivityRoomModal from "./ActivityRoomModal";

interface Props {
  data: Student;
}

const ManageActivityRoom = ({ data }: Props) => {
  return (
    <Button
      buttonSize="small"
      buttonType="primary"
      onClick={() =>
        modal.open({
          title: "학생 활동실 변경하기",
          content: <ActivityRoomModal data={data} />,
        })
      }>
      수정 및 상세
    </Button>
  );
};

export default ManageActivityRoom;
