import { Error } from "@/shared/types/error";
import axios, { AxiosError } from "axios";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  const cookieStore = await cookies();

  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/signin`,
      {
        email,
        password,
      },
    );

    cookieStore.set("accessToken", res.data.accessToken, {
      path: "/",
      domain: ".8beep.site",
    });

    cookieStore.set("refreshToken", res.data.refreshToken, {
      path: "/",
      domain: ".8beep.site",
    });

    return NextResponse.json({ accessToken: res.data.accessToken });
  } catch (error) {
    const res = (error as AxiosError<Error>).response;
    if (!res) {
      return NextResponse.json({ message: "Signin failed" }, { status: 500 });
    }
    return NextResponse.json(
      { message: res.data.message },
      { status: res.status },
    );
  }
}
