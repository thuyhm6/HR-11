/**
 * Kiểu dữ liệu + hàm dùng chung cho nhóm màn hình kiểm tra / đối chiếu lương (PaSalaryCheckController):
 * month-person-count-info-list, view-pa-month-chain, view-verification-list, detail-person-count-info,
 * detail-person-count-info-left, detail-item-count-info, detail-item-dif-count-info, view-result-confirm-list.
 */

/** Kế hoạch trả lương - response GET /pa/workManagement/api/paySchedule (PaPayScheduleDto.java, có salaryDistinNo). */
export interface PaScheduleOption {
  payScheduleNo: string;
  /** DD-MM-YYYY. */
  payDate: string;
  salaryDistinNo: string;
  salaryDistinName: string;
}

/** Mã code - response GET /sys/api/getCode/list. */
export interface PaCodeOption {
  codeNo: string;
  codeName: string;
}

/** Tương ứng PaSalaryCheckSearchDto.java - chỉ gửi các trường có giá trị. */
export interface PaSalaryCheckQuery {
  salaryDistinNo?: string | null;
  payDate?: string | null;
  payDatePro?: string | null;
  payScheduleNo?: string | null;
  personId?: string | null;
  empSearch?: string | null;
  deptNo?: string | null;
  itemType?: number | null;
  itemId?: string | null;
  pageType?: string | null;
  monthDif?: string | null;
  selectType?: string | null;
  arStartDate?: string | null;
  arEndDate?: string | null;
}

/** Tương ứng PaSalaryCheckRowDto.java - mỗi API chỉ trả về 1 phần các trường. */
export interface PaSalaryCheckRow {
  personId: string;
  empId: string;
  localName: string;
  deptNo?: string;
  deptName?: string;
  postFamilyName?: string;
  postGradeName?: string;
  positionName?: string;
  dutyName?: string;
  mainBusiness?: string;
  empTypeName?: string;
  empOfficeName?: string;
  dateStarted?: string;
  dateLeft?: string;
  endProbationDate?: string;
  transDate?: string;
  transCodeName?: string;
  itemNo?: string;
  itemName?: string;
  payNumber?: number | null;
  monthPro?: number | null;
  monthNow?: number | null;
  calValue?: number | null;
  formularValue?: string;
  remark?: string;
  arStartDate?: string;
  arEndDate?: string;
  arDate?: string;
  shiftName?: string;
  fromTime?: string;
  toTime?: string;
  quantity?: number | null;
  socialInsPersonal?: number | null;
  medicalInsPersonal?: number | null;
  unemploymentInsPersonal?: number | null;
  personalInsTotal?: number | null;
  incomeBeforeTax?: number | null;
  attDeductTotal?: number | null;
  taxDeductStd?: number | null;
  taxFamilyDeductStd?: number | null;
  taxFamilyDeductCount?: number | null;
  taxableIncome?: number | null;
  ptTaxRate?: number | null;
  quickDeductionTax?: number | null;
  personalTax?: number | null;
  realWages?: number | null;
}

/** Tương ứng PaMonthPersonSummaryDto.java. */
export interface PaMonthPersonCountRow {
  salaryDistinName: string;
  prevCount: number | null;
  curCount: number | null;
}

export interface PaMonthPersonChangeRow {
  /** RECRUIT | RESIGN | OTHER. */
  category: string;
  count: number | null;
  personIds: string[];
}

export interface PaMonthPersonSummary {
  counts: PaMonthPersonCountRow[];
  increases: PaMonthPersonChangeRow[];
  decreases: PaMonthPersonChangeRow[];
}

/** Tương ứng PaMonthDifItemDto.java. */
export interface PaMonthDifItem {
  itemId: string;
  itemNo?: string;
  itemName: string;
  itemType: string;
  pageType?: string;
  monthDif?: string;
  personNum: number | null;
  monthPro?: number | null;
  monthNow?: number | null;
  personNumPro?: number | null;
  personNumDif?: number | null;
  countNum?: number | null;
  countNumPro?: number | null;
  countNumDif?: number | null;
  personNumAvg?: number | null;
  personNumAvgPro?: number | null;
  personNumAvgDif?: number | null;
  countUp?: number | null;
  countLow?: number | null;
  personUp?: number | null;
  personLow?: number | null;
}

/** Tương ứng PaSalaryCheckItemDto.java. */
export interface PaSalaryCheckItem {
  itemId?: string;
  itemNo?: string;
  itemName: string;
  /** '1' chi trả | '2' khấu trừ | '3' bảo hiểm. */
  itemType: string;
  itemValue?: number | null;
  itemFormular?: string;
}

/** Tương ứng PaResultConfirmSummaryDto.java. */
export interface PaResultConfirmSummary {
  payDatePro: string;
  payDateCur: string;
  personNumPro: number | null;
  salaryTotalPro: number | null;
  withholdTotalPro: number | null;
  netPayPro: number | null;
  personNumCur: number | null;
  salaryTotalCur: number | null;
  withholdTotalCur: number | null;
  netPayCur: number | null;
  personNumDif: number | null;
  salaryTotalDif: number | null;
  withholdTotalDif: number | null;
  netPayDif: number | null;
}

/** Cột của bảng hiển thị động. */
export interface PaCheckColumn<T> {
  field: keyof T;
  key: string;
  fallback: string;
  number?: boolean;
  width?: string;
}

/** Mã cha SY_CODE của Phân loại lương. */
export const SALARY_DISTIN_PARENT_CODE = '14013797';

/** 3 loại hạng mục (ITEM_TYPE) - bản gốc option 1/2/3 của select ITEM_TYPE. */
export const ITEM_TYPE_OPTIONS = [
  { value: 1, key: 'pa.detailPersonCountInfo.JIYUXIANGMU.b', fallback: 'Chi trả' },
  { value: 2, key: 'pa.detailPersonCountInfo.KOUCHUXIANGMU.b', fallback: 'Khấu trừ' },
  { value: 3, key: 'pa.detailItemCountInfo.BAOXIANXIANGMU.b', fallback: 'BH' },
];

/** Nhóm MONTH_DIF theo đúng thứ tự hiển thị của bản gốc viewResultConfirmSonList (tab 2/4). */
export const MONTH_DIF_GROUPS = [
  { monthDif: '0', key: 'pa.viewResultConfirmSonList.XINZENGDUIXIANG.b', fallback: 'Thêm đối tượng mới' },
  { monthDif: '1', key: 'hrm.empinfo.ADD_PROJECT', fallback: 'Hạng mục thêm mới' },
  { monthDif: '2', key: 'pa.viewResultConfirmSonList.CHUWAIXIANGMU.b', fallback: 'Hạng mục ngoại lệ' },
  { monthDif: '4', key: 'pa.viewResultConfirmSonList.JINEBIANGENG.b', fallback: 'Thay đổi số tiền' },
  { monthDif: '3', key: 'pa.viewResultConfirmSonList.MEIYOUBIANGENG.b', fallback: 'Không thay đổi' },
];

/** Cột thông tin nhân viên dùng chung. */
export const EMP_COLUMNS: PaCheckColumn<PaSalaryCheckRow>[] = [
  { field: 'empId', key: 'ess.infoApply.EMP_ID', fallback: 'Mã nhân viên', width: '110px' },
  { field: 'localName', key: 'ess.infoApply.NAME', fallback: 'Họ tên', width: '170px' },
  { field: 'deptName', key: 'ess.infoApply.DEPT', fallback: 'Phòng ban', width: '170px' },
  { field: 'postFamilyName', key: 'ess.empInfo.zhiqun', fallback: 'Nhóm nhân viên', width: '130px' },
  { field: 'postGradeName', key: 'ess.infoApply.Rank', fallback: 'Chức vụ', width: '120px' },
  { field: 'positionName', key: 'ess.infoApply.title.dutyName', fallback: 'Chức danh', width: '130px' },
];

/** 'DD-MM-YYYY' -> 'DD/MM/YYYY' để hiển thị. */
export function displayDate(value: string | null | undefined): string {
  return (value ?? '').replace(/-/g, '/');
}

/** Nhãn kế hoạch trả lương: 'DD/MM/YYYY Phân loại lương'. */
export function scheduleLabel(s: PaScheduleOption): string {
  return `${displayDate(s.payDate)} ${s.salaryDistinName ?? ''}`.trim();
}

/** Ngày phát của 1 phân loại lương (bản gốc pa10xx_Linkage). Danh sách đã sắp PAY_DATE giảm dần. */
export function payDatesOf(schedules: PaScheduleOption[], salaryDistinNo: string | null): PaScheduleOption[] {
  if (!salaryDistinNo) return [];
  return schedules.filter((s) => String(s.salaryDistinNo) === String(salaryDistinNo));
}

/** So sánh dùng cho nzSortFn - số so theo giá trị, chuỗi theo localeCompare. */
export function compareBy<T>(field: keyof T): (a: T, b: T) => number {
  return (a, b) => {
    const x = a[field] as unknown;
    const y = b[field] as unknown;
    if (typeof x === 'number' || typeof y === 'number') return (Number(x) || 0) - (Number(y) || 0);
    return String(x ?? '').localeCompare(String(y ?? ''));
  };
}

/** Hiệu số 2 giá trị có thể null (bản gốc MONTH_NOW - MONTH_PRO). */
export function diff(now: number | null | undefined, pro: number | null | undefined): number {
  return (Number(now) || 0) - (Number(pro) || 0);
}

/** Tin nhắn lỗi từ response API (body {success:false, message}). */
export function apiError(err: unknown): string | null {
  const body = (err as { error?: { message?: string; error?: string } })?.error;
  return body?.message || body?.error || null;
}
