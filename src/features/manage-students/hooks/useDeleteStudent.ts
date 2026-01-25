import { useDeleteStudentMutation } from "@/entities/students/mutations";

export const useDeleteStudent = (studentId: number) => {
  const { mutateAsync } = useDeleteStudentMutation(studentId);

  const deleteStudent = async () => {
    await mutateAsync();
  };

  return deleteStudent;
};
