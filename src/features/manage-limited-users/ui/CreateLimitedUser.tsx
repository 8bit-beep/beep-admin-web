"use client";

import { Button, modal } from "@bds-web/ui";
import CreateLimitedUserModal from "./CreateLimitedUserModal";

const CreateLimitedUser = () => {
  return (
    <Button
      buttonSize="medium"
      buttonType="primary"
      onClick={() =>
        modal.open({
          title: "제한된 사용자 추가하기",
          content: <CreateLimitedUserModal />,
        })
      }>
      제한된 사용자 추가하기
    </Button>
  );
};

export default CreateLimitedUser;
