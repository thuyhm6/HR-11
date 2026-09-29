import { EduPerson } from './edu-common.model';

/**
 * Thông tin cơ bản đào tạo - tương ứng EduTrainBasicDto.java. Dùng chung cho các trang Thông tin cơ bản, Đánh giá học viên,
 * Đánh giá giảng viên, Kết quả đào tạo. Ngày DD/MM/YYYY; impleClassUnit: '0' tháng, '1' ngày, '2' giờ.
 */
export interface EduTrainBasic {
  basicNo: string | null;
  planNo: string | null;
  trainTypeCode?: string | null;
  trainTypeCodeName?: string | null;
  courseNameCode?: string | null;
  trainFormCode?: string | null;
  trainFormCodeName?: string | null;
  trainAddress?: string | null;
  impleStartDate: string | null;
  impleEndDate: string | null;
  impleClassHour: string | null;
  impleClassUnit: string | null;
  trainContent: string | null;
  periodTime?: string | null;
  applyEndDate: string | null;
  studentEvalCount?: number | null;
  teacherEvalCount?: number | null;
  resultCount?: number | null;
  desDepartments: string[];
  comTeachers: EduPerson[];
  evaTeachers: EduPerson[];
  planEmployees: EduPerson[];
  actEmployees: EduPerson[];
  freeEmployees: EduPerson[];
  applyEmployees: EduPerson[];
  finalStudents: EduPerson[];
}

export interface EduTrainBasicSearch {
  courseName: string;
  startDate: string;
  endDate: string;
}

/** Học viên + điểm số (Đánh giá học viên) - tương ứng EduFreeEmployeeDto.java. */
export interface EduStudentScore {
  freeNo: string;
  basicNo: string;
  empId: string;
  localName: string;
  flag: string | null;
  deptName: string | null;
  postGradeName: string | null;
  evaResult: string | null;
}

/** Tỷ lệ % các mức điểm - tương ứng EduScoreDistributionDto.java. */
export interface EduScoreDistribution {
  key: string;
  name: string | null;
  postGradeName: string | null;
  deptName: string | null;
  count: number;
  rev5: number;
  rev4: number;
  rev3: number;
  rev2: number;
  rev1: number;
  satisfaction: number;
}

/** Phiếu học viên đánh giá giảng viên - tương ứng EduTeacherCheckDto.java. */
export interface EduTeacherCheck {
  checkNo: string;
  teaEmpId: string;
  teaLocalName: string | null;
  stuEmpId: string;
  stuLocalName: string | null;
  grooming: number | null;
}

/** Phiếu đánh giá khóa học - tương ứng EduTrainResultDto.java. */
export interface EduTrainResult {
  resultNo: string;
  stuEmpId: string;
  stuLocalName: string | null;
  difficulty: number | null;
  contentRich: number | null;
  practicability: number | null;
  timeModerate: number | null;
  allscore: string | null;
  otherAdvise: string | null;
}

/** Dòng import Excel các trang đánh giá - tương ứng EduEvaluateImportRowDto.java. */
export interface EduEvaluateImportRow {
  empId: string;
  name: string;
  score?: string;
  difficulty?: string;
  contentRich?: string;
  timeModerate?: string;
  practicability?: string;
}

export interface EduEvaluateListResponse {
  rows: EduTrainBasic[];
  /** Người quản lý đào tạo (role ADMIN/SYS/HRM) - được import / chấm cho mọi khóa. */
  manager: boolean;
}

/** Nhãn tiêu chí kết quả đào tạo theo key trả về từ BE (EduTrainEvaluateServiceImpl.CRITERION_*). */
export const RESULT_CRITERIA: Record<string, { key: string; fallback: string }> = {
  DIFFICULTY: { key: 'edu.trainResult.KECHENGDEZHENGTIMANYIDU.a', fallback: 'Mức độ hài lòng' },
  CONTENT_RICH: { key: 'edu.trainResult.KECHENGYIZHANGWODECHENGDU.a', fallback: 'Mức độ khó dễ' },
  TIME_MODERATE: { key: 'edu.trainResult.KECHENGDESHIJIANCHANGDU.a', fallback: 'Thời gian học' },
  PRACTICABILITY: { key: 'edu.trainResult.KECHENGNEIRONGSHIFOUSHIYONG.a', fallback: 'Nội dung đào tạo thực dụng không' },
};

/** Tiêu đề 5 mức điểm + độ hài lòng (bản gốc REV_05 ... REV_01, REV_TOTAL). */
export const SCORE_LEVELS = [
  { field: 'rev5', key: 'edu.teacherEvaluate.FEICHANGHAO.a', fallback: 'Rất tốt' },
  { field: 'rev4', key: 'edu.teacherEvaluate.BIJIAOHAO.a', fallback: 'Tốt' },
  { field: 'rev3', key: 'edu.teacherEvaluate.YIBAN.a', fallback: 'Bình thường' },
  { field: 'rev2', key: 'edu.teacherEvaluate.BIJIAOBUHAO.a', fallback: 'Không tốt' },
  { field: 'rev1', key: 'edu.teacherEvaluate.FEICHANGBUHAO.a', fallback: 'Kém' },
  { field: 'satisfaction', key: 'edu.teacherEvaluate.MANYIDU.a', fallback: 'Độ hài lòng' },
] as const;

/** Tiêu đề cột "tên khóa học (Kỳ Thứ N)" giống bản gốc. */
export function courseWithPeriod(t: (k: string, f: string) => string, name: string | null | undefined,
                                 period: string | null | undefined): string {
  return `${name ?? ''} (${t('edu.planManager.QI.a', 'Kỳ')} ${t('ar.alert.message.excelimport.title.di', 'Thứ')} ${period ?? ''})`;
}
