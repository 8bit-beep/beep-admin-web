"use client";

import { Dropdown } from "@bds-web/ui";
import { useFilterStudent } from "../hooks/useFilterStudent";
import { CLASSNUMBER_OPTIONS } from "../constants/class-number";
import { GRADE_OPTIONS } from "../constants/grade";

const FilterStudent = () => {
  const { grade, setGrade, classNumber, setClassNumber } = useFilterStudent();

  return (
    <>
      <Dropdown
        selected={grade}
        onSelect={setGrade}
        options={GRADE_OPTIONS}
        dropdownSize="medium"
      />
      <Dropdown
        selected={classNumber}
        onSelect={setClassNumber}
        options={CLASSNUMBER_OPTIONS}
        dropdownSize="medium"
      />
    </>
  )
}

export default FilterStudent