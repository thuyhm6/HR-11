/** Tương ứng với các field của EssPersonalInfoDto.java dùng cho card "Thông tin nhân viên"
 *  (fragments/essEmpInfoCard.html gốc) + personId (cần để gọi API duyệt/xin phép) - giống hệt
 *  EssBasicInfoDto ở sst-apply-attendance.model.ts. */
export interface EssBasicInfoDto {
  personId: string;
  empId: string;
  localName: string;
  deptName: string;
  headDepartment: string;
  postFamilyName: string;
  postGradeName: string;
  positionNoName: string;
  dateStarted: string;
}

/** Tương ứng với các field của EssCwaAbnormalDto.java mà GET /api/myCwaAbnormal/list trả về. */
export interface EssCwaAbnormalDto {
  pkNo: string;
  personId: string;
  empId: string;
  itemNo: string;
  itemName: string;
  fromTime: string;
  toTime: string;
  arDateStr: string;
  dateStr: string;
  indoorTime: string;
  outdoorTime: string;
  shiftStartYyyy: string;
  shiftStartHh: string;
  shiftStartMi: string;
  shiftEndYyyy: string;
  shiftEndHh: string;
  shiftEndMi: string;
  lockYn: string;
}

/** 1 dòng trong bảng - bọc thêm state chọn dòng + giờ vào/ra/lý do đang chỉnh sửa (dữ liệu client-side,
 *  không có trong response backend) ngoài field trả về từ EssCwaAbnormalDto. */
export interface CwaAbnormalDisplayRow extends EssCwaAbnormalDto {
  selected: boolean;
  inTime: Date | null;
  outTime: Date | null;
  remark: string;
}

export interface CwaAbnormalSearchParams {
  startDate: string;
  endDate: string;
}

/** Tương ứng với các field của SyAffirmEmailDto.java mà trang này dùng (danh sách người phê duyệt) -
 *  giống hệt ApproverInfo ở sst-apply-attendance.model.ts. */
export interface ApproverInfo {
  affirmLevel: string;
  localName: string;
  empId: string;
  deptName: string;
  positionName: string;
  postionName: string;
}

/** Tương ứng với các field của EssAttendanceExForBatchDto.java mà trang gốc gửi lên (chỉ các field
 *  scaSubmit() bản gốc thực sự set). */
export interface AttendanceExApplyItem {
  applyNo: string;
  personId: string;
  localName: string;
  itemNo: string;
  arDateStr: string;
  fromDateTime: string;
  toDateTime: string;
  workHour: string;
  remark: string;
}

export interface ApplyResult {
  success: boolean;
  message?: string;
  error?: string;
  count?: number;
}
