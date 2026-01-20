import { useRouter } from "@cher1shrxd/loading";
import { useMutation } from "@tanstack/react-query";
import { CheckpointApi } from "../api";
import { toast } from "@cher1shrxd/toast";
import { modal } from "@bds-web/ui";

export const useCreateCheckpointMutation = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: CheckpointApi.createCheckpoint,
    onSuccess: () => {
      router.refresh();
      toast.success(
        "체크포인트 생성 성공",
        "체크포인트 생성이 완료되었습니다.",
      );
      modal.closeAll();
    },
    onError: () => {
      toast.error(
        "체크포인트 생성 실패",
        "체크포인트 생성 중 오류가 발생했습니다.",
      );
      modal.closeAll();
    },
  });
};

export const useUpdateCheckpointMutation = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: CheckpointApi.updateCheckpoint,
    onSuccess: () => {
      router.refresh();
      toast.success(
        "체크포인트 수정 성공",
        "체크포인트 수정이 완료되었습니다.",
      );
      modal.closeAll();
    },
    onError: () => {
      toast.error(
        "체크포인트 수정 실패",
        "체크포인트 수정 중 오류가 발생했습니다.",
      );
      modal.closeAll();
    },
  });
};

export const useDeleteCheckpointMutation = () => {
  const router = useRouter();
  
  return useMutation({
    mutationFn: CheckpointApi.deleteCheckpoint,
    onSuccess: () => {
      router.refresh();
      toast.success(
        "체크포인트 삭제 성공",
        "체크포인트 삭제가 완료되었습니다.",
      );
      modal.closeAll();
    },
    onError: () => {
      toast.error(
        "체크포인트 삭제 실패",
        "체크포인트 삭제 중 오류가 발생했습니다.",
      );
      modal.closeAll();
    },
  });
};