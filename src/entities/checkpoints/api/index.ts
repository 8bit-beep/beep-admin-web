import api from "@/shared/libs/api";
import { Checkpoint } from "../types";

export const CheckpointApi = {
  getCheckpoints: async () => {
    return await api.get<Checkpoint[]>("/checkpoints");
  },

  searchCheckpoints: async (query?: string) => {
    if (!query) {
      return [];
    }
    return (await api.get<Checkpoint[]>("/checkpoints")).data.filter((checkpoint) =>
      checkpoint.name.toLowerCase().includes(query.toLowerCase()),
    );
  },

  createCheckpoint: async (data: Omit<Checkpoint, "id">) => {
    return await api.post<Checkpoint>("/checkpoints", data);
  },

  updateCheckpoint: async (data: Checkpoint) => {
    return await api.patch(`/checkpoints/${data.id}`, data);
  },

  deleteCheckpoint: async (checkpointId: number) => {
    return await api.delete(`/checkpoints/${checkpointId}`);
  },
};