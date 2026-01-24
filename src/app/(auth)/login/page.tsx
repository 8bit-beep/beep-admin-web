"use client";

import { useLogin } from "@/features/login/hooks/useLogin";
import { Button, TextInput } from "@bds-web/ui";
import Image from "next/image";

export default function LoginPage() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    error,
    disabled,
    handleLogin,
  } = useLogin();

  return (
    <div className="w-full h-screen flex items-center justify-center flex-col gap-2">
      <form
        className="w-full max-w-xl bg-static-white rounded-large shadow-modal p-8 flex flex-col gap-6"
        onSubmit={handleLogin}>
        <Image
          src="/logo.svg"
          loading="eager"
          alt="삑"
          width={64}
          height={64}
        />
        <h1 className="text-h2">삑 어드민 로그인</h1>
        <TextInput
          label="Email"
          type="email"
          placeholder="example@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextInput
          label="Password"
          type="password"
          placeholder="type your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          buttonSize="large"
          buttonType="primary"
          type="submit"
          disabled={disabled}>
          로그인
        </Button>
        {error && <p className="text-red-light">{error}</p>}
      </form>
    </div>
  );
}
