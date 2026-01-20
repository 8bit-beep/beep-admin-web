import { DUMMY_CHECKPOINT } from "@/entities/checkpoints/constants/dummy";
import CreateCheckpoint from "@/features/manageCheckpoints/ui/CreateCheckpoint";
import ManageCheckpoint from "@/features/manageCheckpoints/ui/ManageCheckpoint";
import CalendarIcon from "@/shared/icons/CalendarIcon";
import Section from "@/widgets/section/ui/Section";
import Table from "@/widgets/table/ui/Table";

export default function CheckpointsPage() {
  const data = [DUMMY_CHECKPOINT, DUMMY_CHECKPOINT, DUMMY_CHECKPOINT];

  return (
    <Section
      title="체크포인트 조정"
      description="출석 시간을 수정해 보세요!"
      icon={<CalendarIcon size={24} />}
      headerOptions={<CreateCheckpoint />}>
      <Table
        header={[
          { title: "체크포인트 이름", width: "202px" },
          { title: "출석 시간", width: "202px" },
          { title: "체크포인트 시간", width: "202px" },
          { title: "" },
          { title: "", width: "202px" },
        ]}
        rows={data.map((checkpoint) => [
          checkpoint.name,
          `${checkpoint.attendanceStartAt} ~ ${checkpoint.attendanceEndAt}`,
          `${checkpoint.startAt} ~ ${checkpoint.endAt}`,
          "",
          <ManageCheckpoint key={checkpoint.id} data={checkpoint} />,
        ])}
      />
    </Section>
  );
}
