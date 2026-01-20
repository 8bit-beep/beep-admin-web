import { Room } from "@/entities/rooms/types";
import { CLASS_OPTIONS } from "@/features/filter/constants/class";
import { FormEvent, useState } from "react";
import { DropdownItem } from "@bds-web/ui";

export const useUpdateRoom = (data: Room) => {
  const INCLUDE_NONE = [{ name: "선택 안함", value: "none" }, ...CLASS_OPTIONS];
  const [name, setName] = useState(data.name);
  const [floor, setFloor] = useState<DropdownItem | null>({
    name: `${data.floor}층`,
    value: `${data.floor}`,
  });
  const [classNumber, setClassNumber] = useState<DropdownItem | null>(
    INCLUDE_NONE.find(
      (item) => item.value === `${data.grade}-${data.classNumber}`,
    ) || INCLUDE_NONE[0],
  );
  const disabled = !name.trim();

  const onSubmit = (e: FormEvent) => {
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
