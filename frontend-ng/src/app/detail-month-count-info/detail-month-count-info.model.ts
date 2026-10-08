import { AuthDeptNode, PaPayScheduleDto } from '../view-pa-pay-stub/view-pa-pay-stub.model';

export type { AuthDeptNode, PaPayScheduleDto };

/** Tương ứng PaSalaryDetailDto.java - 1 dòng danh sách bên trái của Lương tháng / Lương năm chi tiết. */
export interface PaSalaryDetailDto {
  payScheduleNo: string;
  personId: string;
  empId: string;
  localName: string;
  deptNo: string;
  deptName: string;
  postFamilyName: string;
  postGradeName: string;
  positionName: string;
  /** DD-MM-YYYY - chỉ có ở lương năm, gửi lại cho API detailItems. */
  payDate: string | null;
  /** DD/MM/YYYY - chỉ có ở lương năm, để hiển thị. */
  payDateFormat: string | null;
  incomeBeforeTax: number | null;
  withholdTotal: number | null;
  realWages: number | null;
}

/** Tương ứng PaSalaryDetailItemDto.java - 1 hạng mục chi tiết lương bên phải. */
export interface PaSalaryDetailItemDto {
  personId: string;
  itemType: number;
  itemNo: string;
  itemName: string;
  itemValue: number | null;
  itemYearValue: number | null;
}

/** Tham số GET /pa/workManagement/api/salaryResult/detailItems. */
export interface PaSalaryDetailItemsQuery {
  from: 'month' | 'year';
  personId: string;
  payScheduleNo?: string;
  /** DD-MM-YYYY. */
  payDate?: string;
  /** MM/YYYY. */
  startMonth?: string;
  /** MM/YYYY. */
  endMonth?: string;
}

/** Cột của danh sách bên trái (giống nhau ở lương tháng / năm, lương năm thêm cột Ngày phát ở đầu). */
export interface PaSalaryDetailColumn {
  field: keyof PaSalaryDetailDto;
  key: string;
  fallback: string;
  number?: boolean;
  width: string;
}

export const SALARY_DETAIL_COLUMNS: PaSalaryDetailColumn[] = [
  { field: 'empId', key: 'ess.infoApply.EMP_ID', fallback: 'Mã nhân viên', width: '110px' },
  { field: 'localName', key: 'ess.infoApply.NAME', fallback: 'Họ tên', width: '170px' },
  { field: 'deptName', key: 'ess.infoApply.DEPT', fallback: 'Phòng ban', width: '170px' },
  { field: 'postFamilyName', key: 'ess.empInfo.zhiqun', fallback: 'Nhóm nhân viên', width: '130px' },
  { field: 'postGradeName', key: 'ess.infoApply.Rank', fallback: 'Chức vụ', width: '120px' },
  { field: 'positionName', key: 'ess.trans.title.dutyName', fallback: 'Chức danh', width: '130px' },
  { field: 'incomeBeforeTax', key: 'pa.viewResultConfirmSonList.SHUIQIANGONGZI.b', fallback: 'Lương trước thuế', number: true, width: '130px' },
  { field: 'withholdTotal', key: 'pa.detailmonthCountInfoLeft.DAIKOUHEJI.b', fallback: 'Tổng khoản trừ', number: true, width: '130px' },
  { field: 'realWages', key: 'pa.viewResultConfirmSonList.SHIDEGONGZI.b', fallback: 'Lương thực lĩnh', number: true, width: '130px' },
];

export const PAY_DATE_COLUMN: PaSalaryDetailColumn = {
  field: 'payDateFormat', key: 'display.pa.ecc.paydate', fallback: 'Ngày phát', width: '110px',
};

/** So sánh dùng cho nzSortFn - số so theo giá trị, chuỗi theo localeCompare. */
export function compareSalaryDetail(field: keyof PaSalaryDetailDto): (a: PaSalaryDetailDto, b: PaSalaryDetailDto) => number {
  return (a, b) => {
    const x = a[field];
    const y = b[field];
    if (typeof x === 'number' || typeof y === 'number') return (Number(x) || 0) - (Number(y) || 0);
    return String(x ?? '').localeCompare(String(y ?? ''));
  };
}
