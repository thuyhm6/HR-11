/** 1 khóa học có buổi học trong ngày - tương ứng EduCalendarItemDto.java. dateKey YYYYMMDD, courseDate DD/MM/YYYY. */
export interface EduCalendarItem {
  dateKey: string;
  courseDate: string;
  planNo: string;
  courseNameCode: string | null;
  periodTime: string | null;
  startTime: string | null;
  endTime: string | null;
}

/** 1 ô ngày trên lưới tháng (day = 0 -> ô trống đầu/cuối tháng). */
export interface EduCalendarCell {
  day: number;
  dateKey: string;
  isToday: boolean;
  isSunday: boolean;
  isSaturday: boolean;
  items: EduCalendarItem[];
}
