/** Tương ứng với ManageCountInfoEmpDto.java (danh sách chi tiết). */
export interface ManageCountInfoEmpDto {
  empId: string;
  localName: string;
  deptName: string;
  postFamilyName: string;
  postGradeNo: string;
  empTypeName: string;
  dob: string;
  sexName: string;
  dateStarted: string;
  empOfficeName: string;
}

export interface ManageCountInfoSearchParams {
  keyword: string;
  deptNos: string;
  postFamily: string;
  empTypeCode: string;
  empOffice: string;
  asOfDate: string;
}

/** Tương ứng với ManageCountItemDto.java (1 mục thống kê: mã / nhãn / số lượng). */
export interface ManageCountItemDto {
  code: string;
  label: string;
  count: number;
}

/** Tương ứng với ManageCountInfoSummaryDto.java. */
export interface ManageCountInfoSummaryDto {
  totalCount: number;
  byGender: ManageCountItemDto[];
  byEmpType: ManageCountItemDto[];
  byDept: ManageCountItemDto[];
  byPostFamily: ManageCountItemDto[];
  byPostGrade: ManageCountItemDto[];
  byAge: ManageCountItemDto[];
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
