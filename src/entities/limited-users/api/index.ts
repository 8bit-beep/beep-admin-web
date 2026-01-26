import api from "@/shared/libs/api";
import { LimitedUser } from "../types";

export const LimitedUserApi = {
  getLimitedUsers: async () => {
    return await api.get<LimitedUser[]>("/limited-users");
  },

  searchLimitedUsers: async (query?: string) => {
    if (!query) {
      return [];
    }
    return (await api.get<LimitedUser[]>("/limited-users")).data.filter((user) =>
      user.email.toLowerCase().includes(query.toLowerCase()),
    );
  },

  createLimitedUser: async (data: Omit<LimitedUser, "id">) => {
    return await api.post("/limited-users", data);
  },

  deleteLimitedUser: async (limitedUserId: number) => {
    return await api.delete(`/limited-users/${limitedUserId}`);
  },
};