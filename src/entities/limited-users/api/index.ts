import api from "@/shared/libs/api";
import { LimitedUser } from "../types";

export const LimitedUserApi = {
  getLimitedUsers: async () => {
    return await api.get<LimitedUser[]>("/limited-users");
  },

  createLimitedUser: async (data: Omit<LimitedUser, "id">) => {
    return await api.post("/limited-users", data);
  },

  deleteLimitedUser: async (limitedUserId: number) => {
    return await api.delete(`/limited-users/${limitedUserId}`);
  },
};