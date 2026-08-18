import { DropdownItem } from "@bds-web/ui";
import { useState } from "react";
import { useUpdateActivityRoomsMutation } from "@/entities/activity-rooms/mutations";
import { useGetActivityRooms } from "@/entities/activity-rooms/queries";
import { StudentActivityRoom } from "@/entities/activity-rooms/types";
import { AttendType } from "@/entities/attend-types/types";
import { useGetAttendTypes } from "@/entities/attend-types/queries";
import { Day } from "@/shared/types/day";
import {
  AFTERSCHOOL_DAYS,
  AFTERSCHOOL_TYPE_NAME,
  FIXED_ACTIVITY_TYPE_NAMES,
  UNASSIGNED_VALUE,
} from "../constants/activity";

const buildFixedSelection = (
  fixedTypes: AttendType[],
  activityRooms: StudentActivityRoom[],
) =>
  Object.fromEntries(
    fixedTypes.map((type) => [
      type.id,
      activityRooms
        .find((activityRoom) => activityRoom.type.id === type.id)
        ?.room.id.toString() ?? UNASSIGNED_VALUE,
    ]),
  );

const buildDailySelection = (
  afterschoolType: AttendType | undefined,
  activityRooms: StudentActivityRoom[],
) =>
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
  );

export const useActivityRoomSelection = (studentId: number) => {
  const activityRooms = useGetActivityRooms(studentId).data.data;
  const types = useGetAttendTypes().data.data;
  const { mutate, isPending } = useUpdateActivityRoomsMutation(studentId);

  const fixedTypes = types.filter((type) =>
    FIXED_ACTIVITY_TYPE_NAMES.includes(type.name),
  );
  const afterschoolType = types.find(
    (type) => type.name === AFTERSCHOOL_TYPE_NAME,
  );

  const [initialFixed] = useState<Record<number, string>>(() =>
    buildFixedSelection(fixedTypes, activityRooms),
  );
  const [initialDaily] = useState<Record<string, string>>(() =>
    buildDailySelection(afterschoolType, activityRooms),
  );
  const [fixedSelection, setFixedSelection] = useState(initialFixed);
  const [dailySelection, setDailySelection] = useState(initialDaily);

  const isChanged =
    fixedTypes.some(
      (type) => fixedSelection[type.id] !== initialFixed[type.id],
    ) ||
    AFTERSCHOOL_DAYS.some(
      ({ value }) => dailySelection[value] !== initialDaily[value],
    );

  const selectFixed = (typeId: number, item: DropdownItem | null) => {
    if (!item) return;
    setFixedSelection((prev) => ({ ...prev, [typeId]: item.value }));
  };

  const selectDaily = (day: Day, item: DropdownItem | null) => {
    if (!item) return;
    setDailySelection((prev) => ({ ...prev, [day]: item.value }));
  };

  const save = () => {
    const managedFixedTypeIds = fixedTypes.map((type) => type.id);
    const managedDays: string[] = AFTERSCHOOL_DAYS.map(({ value }) => value);

    const preserved = activityRooms
      .filter((activityRoom) => {
        const isManagedFixed = managedFixedTypeIds.includes(
          activityRoom.type.id,
        );
        const isManagedDaily =
          activityRoom.type.id === afterschoolType?.id &&
          activityRoom.dayOfWeek !== null &&
          managedDays.includes(activityRoom.dayOfWeek);
        return !isManagedFixed && !isManagedDaily;
      })
      .map((activityRoom) => ({
        dayOfWeek: activityRoom.dayOfWeek,
        typeId: activityRoom.type.id,
        roomId: activityRoom.room.id,
      }));

    const fixedRequests = fixedTypes
      .filter((type) => fixedSelection[type.id] !== UNASSIGNED_VALUE)
      .map((type) => ({
        dayOfWeek: null,
        typeId: type.id,
        roomId: Number(fixedSelection[type.id]),
      }));

    const dailyRequests = afterschoolType
      ? AFTERSCHOOL_DAYS.filter(
          ({ value }) => dailySelection[value] !== UNASSIGNED_VALUE,
        ).map(({ value }) => ({
          dayOfWeek: value,
          typeId: afterschoolType.id,
          roomId: Number(dailySelection[value]),
        }))
      : [];

    mutate([...preserved, ...fixedRequests, ...dailyRequests]);
  };

  return {
    fixedTypes,
    fixedSelection,
    dailySelection,
    isChanged,
    isPending,
    selectFixed,
    selectDaily,
    save,
  };
};
