"use client";

import { Dropdown } from "@beep-ds/ui";
import { useFilterRoom } from "../hooks/useFilterRoom";

const FilterRoom = () => {
  const { selected, setSelected, options } = useFilterRoom();

  return (
    <Dropdown
      selected={selected}
      onSelect={setSelected}
      dropdownSize="medium"
      options={options}
      width="92px"
    />
  );
};

export default FilterRoom;
