import { useCreateLimitedUserMutation } from "@/entities/limited-users/mutations";
import { FormEvent, useState } from "react";

export const useCreateLimitedUser = () => {
  const [username, setUsername] = useState("");

  const { mutateAsync, isPending } = useCreateLimitedUserMutation();
  const disabled = !username.trim() || isPending;

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (disabled) return;
    await mutateAsync({ username });
    setUsername("");
  };

  return {
    username,
    setUsername,
    disabled,
    onSubmit,
  };
};
