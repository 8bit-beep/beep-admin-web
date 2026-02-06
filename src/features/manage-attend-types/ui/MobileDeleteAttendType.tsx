"use client";

import { Button, modal } from "@bds-web/ui";
import DeleteAttendTypeModal from "./DeleteAttendTypeModal";

interface Props {
  attendTypeId: number;
}

const MobileDeleteAttendType = ({ attendTypeId }: Props) => {
  return (
    <Button
      buttonSize="small"
      buttonType="text"
      style={{color: '#B03D35'}} // 임시방편
      onClick={() =>
        modal.open({
          title: "출석 종류를 삭제하시겠습니까?",
          content: <DeleteAttendTypeModal attendTypeId={attendTypeId} />,
        })
      }>
      삭제
    </Button>
  );
};

export default MobileDeleteAttendType;