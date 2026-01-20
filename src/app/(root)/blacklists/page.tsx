import ExcludedIcon from "@/shared/icons/ExcludedIcon";
import Section from "@/widgets/section/ui/Section";
import Table from "@/widgets/table/ui/Table";

export default function BlacklistsPage() {
  return (
    <Section
      title="계정 블랙리스트"
      description="계정 접근 권한을 취소해 보세요!"
      icon={<ExcludedIcon size={24} />}
      headerOptions={<></>}>
      <Table
        header={[
          { title: "이메일" },
          { title: "", width: "202px" },
        ]}
        rows={[]}
      />
    </Section>
  );
}
