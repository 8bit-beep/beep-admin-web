"use client";

import { Button, modal } from "@bds-web/ui";
import DeleteLimitedUserModal from "./DeleteLimitedUserModal";

interface Props {
  limitedUserId: number;
}

const DeleteLimitedUser = ({ limitedUserId }: Props) => {
  return (
    <Button
      buttonType="danger"
      buttonSize="small"
      onClick={() =>
        modal.open({
          title: "제한된 사용자를 삭제하시겠습니까?",
          content: <DeleteLimitedUserModal limitedUserId={limitedUserId} />,
        })
      }>
      삭제
    </Button>
  );
};

export default DeleteLimitedUser;
