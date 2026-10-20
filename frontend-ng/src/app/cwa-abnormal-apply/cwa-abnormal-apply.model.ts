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

/** 1 dòng trong bảng - giờ vào/ra nhập tách ngày + giờ + phút đúng bản gốc (ngày mặc định theo ca, giờ/phút để
 *  trống bắt buộc nhập), kèm tuyến duyệt dự kiến. */
export interface CwaAbnormalDisplayRow extends EssCwaAbnormalDto {
  selected: boolean;
  inDate: Date | null;
  inHour: string;
  inMinute: string;
  outDate: Date | null;
  outHour: string;
  outMinute: string;
  remark: string;
  affirmStr: string;
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

/** Payload POST /ess/infoApplyAttendance/api/attendanceEx/apply (EssAttendanceExForBatchDto) - các field
 *  addCwaAbnormalApply bản gốc gửi lên: ngày công 'yyyy/MM/dd', FROM/TO = giờ quẹt thẻ gốc, IN/OUT = giờ nhập. */
export interface AttendanceExApplyItem {
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
  message?: string;
  error?: string;
  count?: number;
}
