import { useDeleteAttendTypeMutation } from "@/entities/attend-types/mutations";

export const useDeleteAttendType = (attendTypeId: number) => {
  const { mutateAsync } = useDeleteAttendTypeMutation();

  const deleteAttendType = async () => {
    await mutateAsync(attendTypeId);
  };

  return deleteAttendType;
};
