import { StudentApi } from "@/entities/students/api";
import FilterStudent from "@/features/filter/ui/FilterStudent";
import ManageActivityRoom from "@/features/manage-activity-rooms/ui/ManageActivityRoom";
import PinIcon from "@/shared/icons/PinIcon";
import { SearchParams } from "@/shared/types/search-params";
import { pad } from "@/shared/utils/pad";
import Section from "@/widgets/section/ui/Section";
import Table from "@/widgets/table/ui/Table";

export default async function ActivityRoomsPage({
  searchParams,
}: SearchParams<{ grade?: string; classNumber?: string }>) {
  const { grade, classNumber } = await searchParams;
  const { data } = await StudentApi.getStudents(
    Number(grade || 1),
    Number(classNumber || 1),
  );

  return (
    <Section
      title="활동실 관리"
      description="학생별 활동실을 관리해 보세요!"
      icon={<PinIcon size={24} />}
      headerOptions={<FilterStudent />}>
      <Table
        header={[
          { title: "학번", width: "124px" },
          { title: "이름", width: "112px" },
          { title: "유저네임" },
          { title: "", width: "240px" },
        ]}
        rows={data.map((student) => [
          `${student.studentInfo.grade}${student.studentInfo.classNumber}${pad(student.studentInfo.num, 2)}`,
          student.name,
          student.username,
          <ManageActivityRoom key={student.id} data={student} />,
        ])}
      />
    </Section>
  );
}
