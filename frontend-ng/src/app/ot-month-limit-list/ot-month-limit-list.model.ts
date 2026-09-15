/** Tương ứng với EssOtMonthLimitPeriodDto.java - 1 kỳ (cả năm hoặc 1 tháng) của 1 nhân viên. */
export interface OtMonthLimitPeriod {
  total: number | null;
  approval: number | null;
  satApproval: number | null;
  request: number | null;
  satRequest: number | null;
}

/** Tương ứng với EssOtMonthLimitDto.java - 1 dòng của bảng theo dõi tăng ca tháng. */
export interface OtMonthLimitRow {
  empId: string;
  localName: string;
  yearTotal: OtMonthLimitPeriod;
  january: OtMonthLimitPeriod;
  february: OtMonthLimitPeriod;
  march: OtMonthLimitPeriod;
  april: OtMonthLimitPeriod;
  may: OtMonthLimitPeriod;
  june: OtMonthLimitPeriod;
  july: OtMonthLimitPeriod;
  august: OtMonthLimitPeriod;
  september: OtMonthLimitPeriod;
  october: OtMonthLimitPeriod;
  november: OtMonthLimitPeriod;
  december: OtMonthLimitPeriod;
}

/** Khai báo 1 nhóm cột kỳ (năm hoặc tháng) trên bảng - dùng để lặp *ngFor thay vì viết tay 13 lần. */
export interface OtMonthLimitPeriodColumn {
  key: keyof OtMonthLimitRow;
  /** null = nhóm "Cả năm" (nhãn ghép động với năm đang chọn ở template), khác null = key message.properties của tháng. */
  labelKey: string | null;
}

/** Tương ứng với response GET /ar/attendanceSettings/api/arSupervisor/authorized-departments. */
export interface OtMonthLimitDeptNode {
  id: string;
  text: string;
  parent: string;
}
