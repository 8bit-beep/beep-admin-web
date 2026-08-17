import { DropdownItem } from "@bds-web/ui";
import { useState } from "react";
import { useGetActivityRooms } from "@/entities/activity-rooms/queries";
import { useGetAttendTypes } from "@/entities/attend-types/queries";
import { Day } from "@/shared/types/day";
import {
  AFTERSCHOOL_DAYS,
  AFTERSCHOOL_TYPE_NAME,
  FIXED_ACTIVITY_TYPE_NAMES,
  UNASSIGNED_VALUE,
} from "../constants/activity";

export const useActivityRoomSelection = (studentId: number) => {
  const activityRooms = useGetActivityRooms(studentId).data.data;
  const types = useGetAttendTypes().data.data;

  const fixedTypes = types.filter((type) =>
    FIXED_ACTIVITY_TYPE_NAMES.includes(type.name),
  );
  const afterschoolType = types.find(
    (type) => type.name === AFTERSCHOOL_TYPE_NAME,
  );

  const [fixedSelection, setFixedSelection] = useState<Record<number, string>>(
    () =>
      Object.fromEntries(
        fixedTypes.map((type) => [
          type.id,
          activityRooms
            .find((activityRoom) => activityRoom.type.id === type.id)
            ?.room.id.toString() ?? UNASSIGNED_VALUE,
        ]),
      ),
  );

  const [dailySelection, setDailySelection] = useState<Record<string, string>>(
    () =>
      Object.fromEntries(
        AFTERSCHOOL_DAYS.map(({ value }) => [
          value,
          activityRooms
            .find(
              (activityRoom) =>
                activityRoom.type.id === afterschoolType?.id &&
                activityRoom.dayOfWeek === value,
            )
            ?.room.id.toString() ?? UNASSIGNED_VALUE,
        ]),
      ),
  );

  const selectFixed = (typeId: number, item: DropdownItem | null) => {
    if (!item) return;
    setFixedSelection((prev) => ({ ...prev, [typeId]: item.value }));
  };

  const selectDaily = (day: Day, item: DropdownItem | null) => {
    if (!item) return;
    setDailySelection((prev) => ({ ...prev, [day]: item.value }));
  };

  return {
    fixedTypes,
    fixedSelection,
    dailySelection,
    selectFixed,
    selectDaily,
  };
};
