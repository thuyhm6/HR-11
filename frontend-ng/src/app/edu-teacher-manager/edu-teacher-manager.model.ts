/** Tương ứng với EduTeacherManagerDto.java (bảng EDU_TEACHER_MANAGER). Ngày dạng DD/MM/YYYY. */
export interface EduTeacher {
  teacherNo: string | null;
  personId: string | null;
  empId: string | null;
  teacherName: string | null;
  deptName: string | null;
  postGradeName: string | null;
  positionName: string | null;
  teachFieldCode: string | null;
  teachFieldCodeName: string | null;
  teachLevelCode: string | null;
  teachLevelCodeName: string | null;
  teachStatusCode: string | null;
  teachStatusCodeName: string | null;
  hireTime: string | null;
  firingTime: string | null;
  businessActTime: number | null;
  allTime: number | null;
  remark: string | null;
  external?: boolean;
}

export interface EduTeacherSearch {
  keyword: string;
  teachFieldCode: string | null;
  teachLevelCode: string | null;
  teachStatusCode: string | null;
}
