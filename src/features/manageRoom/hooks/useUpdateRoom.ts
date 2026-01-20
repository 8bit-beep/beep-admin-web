import { Room } from "@/entities/rooms/types";
import { CLASS_OPTIONS } from "@/features/filter/constants/class";
import { FormEvent, useState } from "react";
import { DropdownItem } from "@bds-web/ui";
import { useUpdateRoomMutation } from "@/entities/rooms/mutations";

export const useUpdateRoom = (data: Room) => {
  const INCLUDE_NONE = [{ name: "선택 안함", value: "none" }, ...CLASS_OPTIONS];
  const [name, setName] = useState(data.name);
  const [floor, setFloor] = useState<DropdownItem | null>({
    name: `${data.floor}층`,
    value: `${data.floor}`,
  });
  const [classNumber, setClassNumber] = useState<DropdownItem | null>(
    !!data.grade
      ? {
          name: `${data.grade}-${data.classNumber}`,
          value: `${data.grade}-${data.classNumber}`,
        }
      : {
          name: "선택 안함",
          value: "none",
        },
  );
  const { mutateAsync, isPending } = useUpdateRoomMutation();
  const disabled = !name.trim() || isPending;

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (disabled || !floor) return;
    await mutateAsync({
      id: data.id,
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
