import { useCreateLimitedUserMutation } from "@/entities/limited-users/mutations";
import { FormEvent, useState } from "react";

export const useCreateLimitedUser = () => {
  const [email, setEmail] = useState("");

  const { mutateAsync, isPending } = useCreateLimitedUserMutation();
  const disabled = !email.trim() || isPending;

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (disabled) return;
    await mutateAsync({ email });
    setEmail("");
  }

  return {
    email,
    setEmail,
    disabled,
    onSubmit,
  }
}