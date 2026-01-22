"use client";

import { getAccessToken } from "../libs/cookie";

const AuthProvider = () => {
  const getToken = async () => {
    const accessToken = await getAccessToken();
    if (!accessToken && typeof window !== "undefined") {
      window.location.href = "/login";
    }
  };

  getToken();

  return null;
};

export default AuthProvider;
