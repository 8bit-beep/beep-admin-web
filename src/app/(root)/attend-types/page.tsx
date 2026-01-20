import { DUMMY_ATTEND_TYPE } from "@/entities/attend-types/constants/dummy";
import CreateAttendType from "@/features/manageAttendType/ui/CreateAttendType";
import DeleteAttendType from "@/features/manageAttendType/ui/DeleteAttendType";
import OkIcon from "@/shared/icons/OkIcon";
import Section from "@/widgets/section/ui/Section";
import Table from "@/widgets/table/ui/Table";

export default function AttendTypesPage() {
  const data = [DUMMY_ATTEND_TYPE, DUMMY_ATTEND_TYPE, DUMMY_ATTEND_TYPE];

  return (
    <Section
      title="출석 종류"
      description="출석 종류를 추가해보세요!"
      icon={<OkIcon size={24} />}
      headerOptions={<CreateAttendType />}>
      <Table
        header={[{ title: "종류명" }, { title: "", width: "117px" }]}
        rows={data.map((type) => [
          type.name,
          <DeleteAttendType key={type.id} attendTypeId={type.id} />,
        ])}
      />
    </Section>
  );
}
