"use client";

import { Schedule } from "@/entities/schedules/types";
import { parseDay } from "@/shared/utils/parse-day";
import { Dropdown } from "@bds-web/ui";
import { useUpdateSchedule } from "../hooks/useUpdateSchedule";

interface Props {
  data: Schedule;
}

const ScheduleItem = ({ data }: Props) => {
  const { setRoom, room, roomOptions, setType, type, typeOptions } =
    useUpdateSchedule(data);

  return (
    <div key={data.id} className="w-full h-11 flex items-center gap-2">
      <span className="text-h4 flex-1">
        {parseDay(data.dayOfWeek)} {data.checkpoint.name}
      </span>

      <Dropdown
        onSelect={setRoom}
        options={roomOptions}
        selected={room}
        dropdownSize="small"
      />
      <Dropdown
        onSelect={setType}
        options={typeOptions}
        selected={type}
        dropdownSize="small"
      />
    </div>
  );
};

export default ScheduleItem;
