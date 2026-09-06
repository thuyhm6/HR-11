/** Tương ứng với ArVacEmpDto.java (1 dòng phép của nhân viên trong 1 năm phép - VAC_ID). */
export interface VacEmpRow {
  empId: string;
  localName: string;
  deptName: string;
  postGradeName: string;
  totVacCnt: string;
  lastYearVac: string;
  /** "Đã dùng" - tổng đã dùng cả năm, tính bằng SQL function AR_USE_VACATION(CONFIRM+AFFIRM). */
  useVac: string;
  /** "Chờ duyệt" - phần đã dùng nhưng mới AFFIRM (chưa CONFIRM), tính bằng AR_USE_VACATION(AFFIRM). */
  affirmUseVac: string;
  useVac1: string;
  useVac2: string;
  useVac3: string;
  useVac4: string;
  useVac5: string;
  useVac6: string;
  useVac7: string;
  useVac8: string;
  useVac9: string;
  useVac10: string;
  useVac11: string;
  useVac12: string;
  mentVac: string;
  workMonth: string;
  isLocked: string;
  remark: string;
}

export interface VacEmpSearchParams {
  keyword: string;
  deptNos: string;
  vacId: string;
  empOffice: string;
}

/** Tương ứng với response GET /sys/api/getCode/list?parentCodeNo=... */
export interface CodeItem {
  codeNo: string;
  codeName: string;
  description: string;
  codeId: string;
}

/** Tương ứng với response GET /ar/attendanceSettings/api/arSupervisor/authorized-departments (danh sách phẳng). */
export interface AuthDeptNode {
  id: string;
  text: string;
  parent: string;
}
