import { AttendTypeApi } from "@/entities/attend-types/api";
import CreateAttendType from "@/features/manage-attend-types/ui/CreateAttendType";
import DeleteAttendType from "@/features/manage-attend-types/ui/DeleteAttendType";
import MobileCreateAttendType from "@/features/manage-attend-types/ui/MobileCreateAttendType";
import MobileDeleteAttendType from "@/features/manage-attend-types/ui/MobileDeleteAttendType";
import OkIcon from "@/shared/icons/OkIcon";
import Section from "@/widgets/section/ui/Section";
import Table from "@/widgets/table/ui/Table";

export default async function AttendTypesPage() {
  const { data } = await AttendTypeApi.getAttendTypes();

  return (
    <div className="overflow-hidden">
      <div className="w-full h-full flex xl:hidden">
        <Section
          title="출석 종류"
          description="출석 종류를 추가해보세요!"
          icon={<OkIcon size={24} />}
          headerOptions={<MobileCreateAttendType />}
        >
          <Table
            header={[{ title: "종류명" }, { title: "", width: "117px" }]}
            rows={data.map((type) => [
              type.name,
              <MobileDeleteAttendType key={type.id} attendTypeId={type.id} />,
            ])}
          />
        </Section>
      </div>
      <div className="w-full h-full hidden xl:flex">
        <Section
          title="출석 종류"
          description="출석 종류를 추가해보세요!"
          icon={<OkIcon size={24} />}
          headerOptions={<CreateAttendType />}
        >
          <Table
            header={[{ title: "종류명" }, { title: "", width: "117px" }]}
            rows={data.map((type) => [
              type.name,
              <DeleteAttendType key={type.id} attendTypeId={type.id} />,
            ])}
          />
        </Section>
      </div>
    </div>
  );
}
