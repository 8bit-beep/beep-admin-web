import { setCookie } from "@/shared/libs/cookie";
import { SearchParams } from "@/shared/types/search-params";
import { redirect } from "next/navigation";

export default async function DauthCallbackPage({
  searchParams,
}: SearchParams<{ accessToken: string; refreshToken: string }>) {
  const { accessToken, refreshToken } = await searchParams;
  setCookie("accessToken", accessToken);
  setCookie("refreshToken", refreshToken);

  redirect("/");
}
