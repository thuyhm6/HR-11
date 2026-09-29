/** Chiều thống kê của báo cáo đào tạo (suy ra từ URL_JSP trong REPORT_CENTER của bản gốc). */
export type EduTrainReportKey = 'course' | 'postGrade' | 'dept' | 'year' | 'month' | 'form';

/** Loại báo cáo trên cây bên trái - tương ứng EduTrainReportTypeDto.java. */
export interface EduTrainReportType {
  codeNo: string;
  reportName: string;
  reportKey: EduTrainReportKey;
}

/** Điều kiện báo cáo - year YYYY, month YYYYMM. */
export interface EduTrainReportSearch {
  type: EduTrainReportKey;
  trainDiffCode?: string | null;
  trainTypeCode?: string | null;
  courseName?: string;
  postGradeName?: string;
  deptNo?: string | null;
  year?: string;
  month?: string;
  trainFormCode?: string | null;
}

/** 1 dòng báo cáo - tương ứng EduTrainReportRowDto.java (giờ: 1 ngày = 8 giờ, 1 tháng = 30 ngày). */
export interface EduTrainReportRow {
  dimKey: string | null;
  dimName: string | null;
  trainDiffName: string | null;
  courseNameCode: string | null;
  trainFormName: string | null;
  courseCount: number | null;
  classCount: number | null;
  numb: number | null;
  personCount: number | null;
  avgCount: number | null;
  allTime: number | null;
  totalPt: number | null;
  avgTime: number | null;
  allCost: number | null;
  directCost: number | null;
  indirectCost: number | null;
  avgCost: number | null;
}

/** Cột số liệu của bảng báo cáo (giống nhau ở mọi loại báo cáo). */
export interface EduTrainReportColumn {
  field: keyof EduTrainReportRow;
  key: string;
  fallback: string;
  hours?: boolean;
}

export const REPORT_VALUE_COLUMNS: EduTrainReportColumn[] = [
  { field: 'courseCount', key: 'edu.trainreport.KECHENGSHULIANG.a', fallback: 'Số khóa học' },
  { field: 'classCount', key: 'edu.trainReport.classCount', fallback: 'Số lần đào tạo' },
  { field: 'numb', key: 'edu.trainReport.numb', fallback: 'Số lượt học viên' },
  { field: 'personCount', key: 'edu.trainReport.personCount', fallback: 'Số học viên' },
  { field: 'avgCount', key: 'edu.trainReport.avgCount', fallback: 'Số lần đào tạo bình quân / người' },
  { field: 'allTime', key: 'edu.trainreport.ZONGPEIXUNSHIJIAN.a', fallback: 'Tổng thời gian', hours: true },
  { field: 'totalPt', key: 'edu.trainreport.PEIXUNSHIJIANRENSHU.a', fallback: 'Thời gian*số người', hours: true },
  { field: 'avgTime', key: 'edu.trainreport.RENJUNPEIXUNSHIJIAN.a', fallback: 'Thời gian bình quân', hours: true },
  { field: 'directCost', key: 'edu.trainCostMANAGER.ZHIJIEJINGFEI.a', fallback: 'Chi phí trực tiếp' },
  { field: 'indirectCost', key: 'edu.trainCostMANAGER.JIANJIEJINGFEI.a', fallback: 'Chi phí gián tiếp' },
  { field: 'allCost', key: 'edu.trainreport.ZONGPEIXUNFEIYONG.a', fallback: 'Tổng chi phí đào tạo' },
  { field: 'avgCost', key: 'edu.trainreport.RENJUNPEIXUNFEIYONG.a', fallback: 'Bình quân chi phí' },
];

/** Cột nhóm (chiều thống kê) theo loại báo cáo - bản gốc *TrainReportExcel.jsp. */
export const REPORT_DIM_COLUMNS: Record<EduTrainReportKey, EduTrainReportColumn[]> = {
  course: [
    { field: 'trainDiffName', key: 'liang.hr.viewTraining.title.TRAINING_DIFFERENTIATE', fallback: 'Chương trình đào tạo' },
    { field: 'dimName', key: 'edu.systemManager.PEIXUNLEIXING.a', fallback: 'Loại hình' },
    { field: 'courseNameCode', key: 'empsubject.subjectNm', fallback: 'Tên đào tạo' },
  ],
  postGrade: [{ field: 'dimName', key: 'pa.insurance.title.postGrade', fallback: 'Chức vụ' }],
  dept: [{ field: 'dimName', key: 'ar.attendanceView.viewNoSwipingCard.deptName', fallback: 'Phòng ban' }],
  year: [{ field: 'dimName', key: 'pa.salary.canShu.nianDu', fallback: 'Năm' }],
  month: [{ field: 'dimName', key: 'ar.excelexport.title.month', fallback: 'Tháng' }],
  form: [{ field: 'dimName', key: 'edu.trainreport.KECHENGXINGSHI.a', fallback: 'Hình thức khóa học' }],
};

export const REPORT_FORM_COLUMN: EduTrainReportColumn = { field: 'trainFormName', key: 'hrm.empinfo.Training_form', fallback: 'Hình thức đào tạo' };
