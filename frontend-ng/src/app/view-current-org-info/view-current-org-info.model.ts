/** Tương ứng với HrDepartment.java (com.ait.org.orgManage.model) - 1 phòng ban trong cơ cấu tổ chức
 *  hiện hành (không theo phiên bản thay đổi như OrgInfo.java). Chỉ khai báo field dùng ở UI (cây tổ
 *  chức + panel thông tin phòng ban) - các field còn lại (dateEnded, orgLevel, useYn, resumeNo,
 *  feeStandard, ...) không hiển thị ở trang này. */
export interface HrDepartmentDto {
  deptNo: string;
  parentDeptNo: string | null;
  orgNameLocal: string | null;
  orgNameEng: string | null;
  deptType: string | null;
  managerEmpId: string | null;
  managerEmpName: string | null;
  costCenter: string | null;
  costCenterName: string | null;
}

/** Tương ứng với HrEmployee.java - chỉ khai báo đúng các field được render ở bảng danh sách nhân viên
 *  trang này (đúng các cột đã có ở DataTables bản gốc). */
export interface CurrentOrgEmployeeDto {
  empId: string;
  localName: string | null;
  englishName: string | null;
  position: string | null;
  dateStarted: string | null;
  activity: number | null;
}
