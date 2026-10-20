/** Tương ứng EssPiciLeaveAffirmDto - ngày dạng 'dd/MM/yyyy', giờ dạng 'HH:mm' (đúng bản gốc). */
export interface PiciLeaveApiRow {
  applyNo: string;
  personId: string | null;
  empId: string | null;
  localName: string | null;
  deptName: string | null;
  shiftName: string | null;
  postFamily: string | null;
  dutyNo: string | null;
  /** Ngày xin phép (APPLY_TIME). */
  applyTime: string | null;
  leaveTypeCode: string | null;
  leaveTypeName: string | null;
  fromDate: string | null;
  fromTime: string | null;
  toDate: string | null;
  toTime: string | null;
  /** Số giờ nghỉ. */
  applyLength: string | null;
  /** Số giờ 1 ngày công - đổi giờ sang "x Ngày y Tiếng" khi hiển thị. */
  dayHours: string | null;
  leaveReason: string | null;
  hrComment: string | null;
  affirmFlag: string | null;
  affirmFlagName: string | null;
  confirmFlag: string | null;
  totVacCnt: string | null;
  remainVacCnt: string | null;
  affirmStr: string | null;
  createdBy: string | null;
  createDate: string | null;
  updatedBy: string | null;
  updateDate: string | null;
}

/** 1 dòng trong bảng - thêm state UI. */
export interface PiciLeaveRow extends PiciLeaveApiRow {
  selected: boolean;
  /** Ô Mã NV cho phép nhập/tìm khi dòng được tạo trống (PERSON_ID rỗng lúc tải) - đúng sysLog="lookUp" bản gốc. */
  empEditable: boolean;
  /** Dòng đã có NV lúc tải -> click tên mở popup chi tiết đơn. */
  canViewDetail: boolean;
  fromDateObj: Date | null;
  toDateObj: Date | null;
  /** Nội dung ô Mã NV đang nhập (Enter để mở popup tìm nhân viên). */
  empKeyword: string;
}

export interface PiciLeaveSearchParams {
  keyword: string;
  deptNos: string;
  startDate: string;
  endDate: string;
  shiftNo: string;
  searchLeaveTypeCode: string;
  searchAffirmFlag: string;
  searchConfirmFlag: string;
  searchPostFamily: string;
  cancelFlag: string;
  firstLoad: string;
}

/** Kết quả GET /api/piciLeave/emp-leave-info. */
export interface PiciLeaveEmpInfo {
  shiftName?: string;
  postFamily?: string;
  dutyNo?: string;
  totVacCnt?: string;
  remainVacCnt?: string;
}

/** Kết quả GET /api/piciLeave/leave-length. */
export interface PiciLeaveLength {
  dayHours?: string;
  applyLength?: string;
}

/** Dữ liệu gửi lên khi Lưu / Hủy. */
export interface PiciLeavePayload {
  applyNo: string;
  personId: string;
  localName: string;
  leaveTypeCode: string;
  fromDate: string;
  fromTime: string;
  toDate: string;
  toTime: string;
  applyLength: string;
  leaveReason: string;
}

export interface PiciLeaveResult {
  success: boolean;
  message?: string;
  error?: string;
  count?: number;
  row?: PiciLeaveApiRow;
}
