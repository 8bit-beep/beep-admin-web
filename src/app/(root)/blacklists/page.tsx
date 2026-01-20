import { LimitedUserApi } from "@/entities/limited-users/api";
import CreateLimitedUser from "@/features/manageLimitedUser/ui/CreateLimitedUser";
import DeleteLimitedUser from "@/features/manageLimitedUser/ui/DeleteLimitedUser";
import ExcludedIcon from "@/shared/icons/ExcludedIcon";
import Section from "@/widgets/section/ui/Section";
import Table from "@/widgets/table/ui/Table";

export default async function BlacklistsPage() {
  const { data } = await LimitedUserApi.getLimitedUsers();

  return (
    <Section
      title="계정 블랙리스트"
      description="계정 접근 권한을 취소해 보세요!"
      icon={<ExcludedIcon size={24} />}
      headerOptions={<CreateLimitedUser />}>
      <Table
        header={[{ title: "이메일" }, { title: "", width: "117px" }]}
        rows={data.map((user) => [user.email, <DeleteLimitedUser key={user.id} limitedUserId={user.id} />])}
      />
    </Section>
  );
}
