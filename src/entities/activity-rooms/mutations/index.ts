import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ActivityRoomApi } from "../api";
import { StudentActivityRoomRequest } from "../types";
import { useRouter } from "@cher1shrxd/loading";
import { toast } from "@cher1shrxd/toast";
import { AxiosError } from "axios";
import { Error } from "@/shared/types/error";
import { modal } from "@bds-web/ui";

export const useUpdateActivityRoomsMutation = (studentId: number) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: StudentActivityRoomRequest[]) =>
      ActivityRoomApi.updateActivityRooms(studentId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["activity-rooms", studentId],
      });
      router.refresh();
      toast.success("활동실 수정 성공", "활동실이 성공적으로 수정되었습니다.");
      modal.closeAll();
    },
    onError: (error: AxiosError<Error>) => {
      toast.error(
        "활동실 수정 실패",
        error.response?.data.message ||
          "활동실 수정에 실패했습니다. 다시 시도해주세요.",
      );
    },
  });
};
