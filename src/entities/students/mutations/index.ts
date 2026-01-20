import { useMutation } from "@tanstack/react-query";
import { StudentApi } from "../api";
import { useRouter } from "@cher1shrxd/loading";
import { toast } from "@cher1shrxd/toast";
import { modal } from "@bds-web/ui";
import { AxiosError } from "axios";

export const useDeleteStudentMutation = (studentId: number) => {
  const router = useRouter();

  return useMutation({
    mutationFn: () => StudentApi.deleteStudent(studentId),
    onSuccess: () => {
      router.refresh();
      toast.success("학생 삭제 성공", "학생이 성공적으로 삭제되었습니다.");
      modal.closeAll();
    },
    onError: (error: AxiosError<Error>) => {
      toast.error(
        "학생 삭제 실패",
        error.response?.data.message ||
          "학생 삭제에 실패했습니다. 다시 시도해주세요.",
      );
      modal.closeAll();
    },
  });
};
