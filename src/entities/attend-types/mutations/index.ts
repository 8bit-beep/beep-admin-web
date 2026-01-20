import { useRouter } from "@cher1shrxd/loading";
import { useMutation } from "@tanstack/react-query";
import { AttendTypeApi } from "../api";
import { toast } from "@cher1shrxd/toast";
import { modal } from "@bds-web/ui";

export const useCreateAttendTypeMutation = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: AttendTypeApi.createAttendType,
    onSuccess: () => {
      router.refresh();
      toast.success(
        "출석 유형 생성 성공",
        "출석 유형이 성공적으로 생성되었습니다.",
      );
      modal.closeAll();
    },
    onError: () => {
      toast.error(
        "출석 유형 생성 실패",
        "출석 유형 생성에 실패했습니다. 다시 시도해주세요.",
      );
      modal.closeAll();
    },
  });
};

export const useDeleteAttendTypeMutation = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: AttendTypeApi.deleteAttendType,
    onSuccess: () => {
      router.refresh();
      toast.success(
        "출석 유형 삭제 성공",
        "출석 유형이 성공적으로 삭제되었습니다.",
      );
      modal.closeAll();
    },
    onError: () => {
      toast.error(
        "출석 유형 삭제 실패",
        "출석 유형 삭제에 실패했습니다. 다시 시도해주세요.",
      );
      modal.closeAll();
    },
  });
};
