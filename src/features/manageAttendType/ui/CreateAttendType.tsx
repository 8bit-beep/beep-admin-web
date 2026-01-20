"use client";

import { Button, modal } from "@bds-web/ui";
import CreateAttendTypeModal from "./CreateAttendTypeModal";

const CreateAttendType = () => {
  return (
    <Button buttonSize="medium" buttonType="primary" onClick={() => modal.open({ title: "출석 종류 추가하기", content: <CreateAttendTypeModal /> })}>출석 종류 추가하기</Button>
  )
}

export default CreateAttendType