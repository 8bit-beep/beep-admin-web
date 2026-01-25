import { CheckpointApi } from "@/entities/checkpoints/api";
import CreateCheckpoint from "@/features/manage-checkpoints/ui/CreateCheckpoint";
import ManageCheckpoint from "@/features/manage-checkpoints/ui/ManageCheckpoint";
import CalendarIcon from "@/shared/icons/CalendarIcon";
import Section from "@/widgets/section/ui/Section";
import Table from "@/widgets/table/ui/Table";

export default async function CheckpointsPage() {
  const { data } = await CheckpointApi.getCheckpoints();

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
          `${checkpoint.startAt.slice(0, 5)} ~ ${checkpoint.endAt.slice(0, 5)}`,
          `${checkpoint.attendanceStartAt.slice(0, 5)} ~ ${checkpoint.attendanceEndAt.slice(0, 5)}`,
          "",
          <ManageCheckpoint key={checkpoint.id} data={checkpoint} />,
        ])}
      />
    </Section>
  );
}
