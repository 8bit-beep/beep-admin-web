import { useRouter } from "@cher1shrxd/loading";
import { useMutation } from "@tanstack/react-query";
import { LimitedUserApi } from "../api";
import { toast } from "@cher1shrxd/toast";
import { modal } from "@bds-web/ui";

export const useCreateLimitedUserMutation = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: LimitedUserApi.createLimitedUser,
    onSuccess: () => {
      router.refresh();
      toast.success(
        "제한 사용자 생성 성공",
        "제한 사용자가 성공적으로 생성되었습니다.",
      );
      modal.closeAll();
    },
    onError: () => {
      toast.error(
        "제한 사용자 생성 실패",
        "제한 사용자 생성에 실패했습니다. 다시 시도해주세요.",
      );
      modal.closeAll();
    },
  });
};

export const useDeleteLimitedUserMutation = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: LimitedUserApi.deleteLimitedUser,
    onSuccess: () => {
      router.refresh();
      toast.success(
        "제한 사용자 삭제 성공",
        "제한 사용자가 성공적으로 삭제되었습니다.",
      );
      modal.closeAll();
    },
    onError: () => {
      toast.error(
        "제한 사용자 삭제 실패",
        "제한 사용자 삭제에 실패했습니다. 다시 시도해주세요.",
      );
      modal.closeAll();
    },
  });
};
