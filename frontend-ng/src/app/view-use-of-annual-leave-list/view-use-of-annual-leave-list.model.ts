/** Tương ứng với UseOfAnnualLeaveDto.java (1 dòng tình trạng sử dụng phép năm của 1 nhân viên/1 năm). */
export interface UseOfAnnualLeaveDto {
  personId: string;
  empId: string;
  localName: string;
  deptNo: string;
  deptName: string;
  dateStarted: string;
  vacId: string;
  strtDate: string;
  endDate: string;
  totalVac: string;
  totVacCnt: string;
  addVac: string;
  lastYearVac: string;
  usedVac: string;
  remainVac: string;
}

export interface UseOfAnnualLeaveSearchParams {
  keyword: string;
  deptNos: string;
  year: string;
  empTypeCode: string;
  empOffice: string;
}

/** Tương ứng với response GET /ar/attendanceSettings/api/arSupervisor/authorized-departments. */
export interface AuthDeptNode {
  id: string;
  text: string;
  parent: string;
}

/** Tương ứng với response GET /sys/api/getCode/list?parentCodeNo=... */
export interface CodeItem {
  codeNo: string;
  codeName: string;
  description: string;
  codeId: string;
}
