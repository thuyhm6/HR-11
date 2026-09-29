/** Tương ứng với EduCourseManagerDto.java (bảng EDU_COURSE_MANAGER). */
export interface EduCourseManagerRow {
  courseNo: string;
  sysmanaNo: string | null;
  trainTypeCode: string | null;
  trainTypeCodeName: string | null;
  trainTypeNo: string | null;
  courseNameCode: string | null;
  courseNumber: string | null;
  remark: string | null;
}

/** Payload POST /edu/traineducation/api/courseManager/save - courseNo null = thêm mới. */
export interface EduCourseManagerSavePayload {
  courseNo: string | null;
  sysmanaNo: string | null;
  courseNameCode: string;
  remark: string;
}

export interface EduCourseManagerActionResult {
  success: boolean;
  message: string;
}
