/** Tương ứng với EssAttendanceExForBatchDto.java (danh sách chấm công bất thường đã xin phép, dùng để
 *  quản lý cấp trên kiểm tra/xem chi tiết phê duyệt - KHÔNG có thao tác xin phép hàng loạt như
 *  AttendanceExBatchInfoComponent). */
export interface CheckAttendanceExRow {
  arDateStr: string;
  dateStr: string;
  applyNo: string | null;
  personId: string;
  fromDateTime: string;
  toDateTime: string;
  workHour: string;
  itemNo: string;
  itemNoName: string;
  createDate: string;
  createdName: string;
  updateDate: string;
  updatedName: string;
  empId: string;
  localName: string;
  deptNo: string;
  deptName: string;
  postGradeName: string;
  postFamily: string;
  postFamilyName: string;
  createdBy: string;
  updatedBy: string;
  lockYn: string;
  shiftNo: string;
  shiftName: string;
  remark: string;
}

export interface CheckAttendanceExSearchParams {
  keyword: string;
  deptNos: string;
  fromDate: string;
  toDate: string;
  postFamily: string;
  shiftNo: string;
  itemNo: string;
}

/** Tương ứng với response GET /ar/attendanceSettings/api/shift (chỉ khai field cần dùng). */
export interface ShiftOption {
  shiftNo: string;
  nameVi: string;
  shiftName?: string;
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

/** leaveInfo/employeeInfo trong response GET .../checkAttendanceEx/detail đều trỏ về cùng 1 object
 *  EssLeaveApplyDto (xem EssAttendanceExForBatchServiceImpl#getCardApplyDetail) - chỉ khai field
 *  modal chi tiết cần hiển thị. */
export interface CardLeaveInfo {
  leaveTypeName: string;
  localName: string;
  empId: string;
  deptName: string;
  postGradeName: string;
  leaveFromTime: string;
  leaveToTime: string;
  applyLength: string;
  leaveReason: string;
}

/** Tương ứng với SyAffirmEmailDto.java - 1 dòng trình tự phê duyệt. */
export interface CardApprovalRow {
  affirmLevel: string;
  affirmTypeName: string;
  affirmFlagName: string;
  affirmName: string;
  affirmContent: string;
  updateDate: string;
  deptName: string;
}

export interface CardApplyDetail {
  leaveInfo: CardLeaveInfo | null;
  employeeInfo: CardLeaveInfo | null;
  approvalList: CardApprovalRow[];
}
