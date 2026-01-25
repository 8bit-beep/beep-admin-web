import { useDeleteRoomMutation } from "@/entities/rooms/mutations";

export const useDeleteRoom = (roomId: number) => {
  const { mutateAsync } = useDeleteRoomMutation();

  const deleteRoom = async () => {
    await mutateAsync(roomId);
  }

  return deleteRoom;
}