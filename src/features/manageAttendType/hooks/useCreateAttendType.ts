import { FormEvent, useState } from "react";

export const useCreateAttendType = () => {
  const [name, setName] = useState("");
  const disabled = !name.trim();

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (disabled) return;
  }

  return {
    name,
    setName,
    disabled,
    onSubmit,
  }
}