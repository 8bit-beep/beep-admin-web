import { DUMMY_ROOM } from "@/entities/rooms/constants/dummy";
import FilterRoom from "@/features/filter/ui/FilterRoom";
import CreateRoom from "@/features/manageRoom/ui/CreateRoom";
import ManageRoom from "@/features/manageRoom/ui/ManageRoom";
import LabIcon from "@/shared/icons/LabIcon";
import Section from "@/widgets/section/ui/Section";
import Table from "@/widgets/table/ui/Table";

export default function HomePage() {
  const data = [DUMMY_ROOM, DUMMY_ROOM, DUMMY_ROOM];

  return (
    <Section
      title="실 조정"
      description="실 정보를 수정해 보세요!"
      icon={<LabIcon size={24} />}
      headerOptions={
        <>
          <CreateRoom />
          <FilterRoom />
        </>
      }>
      <Table
        header={[
          { title: "실 이름", width: "144px" },
          { title: "사용 학반", width: "202px" },
          { title: "층" },
          { title: "", width: "202px" },
        ]}
        rows={data.map((room) => [room.name, `${room.grade}-${room.classNumber}`, `${room.floor}층`, <ManageRoom key={room.id} data={room} />])}
      />
    </Section>
  );
}
