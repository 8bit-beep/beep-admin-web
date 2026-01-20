import { DropdownItem } from "@bds-web/ui";
import { useRouter } from "@cher1shrxd/loading";
import { useEffect, useState } from "react";
import { FLOOR_OPTIONS } from "../constants/floor";

export const useFilterRoom = () => {
  const INCLUDE_ALL = [{ name: "전체", value: "all" }, ...FLOOR_OPTIONS];

  const [selected, setSelected] = useState<DropdownItem | null>(INCLUDE_ALL[0]);
  const router = useRouter();

  useEffect(() => {
    router.replace(`/?floor=${selected?.value}`);
  }, [selected?.value]);

  return { selected, setSelected, options: INCLUDE_ALL };
};
