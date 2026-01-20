import { DUMMY_STUDENT } from "@/entities/students/constants/dummy";
import FilterStudent from "@/features/filter/ui/FilterStudent";
import ManageStudent from "@/features/manageStudent/ui/ManageStudent";
import PersonIcon from "@/shared/icons/PersonIcon";
import Section from "@/widgets/section/ui/Section";
import Table from "@/widgets/table/ui/Table";

export default function StudentsPage() {
  const data = [DUMMY_STUDENT, DUMMY_STUDENT, DUMMY_STUDENT];

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
        rows={data.map((student) => [
          `${student.studentInfo.grade}${student.studentInfo.classNumber}${student.studentInfo.num}`,
          student.username,
          student.email,
          <ManageStudent key={student.id} data={student} />,
        ])}
      />
    </Section>
  );
}
