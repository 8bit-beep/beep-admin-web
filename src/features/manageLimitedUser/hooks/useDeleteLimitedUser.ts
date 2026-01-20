import { useDeleteLimitedUserMutation } from "@/entities/limited-users/mutations";

export const useDeleteLimitedUser = (limitedUserId: number) => {
  const { mutateAsync } = useDeleteLimitedUserMutation();

  const deleteLimitedUser = async () => {
    await mutateAsync(limitedUserId);
  };

  return deleteLimitedUser;
};
