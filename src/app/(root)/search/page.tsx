
import { AttendTypeApi } from "@/entities/attend-types/api";
import { CheckpointApi } from "@/entities/checkpoints/api";
import { LimitedUserApi } from "@/entities/limited-users/api";
import { RoomApi } from "@/entities/rooms/api";
import { StudentApi } from "@/entities/students/api";
import { SearchParams } from "@/shared/types/search-params";
import ManageStudent from "@/features/manage-students/ui/ManageStudent";
import ManageCheckpoint from "@/features/manage-checkpoints/ui/ManageCheckpoint";
import DeleteLimitedUser from "@/features/manage-limited-users/ui/DeleteLimitedUser";
import ManageRoom from "@/features/manage-rooms/ui/ManageRoom";

export default async function SearchPage({ searchParams }: SearchParams<{ query?: string }>) {
  const { query } = await searchParams;
  const [attendTypes, students, checkpoints, limitedUsers, rooms] = await Promise.all([
    AttendTypeApi.searchAttendTypes(query),
    StudentApi.searchStudents(query),
    CheckpointApi.searchCheckpoints(query),
    LimitedUserApi.searchLimitedUsers(query),
    RoomApi.searchRooms(query),
  ]);

  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-h2">검색 결과</h2>

      <section>
        <h3 className="text-h3 mb-2">출석 종류</h3>
        {attendTypes.length > 0 ? (
          <ul className="space-y-2">
            {attendTypes.map((type) => (
              <li key={type.id} className="flex items-center gap-2 p-2 bg-greyscale-10 rounded">
                <span className="flex-1">{type.name}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-greyscale-40">검색 결과가 없습니다.</p>
        )}
      </section>

      {/* 학생 */}
      <section>
        <h3 className="text-h3 mb-2">학생</h3>
        {students.length > 0 ? (
          <ul className="space-y-2">
            {students.map((student) => (
              <li key={student.id} className="flex items-center gap-2 p-2 bg-greyscale-10 rounded">
                <div className="flex-1">
                  <div className="font-bold">{student.username}</div>
                  <div className="text-sm text-greyscale-40">{student.email}</div>
                  <div className="text-xs text-greyscale-40">
                    {student.studentInfo.grade}학년 {student.studentInfo.classNumber}반 {student.studentInfo.num}번
                  </div>
                </div>
                <ManageStudent data={student} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-greyscale-40">검색 결과가 없습니다.</p>
        )}
      </section>

      {/* 체크포인트 */}
      <section>
        <h3 className="text-h3 mb-2">체크포인트</h3>
        {checkpoints.length > 0 ? (
          <ul className="space-y-2">
            {checkpoints.map((checkpoint) => (
              <li key={checkpoint.id} className="flex items-center gap-2 p-2 bg-greyscale-10 rounded">
                <div className="flex-1">
                  <div className="font-bold">{checkpoint.name}</div>
                  <div className="text-xs text-greyscale-40">
                    {checkpoint.startAt} ~ {checkpoint.endAt} (출석: {checkpoint.attendanceStartAt} ~ {checkpoint.attendanceEndAt})
                  </div>
                </div>
                <ManageCheckpoint data={checkpoint} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-greyscale-40">검색 결과가 없습니다.</p>
        )}
      </section>

      {/* 제한된 사용자 */}
      <section>
        <h3 className="text-h3 mb-2">제한된 사용자</h3>
        {limitedUsers.length > 0 ? (
          <ul className="space-y-2">
            {limitedUsers.map((user) => (
              <li key={user.id} className="flex items-center gap-2 p-2 bg-greyscale-10 rounded">
                <span className="flex-1">{user.email}</span>
                <DeleteLimitedUser limitedUserId={user.id} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-greyscale-40">검색 결과가 없습니다.</p>
        )}
      </section>

      {/* 실(ROOM) */}
      <section>
        <h3 className="text-h3 mb-2">실</h3>
        {rooms.length > 0 ? (
          <ul className="space-y-2">
            {rooms.map((room) => (
              <li key={room.id} className="flex items-center gap-2 p-2 bg-greyscale-10 rounded">
                <div className="flex-1">
                  <div className="font-bold">{room.name}</div>
                  <div className="text-xs text-greyscale-40">
                    {room.grade ? `${room.grade}학년 ` : ""}
                    {room.classNumber ? `${room.classNumber}반 ` : ""}
                    {room.floor}층
                  </div>
                </div>
                <ManageRoom data={room} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-greyscale-40">검색 결과가 없습니다.</p>
        )}
      </section>
    </div>
  );
}
