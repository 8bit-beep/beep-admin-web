import api from "@/shared/libs/api";
import { Room } from "../types";

export const RoomApi = {
  getRooms: async (floor?: string) => {
    const { data } = await api.get<Room[]>("/rooms");
    if (floor) {
      return { data: data.filter((room) => room.floor === Number(floor)) };
    }
    return { data };
  },

  createRoom: async (data: Omit<Room, "id">) => {
    return await api.post("/rooms", data);
  },

  getRoomById: async (roomId: number) => {
    return await api.get<Room>(`/rooms/${roomId}`);
  },

  updateRoom: async (data: Room) => {
    return await api.patch(`/rooms/${data.id}`, data);
  },

  deleteRoom: async (roomId: number) => {
    return await api.delete(`/rooms/${roomId}`);
  },
};