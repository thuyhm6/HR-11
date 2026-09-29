/** Khóa được đăng ký - tương ứng EduCourseApplyCourseDto.java. Ngày DD/MM/YYYY. */
export interface EduApplyCourse {
  basicNo: string;
  planNo: string | null;
  syllabusCount: number | null;
  trainTypeCodeName: string | null;
  courseNameCode: string | null;
  periodTime: string | null;
  impleStartDate: string | null;
  impleEndDate: string | null;
  impleClassHour: string | null;
  impleClassUnit: string | null;
  applyEndDate: string | null;
  applyCount: number | null;
  planCount: number | null;
}

/**
 * 1 đơn đăng ký - tương ứng EduCourseApplyRowDto.java.
 * applyFlag: '1' chưa duyệt / '2' đã duyệt / '0' từ chối; confirmFlag: '1' chờ xác nhận / '2' đã xác nhận / '0' từ chối.
 */
export interface EduApplyRow {
  makerNo: string;
  applyNo: string;
  basicNo: string;
  planNo: string | null;
  syllabusCount: number | null;
  empId: string | null;
  stuLocalName: string | null;
  deptName: string | null;
  postGradeName: string | null;
  trainTypeCodeName: string | null;
  courseNameCode: string | null;
  periodTime: string | null;
  impleStartDate: string | null;
  impleEndDate: string | null;
  impleClassHour: string | null;
  impleClassUnit: string | null;
  applyDate: string | null;
  applyTask: string | null;
  applyFlag: string | null;
  confirmFlag: string | null;
  makerLocalName: string | null;
  makerLevel: string | null;
  applyCount: number | null;
  planCount: number | null;
  mine: boolean;
}

export interface EduApplySearch {
  keyword?: string;
  deptNo?: string | null;
  courseName?: string;
  startDate?: string;
  endDate?: string;
  flag?: string | null;
}

export interface EduApplySituationResponse {
  manager: boolean;
  rows: EduApplyRow[];
}

/** Trạng thái phê duyệt (bản gốc APPLY_FLAG) - nhãn hiển thị và nhãn lựa chọn. */
export const APPLY_FLAGS = [
  { value: '1', key: 'ess.trans.title.notAffirmed', fallback: 'Chưa duyệt', color: 'default' },
  { value: '2', key: 'hr.viewTransactionTransViewList.title.PASS', fallback: 'Đã duyệt', color: 'blue' },
  { value: '0', key: 'hr.viewTransactionTransViewList.title.VOTE_DOWN', fallback: 'Đã từ chối', color: 'red' },
];

/** Trạng thái xác nhận (bản gốc CONFIRM_FLAG). */
export const CONFIRM_FLAGS = [
  { value: '1', key: 'main.home.message.unconfirm', fallback: 'Chờ xác nhận', color: 'orange' },
  { value: '2', key: 'ar.viewsummaryyiqueren', fallback: 'Đã xác nhận', color: 'green' },
  { value: '0', key: 'hrm.contractInfo.VETO', fallback: 'Từ chối', color: 'red' },
];

export const APPLY_FLAG_KEYS = APPLY_FLAGS.map((f) => f.key);
export const CONFIRM_FLAG_KEYS = CONFIRM_FLAGS.map((f) => f.key);
