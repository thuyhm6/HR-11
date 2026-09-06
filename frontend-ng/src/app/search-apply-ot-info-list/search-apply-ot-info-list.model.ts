/** Tương ứng với ArAttendanceSearchDto.java (1 dòng đơn tăng ca - response GET .../api/attendanceSearch/otList). */
export interface SearchApplyOtRow {
  arDateStr: string;
  dateTypeRealName: string;
  empId: string;
  localName: string;
  deptName: string;
  postGradeName: string;
  postFamilyName: string;
  shiftName: string;
  itemName: string;
  fromTime: string;
  toTime: string;
  quantity: string;
  unit: string;
  statusName: string;
  remark: string;
  updatedBy: string;
  updateDate: string;
}

export interface SearchApplyOtParams {
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

/** Tương ứng với response GET /ar/attendanceSettings/api/arItemParam/options?type=overtime. */
export interface ItemOption {
  itemNo: string;
  itemName: string;
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
