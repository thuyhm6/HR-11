/** Tương ứng với ManageEmpPositionInfoDto.java (danh sách chính). */
export interface ManageEmpPositionInfoDto {
  empId: string;
  localName: string;
  personId: string;
  personSupplierCompany: string;
  nationalityCode: string;
  nationalityName: string;
  postFamily: string;
  postFamilyName: string;
  empTypeCode: string;
  empTypeName: string;
  dutyNo: string;
  dutyName: string;
  position: string;
  positionName: string;
  positionNoName: string;
  employeeOwned: string;
  deptName: string;
  deptNo: string;
  orgNameLocal: string;
  managerEmpName: string;
  postGradeNo: string;
  mainBusiness: string;
  dateStarted: string;
  managerName: string;
  empOffice: string;
  empOfficeName: string;
  photoPath: string;
}

/** Tương ứng với ManageEmpPositionInsideDto.java (quá trình nội bộ trong modal chi tiết). */
export interface ManageEmpPositionInsideDto {
  personId: string;
  startDate: string;
  deptName: string;
  mainBusiness: string;
  postGrade: string;
  transCode: string;
}

export interface ManageEmpPositionSearchParams {
  keyword: string;
  deptNos: string;
  fromDate: string;
  toDate: string;
  postFamily: string;
  empTypeCode: string;
  empOffice: string;
  nationalityCode: string;
  asOfDate: string;
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
