/** Tương ứng với ArScheduleHtsvDto.java (bảng AR_SCHEDULE_HTSV join HR_EMPLOYEE - xếp ca làm việc cho
 *  1 nhân viên vào 1 ngày công cụ thể). arDateStr là chuỗi 'yyyy/MM/dd' (BE lưu dạng string, không phải
 *  DATE). */
export interface ArScheduleHtsvDto {
  pkNo: number;
  personId: string;
  shiftNo: string;
  shiftName: string | null;
  arDateStr: string;
  typeid: number | null;
  typeName: string | null;
  remark: string | null;
  updateDate: string | null;
  updatedBy: string | null;
  empId: string;
  localName: string;
}

/** Payload gửi lên POST /ar/attendanceMintenance/api/scheduleHtsv/save - pkNo null nghĩa là thêm mới. */
export interface ArScheduleHtsvSavePayload {
  pkNo: number | null;
  personId: string;
  arDateStr: string;
  shiftNo: string;
  typeid: number | null;
  remark: string;
}

/** Tương ứng với ArShift010Dto.java (combo Ca làm việc, xem GET /ar/attendanceSettings/api/shift). */
export interface ShiftOption {
  shiftNo: string;
  nameVi: string;
  shiftShortname?: string;
}
