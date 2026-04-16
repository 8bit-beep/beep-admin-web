"use client";

import { Button, TextInput } from "@bds-web/ui";
import { useCreateLimitedUser } from "../hooks/useCreateLimitedUser";

const CreateLimitedUserModal = () => {
  const { username, setUsername, disabled, onSubmit } = useCreateLimitedUser();

  return (
    <form className="w-full flex flex-col gap-5" onSubmit={onSubmit}>
      <TextInput
        label="유저네임 추가"
        placeholder="유저네임을 작성해주세요."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Button buttonSize="large" buttonType="primary" disabled={disabled} type="submit">
        제한된 사용자 추가
      </Button>
    </form>
  );
};

export default CreateLimitedUserModal;
