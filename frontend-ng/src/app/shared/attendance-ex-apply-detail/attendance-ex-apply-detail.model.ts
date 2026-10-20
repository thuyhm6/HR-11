import { LeaveApprovalItem } from '../leave-apply-detail/leave-apply-detail.model';

/** Response GET /ess/infoApplyAttendance/api/checkAttendanceEx/detail
 *  (EssAttendanceExForBatchServiceImpl.getCardApplyDetail) - tương ứng dữ liệu của /ess/infoApply/viewAttendanceEx
 *  bản gốc (attendanceExInfo + viewAffirmList). leaveInfo/employeeInfo là dữ liệu cũ (EssLeaveApplyDto) giữ lại để
 *  dự phòng khi attendanceExInfo rỗng. */
export interface AttendanceExApplyDetail {
  attendanceExInfo?: AttendanceExInfo | null;
  leaveInfo?: Record<string, any> | null;
  employeeInfo?: Record<string, any> | null;
  /** Trình tự duyệt (SY_AFFIRM_EMAIL) + dòng HR xác nhận ở cuối (affirmLevel = 100) - cùng cấu trúc đơn nghỉ phép. */
  approvalList: AttendanceExApprovalItem[];
}

export type AttendanceExApprovalItem = LeaveApprovalItem;

/** EssAttendanceExDetailDto.java. */
export interface AttendanceExInfo {
  applyNo: string;
  personId: string;
  empId: string;
  localName: string;
  deptNo: string;
  deptName: string;
  postGradeName: string;
  itemNo: string;
  itemName: string;
  /** DD/MM/YYYY */
  arDateStr: string;
  applyReason: string;
  applyTime: string;
  affirmFlag: string;
  affirmFlagName: string;
  confirmFlag: string;
  /** Giờ xin xác nhận vào/ra (HH:mm). */
  inTime: string;
  outTime: string;
  /** Giờ quẹt thẻ thực tế vào/ra. */
  indoorTime: string;
  outdoorTime: string;
  shiftName: string;
  shiftStartTime: string;
  shiftEndTime: string;
  workHour: string;
}
