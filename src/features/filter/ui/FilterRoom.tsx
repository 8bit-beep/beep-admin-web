"use client";

import { Dropdown } from "@bds-web/ui";
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
