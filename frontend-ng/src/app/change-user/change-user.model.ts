/** Tương ứng với EmployeeSearchResponse.java (kết quả tìm kiếm nhân viên). */
export interface EmployeeSearchDto {
  personId: string;
  empId: string;
  localName: string;
  deptNo: string;
  deptName: string;
  position: string;
  email: string;
  phone: string;
}

export interface EmployeeSearchParams {
  keyword: string;
  deptCodes: string[];
  empOffice: string;
}

/** Tương ứng với response GET /ar/attendanceSettings/api/arSupervisor/authorized-departments (danh sách phẳng). */
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
