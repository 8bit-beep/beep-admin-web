import { StudentApi } from "@/entities/students/api";
import FilterStudent from "@/features/filter/ui/FilterStudent";
import ManageStudent from "@/features/manageStudent/ui/ManageStudent";
import PersonIcon from "@/shared/icons/PersonIcon";
import { SearchParams } from "@/shared/types/search-params";
import Section from "@/widgets/section/ui/Section";
import Table from "@/widgets/table/ui/Table";

export default async function StudentsPage({
  searchParams,
}: SearchParams<{ grade?: string; classNumber?: string; page?: string }>) {
  const { grade, classNumber, page } = await searchParams;
  const { data } = await StudentApi.getStudents(
    Number(grade),
    Number(classNumber),
    Number(page),
    10,
  );

  return (
    <Section
      title="학생 관리"
      description="학생 정보를 관리해 보세요!"
      icon={<PersonIcon size={24} />}
      headerOptions={<FilterStudent />}>
      <Table
        header={[
          { title: "학번", width: "124px" },
          { title: "이름", width: "112px" },
          { title: "이메일" },
          { title: "", width: "240px" },
        ]}
        rows={data.data.map((student) => [
          `${student.studentInfo.grade}${student.studentInfo.classNumber}${student.studentInfo.num}`,
          student.username,
          student.email,
          <ManageStudent key={student.id} data={student} />,
        ])}
      />
    </Section>
  );
}
