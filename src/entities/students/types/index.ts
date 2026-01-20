export interface Student {
  id: number;
  username: string;
  email: string;
  profileImageUrl: string | null;
  studentInfo: StudentInfo;
}

interface StudentInfo {
  grade: number;
  classNumber: number;
  num: number;
}