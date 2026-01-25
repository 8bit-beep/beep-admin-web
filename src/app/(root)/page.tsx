import { RoomApi } from "@/entities/rooms/api";
import FilterRoom from "@/features/filter/ui/FilterRoom";
import CreateRoom from "@/features/manage-rooms/ui/CreateRoom";
import ManageRoom from "@/features/manage-rooms/ui/ManageRoom";
import LabIcon from "@/shared/icons/LabIcon";
import { SearchParams } from "@/shared/types/search-params";
import Section from "@/widgets/section/ui/Section";
import Table from "@/widgets/table/ui/Table";

export default async function HomePage({
  searchParams,
}: SearchParams<{ floor?: string }>) {
  const { floor } = await searchParams;
  const floorParam =
    floor === "others" ? "4" : floor === "all" ? undefined : floor;
  const { data } = await RoomApi.getRooms(floorParam);

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
        rows={data.map((room) => [
          room.name,
          room.grade ? `${room.grade}-${room.classNumber}` : "--",
          room.floor ? `${room.floor}층` : "실습동 외",
          <ManageRoom key={room.id} data={room} />,
        ])}
      />
    </Section>
  );
}
