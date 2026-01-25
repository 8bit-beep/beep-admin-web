"use client";

import { Button, TextInput } from "@bds-web/ui";
import { useCreateAttendType } from "../hooks/useCreateAttendType";

const CreateAttendTypeModal = () => {
  const { name, setName, disabled, onSubmit } = useCreateAttendType();

  return (
    <form className="w-full flex flex-col gap-5" onSubmit={onSubmit}>
      <TextInput
        label="이름 설정"
        placeholder="출석 이름을 작성해주세요."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button
        buttonSize="large"
        buttonType="primary"
        disabled={disabled}
        type="submit">
        출석 종류 추가
      </Button>
    </form>
  );
};

export default CreateAttendTypeModal;
