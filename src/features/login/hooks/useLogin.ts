import { Error } from "@/shared/types/error";
import { useRouter } from "@cher1shrxd/loading";
import axios, { AxiosError } from "axios";
import { FormEvent, useState } from "react";

export const useLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const { data } = await axios.post(
        "/api/auth/signin",
        {
          username,
          password,
        },
        { withCredentials: true },
      );
      if (data.accessToken) {
        router.refresh();
        router.push("/");
      }
    } catch (err) {
      const errorRes = err as AxiosError<Error>;
      if (errorRes.response) {
        setError(`로그인 실패: ${errorRes.response.data.message}`);
        return;
      }
      setError("로그인 실패: 알 수 없는 오류가 발생했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  const disabled = isLoading || !username.trim() || !password.trim();

  return {
    username,
    setUsername,
    password,
    setPassword,
    error,
    handleLogin,
    disabled,
  };
};
