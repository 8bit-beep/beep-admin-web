import { useCreateRoomMutation } from "@/entities/rooms/mutations";
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
  
  const { mutateAsync, isPending } = useCreateRoomMutation();
  const disabled = !name.trim() || isPending;

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (disabled || !floor) return;
    await mutateAsync({
      name: name.trim(),
      floor: Number(floor.value),
      grade:
        classNumber && classNumber.value !== "none"
          ? Number(classNumber.value.split("-")[0])
          : null,
      classNumber:
        classNumber && classNumber.value !== "none"
          ? Number(classNumber.value.split("-")[1])
          : null,
    });
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
