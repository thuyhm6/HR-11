/** Tương ứng với YearUseInfoListDto.java (1 dòng thông tin nghỉ phép năm của 1 nhân viên/1 năm). */
export interface YearUseInfoListDto {
  empId: string;
  localName: string;
  deptNo: string;
  deptName: string;
  dateStarted: string;
  year: string;
  strtDate: string;
  endDate: string;
  totalVac: string;
  addVac: string;
  specialVac: string;
  lastYearVac: string;
  usedVac: string;
  remainVac: string;
}

export interface YearUseInfoListSearchParams {
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
