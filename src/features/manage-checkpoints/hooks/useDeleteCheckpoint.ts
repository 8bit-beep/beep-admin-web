import { useDeleteCheckpointMutation } from "@/entities/checkpoints/mutations";

export const useDeleteCheckpoint = (checkpointId: number) => {
  const { mutateAsync } = useDeleteCheckpointMutation();

  const deleteCheckpoint = async () => {
    await mutateAsync(checkpointId);
  };

  return deleteCheckpoint;
};
