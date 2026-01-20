"use client";

import { Schedule } from "@/entities/schedules/types";
import { parseDay } from "@/shared/utils/parse-day";
import { Dropdown } from "@bds-web/ui";
import { useUpdateSchedule } from "../hooks/useUpdateSchedule";

interface Props {
  data: Schedule;
}

const ScheduleItem = ({ data }: Props) => {
  const { setRoom, room, options } = useUpdateSchedule(data);

  return (
    <div
      key={data.id}
      className="w-full h-11 flex items-center justify-between">
      <span className="text-h4">
        {parseDay(data.dayOfWeek)} {data.checkpoint.name}
      </span>
      <Dropdown
        onSelect={setRoom}
        options={options}
        selected={room}
        dropdownSize="small"
      />
    </div>
  );
};

export default ScheduleItem;
