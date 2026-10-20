/** Tương ứng với EssAttendanceExForBatchDto.java (danh sách chấm công bất thường chờ xin phép). */
export interface AttendanceExApiRow {
  /** Ngày công dạng 'yyyy/MM/dd'. */
  arDateStr: string;
  dateStr: string;
  /** PK_NO của AR_DETAIL_HTSV - dùng làm APPLY_NO khi xin phép. */
  applyNo: string | null;
  personId: string;
  /** Giờ bất thường gốc (FROM_TIME/TO_TIME) dạng 'yyyy/MM/dd HH:mm' - gửi lại nguyên khi xin phép. */
  fromDateTime: string;
  toDateTime: string;
  workHour: string;
  itemNo: string;
  itemNoName: string;
  createDate: string;
  createdName: string;
  updateDate: string;
  updatedName: string;
  inDoorTime: string;
  outDoorTime: string;
  /** Giờ bắt đầu / kết thúc ca 'yyyy-MM-dd HH:mm' - lấy phần ngày làm mặc định cho ô ngày vào/ra. */
  shiftStartTime: string;
  shiftEndTime: string;
  empId: string;
  localName: string;
  deptNo: string;
  deptName: string;
  postGradeName: string;
  postFamily: string;
  postFamilyName: string;
  createdBy: string;
  updatedBy: string;
  /** 'N' mới cho chọn xin phép (checkbox bản gốc chỉ hiện khi LOCK_YN = N). */
  lockYn: string;
  shiftNo: string;
  shiftName: string;
  remark: string;
}

/**
 * Dòng hiển thị - giờ vào/ra nhập tách ngày + giờ + phút đúng bản gốc (ngày mặc định theo ca, giờ/phút để
 * trống bắt buộc người dùng nhập).
 */
export interface AttendanceExRow extends AttendanceExApiRow {
  selected: boolean;
  inDate: Date | null;
  inHour: string;
  inMinute: string;
  outDate: Date | null;
  outHour: string;
  outMinute: string;
  /** Tuyến duyệt dự kiến "1[EMPID]Tên  2[EMPID]Tên<br>...". */
  affirmStr: string;
}

export interface AttendanceExSearchParams {
  keyword: string;
  deptNos: string;
  fromDate: string;
  toDate: string;
  itemNo: string;
}

/** Payload gửi lên POST /api/attendanceEx/apply - đúng field saveAttenanceExBatchInfo() bản gốc. */
export interface ApplyPayloadRow {
  applyNo: string;
  personId: string;
  empId: string;
  localName: string;
  itemNo: string;
  arDateStr: string;
  fromDateTime: string;
  toDateTime: string;
  inTime: string;
  outTime: string;
  workHour: string;
  remark: string;
}

export interface ApplyResult {
  success: boolean;
  count?: number;
  message?: string;
  error?: string;
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
