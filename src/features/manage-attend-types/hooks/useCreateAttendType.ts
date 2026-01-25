import { useCreateAttendTypeMutation } from "@/entities/attend-types/mutations";
import { FormEvent, useState } from "react";

export const useCreateAttendType = () => {
  const [name, setName] = useState("");
  const { mutateAsync, isPending } = useCreateAttendTypeMutation();
  const disabled = !name.trim() || isPending;

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (disabled) return;
    await mutateAsync({ name });
  };

  return {
    name,
    setName,
    disabled,
    onSubmit,
  };
};
