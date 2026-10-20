/** Tương ứng EssPiciOtAffirmDto - ngày dạng 'dd/MM/yyyy', giờ dạng 'HH:mm' (đúng bản gốc). */
export interface PiciOtApiRow {
  applyNo: string;
  personId: string | null;
  empId: string | null;
  localName: string | null;
  deptNo: string | null;
  deptName: string | null;
  shiftName: string | null;
  /** 14015813 = khối gián tiếp (tăng ca tối thiểu 1 tiếng). */
  postFamily: string | null;
  dutyNo: string | null;
  /** 1 = áp giới hạn 40h/tháng khi xin tăng ca. */
  otLimit: string | null;
  applyOtDate: string | null;
  otFromTime: string | null;
  otToTime: string | null;
  otApplyHour: string | null;
  otTypeCode: string | null;
  otTypeName: string | null;
  applyOtRemark: string | null;
  deductYn: string | null;
  offsetYn: string | null;
  affirmFlag: string | null;
  affirmFlagName: string | null;
  shiftStartTime: string | null;
  shiftEndTime: string | null;
  indoorTime: string | null;
  outdoorTime: string | null;
  weekdayOtTotal: string | null;
  weekendOtTotal: string | null;
  holidayOtTotal: string | null;
  otTotal: string | null;
  otTotalMonth: string | null;
  affirmStr: string | null;
  createdBy: string | null;
  createDate: string | null;
  updatedBy: string | null;
  updateDate: string | null;
}

/** 1 dòng trong bảng - thêm state UI (chọn dòng, sửa NV, ngày dạng Date cho nz-date-picker...). */
export interface PiciOtRow extends PiciOtApiRow {
  selected: boolean;
  /** Ô Mã NV cho phép nhập/tìm khi dòng được tạo trống (PERSON_ID rỗng lúc tải) - đúng sysLog="lookUp" bản gốc. */
  empEditable: boolean;
  /** Dòng đã có NV lúc tải -> click tên mở popup chi tiết đơn. */
  canViewDetail: boolean;
  applyOtDateObj: Date | null;
  /** Nội dung ô Mã NV đang nhập (Enter để mở popup tìm nhân viên). */
  empKeyword: string;
}

/** Kết quả GET /api/piciOtAffirm/validate-info (getValidateInfo bản gốc). */
export interface PiciOtValidateInfo {
  otTypeCode?: string;
  otTypeName?: string;
  /** OT_LENGTH */
  otApplyHour?: string;
  /** 1440 ngày thường, 1441 cuối tuần, khác: ngày lễ. */
  dateType?: string;
  shiftStartTime?: string;
  shiftEndTime?: string;
  /** Giờ hết ca + 2 tiếng. */
  shiftEndTime2?: string;
  indoorTime?: string;
  outdoorTime?: string;
  otShiftLength?: string;
}

/** Kết quả GET /api/piciOtAffirm/emp-ot-info (getOt_Totail bản gốc). */
export interface PiciOtEmpInfo {
  shiftName?: string;
  postFamily?: string;
  dutyNo?: string;
  otLimit?: string;
  weekdayOtTotal?: string;
  weekendOtTotal?: string;
  holidayOtTotal?: string;
  otTotal?: string;
  otTotalMonth?: string;
}

export interface PiciOtSearchParams {
  keyword: string;
  deptNos: string;
  startDate: string;
  endDate: string;
  shiftNo: string;
  searchOtTypeCode: string;
  searchAffirmFlag: string;
  cancelFlag: string;
  /** 'Y' = xóa dòng trống của người đăng nhập trước khi lấy danh sách (chỉ lần mở menu đầu tiên). */
  deleteYN?: string;
}

/** Dữ liệu gửi lên khi Lưu / Hủy. */
export interface PiciOtPayload {
  applyNo: string;
  personId: string;
  localName: string;
  applyOtDate: string;
  otFromTime: string;
  otToTime: string;
  otApplyHour: string;
  otTypeCode: string;
  applyOtRemark: string;
  deductYn: string;
  offsetYn: string;
}

export interface PiciOtResult {
  success: boolean;
  message?: string;
  error?: string;
  count?: number;
  row?: PiciOtApiRow;
}
