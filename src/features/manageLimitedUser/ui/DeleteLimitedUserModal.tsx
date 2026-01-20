"use client";

import { Button, modal } from "@bds-web/ui";
import { useDeleteLimitedUser } from "../hooks/useDeleteLimitedUser";

interface Props {
  limitedUserId: number;
}

const DeleteLimitedUserModal = ({ limitedUserId }: Props) => {
  const deleteLimitedUser = useDeleteLimitedUser(limitedUserId);

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
        onClick={deleteLimitedUser}
        style={{ flex: 1 }}>
        삭제
      </Button>
    </div>
  );
};

export default DeleteLimitedUserModal;
