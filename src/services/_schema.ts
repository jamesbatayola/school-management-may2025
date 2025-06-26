export interface loginResponseModel {
  accessToken: string;
  refreshToken?: string;
  studentId: string;
}

export interface enrollResponseModel {
  schoolYear: string;
  term: string;
  studentId: string;
  firstName: string;
  lastName: string;
  email: string;
  yearLevelId: number;
  enrollmentDate: string;
  tuitionBillId: string;
}

export interface enrollModel {
  schoolYear: string;
  termId: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  guardianName: string;
  yearLevel: number;
  courses: string[];
}
