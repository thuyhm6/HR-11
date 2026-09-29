import { EduFile } from '../edu-common/edu-common.model';

/**
 * Tương ứng với EduPlanManagerDto.java (bảng EDU_PLAN_MANAGER). Ngày DD/MM/YYYY.
 * classUnit: '0' = tháng, '1' = ngày, '2' = giờ. isnotEvaluate: "1,2,3" (học viên/giảng viên/khóa học) hoặc "0".
 */
export interface EduPlan {
  planNo: string | null;
  courseNo: string | null;
  trainDiffCode?: string | null;
  trainDiffName?: string | null;
  trainTypeCode?: string | null;
  trainTypeCodeName?: string | null;
  courseNameCode?: string | null;
  courseNumber?: string | null;
  periodTime?: string | null;
  planStartdate: string;
  planEnddate: string;
  classHour: string;
  classUnit: string;
  trainFormCode: string | null;
  trainFormCodeName?: string | null;
  isnotApply: string;
  desDepartments: string[];
  desEmployees: string[];
  desEmployeeNames: string[];
  budget: string | null;
  budgetShow: string;
  departManaCode: string | null;
  departManaCodeName?: string | null;
  teacherEmpId: string | null;
  teacherName: string | null;
  trainAddress: string | null;
  trainPersonCount: string;
  trainPersonRemark: string | null;
  isnotEvaluate: string;
  isnotReport?: string | null;
  isnotAgreement?: string | null;
  isnotTest?: string | null;
  syllabusCount?: number | null;
  files?: EduFile[];
}

/** Lịch đào tạo - tương ứng EduTrainSyllabusDto.java. courseDate DD/MM/YYYY, giờ HH:MI. */
export interface EduSyllabus {
  syllNo?: string | null;
  planNo?: string | null;
  courseNameCode: string;
  courseDate: string;
  courseStartTime: string;
  courseEndTime: string;
  detailAddress: string;
}

/** Giảng viên để chọn - tương ứng EduPlanTeacherDto.java. */
export interface EduPlanTeacher {
  empId: string;
  teacherName: string;
  deptName: string | null;
}

export const CLASS_UNITS = [
  { value: '2', key: 'ar.viewsummaryparameteritem.title.hour', fallback: 'Tiếng' },
  { value: '0', key: 'display.mutual.month', fallback: 'Tháng' },
  { value: '1', key: 'ar.viewsummaryparameteritem.title.day', fallback: 'Ngày' },
];

export const EVALUATE_OPTIONS = [
  { value: '1', key: 'edu.planManager.XUEYUANPINGJIA.a', fallback: 'Đánh giá học viên' },
  { value: '2', key: 'edu.planManager.JIANGSHIPINGJIA.a', fallback: 'Đánh giá giảng viên' },
  { value: '3', key: 'edu.planManager.PEIXUNPINGJIA.a', fallback: 'Đánh giá khóa học' },
];

/** Cột file Excel lịch đào tạo - giữ nguyên file mẫu bản gốc (getPlanCourse / importTrainPlan). */
export const SYLLABUS_EXCEL_HEADERS = ['Course name', 'Course date', 'Start time', 'End time', 'Address'];
export const SYLLABUS_EXCEL_SAMPLE = ['Training...', '01/01/2018', '08:00', '10:00', 'Room'];
