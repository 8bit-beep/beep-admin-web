import { CLASS_OPTIONS } from "@/features/filter/constants/class";
import { FLOOR_OPTIONS } from "@/features/filter/constants/floor";
import { DropdownItem } from "@bds-web/ui";
import { FormEvent, useState } from "react";

export const useCreateRoom = () => {
  const INCLUDE_NONE = [{ name: "선택 안함", value: "none" }, ...CLASS_OPTIONS];
  const [name, setName] = useState("");
  const [floor, setFloor] = useState<DropdownItem | null>(FLOOR_OPTIONS[0]);
  const [classNumber, setClassNumber] = useState<DropdownItem | null>(
    INCLUDE_NONE[0],
  );
  const disabled = !name.trim();

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (disabled) return;
  };

  return {
    name,
    setName,
    floor,
    setFloor,
    classNumber,
    setClassNumber,
    disabled,
    onSubmit,
    options: INCLUDE_NONE,
  };
};
