import { FormEvent, useState } from "react";

export const useCreateLimitedUser = () => {
  const [email, setEmail] = useState("");
  const disabled = !email.trim();

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (disabled) return;
  }

  return {
    email,
    setEmail,
    disabled,
    onSubmit,
  }
}