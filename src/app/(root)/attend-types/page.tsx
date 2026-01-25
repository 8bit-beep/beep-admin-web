import { AttendTypeApi } from "@/entities/attend-types/api";
import CreateAttendType from "@/features/manage-attend-types/ui/CreateAttendType";
import DeleteAttendType from "@/features/manage-attend-types/ui/DeleteAttendType";
import OkIcon from "@/shared/icons/OkIcon";
import Section from "@/widgets/section/ui/Section";
import Table from "@/widgets/table/ui/Table";

export default async function AttendTypesPage() {
  const { data } = await AttendTypeApi.getAttendTypes();

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
