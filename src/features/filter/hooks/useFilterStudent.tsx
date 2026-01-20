import { DropdownItem } from "@bds-web/ui";
import { useEffect, useState } from "react";
import { GRADE_OPTIONS } from "../constants/grade";
import { CLASSNUMBER_OPTIONS } from "../constants/class-number";
import { useRouter } from "@cher1shrxd/loading";

export const useFilterStudent = () => {
  const [grade, setGrade] = useState<DropdownItem | null>(GRADE_OPTIONS[0]);
  const [classNumber, setClassNumber] = useState<DropdownItem | null>(CLASSNUMBER_OPTIONS[0]);
  const router = useRouter();

  useEffect(() => {
    router.replace(`/students?grade=${grade?.value}&classNumber=${classNumber?.value}`);
  }, [grade, classNumber]);

  return {
    grade,
    setGrade,
    classNumber,
    setClassNumber,
  };
}