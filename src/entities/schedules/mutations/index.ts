import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ScheduleApi } from "../api";
import { toast } from "@cher1shrxd/toast";
import { modal } from "@bds-web/ui";

export const useUpdateScheduleMutation = (userId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ScheduleApi.updateSchedule,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["schedules", userId] });
      toast.success("스케쥴 수정 성공", "스케쥴이 성공적으로 수정되었습니다.");
    },
    onError: () => {
      toast.error(
        "스케쥴 수정 실패",
        "스케쥴 수정에 실패했습니다. 다시 시도해주세요.",
      );
    },
  });
};

export const useDeleteScheduleMutation = (userId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ScheduleApi.deleteSchedule,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["schedules", userId] });
      toast.success("스케쥴 삭제 성공", "스케쥴이 성공적으로 삭제되었습니다.");
      modal.closeAll();
    },
    onError: () => {
      toast.error(
        "스케쥴 삭제 실패",
        "스케쥴 삭제에 실패했습니다. 다시 시도해주세요.",
      );
      modal.closeAll();
    },
  });
};
