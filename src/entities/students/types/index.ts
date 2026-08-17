export interface Student {
  id: number;
  username: string;
  name: string;
  profileImage: string | null;
  studentInfo: StudentInfo;
}

interface StudentInfo {
  grade: number;
  classNumber: number;
  num: number;
}
