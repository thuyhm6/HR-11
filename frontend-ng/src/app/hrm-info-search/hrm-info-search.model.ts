/** Tương ứng với ApiResponse.java (com.ait.sy.sys.dto). */
export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
  errorCode?: string;
  errorMessage?: string;
}

/** Tương ứng với HrInfoSearchCriteriaDto.java - ngày tháng dạng dd/MM/yyyy. */
export interface HrInfoSearchCriteria {
  keyword?: string;
  deptNo?: string | null;
  includeSubDept?: boolean;
  joinDateFrom?: string;
  joinDateTo?: string;
  postFamilies?: string[];
  gradeNos?: string[];
  mainBusinesses?: string[];
  empTypeCodes?: string[];
  empOffices?: string[];
  periodFrom?: string;
  periodTo?: string;
  companyName?: string;
  qualName?: string;
  qualLevel?: string;
}

/** Tương ứng với HrInfoSearchResultDto.java. */
export interface HrInfoSearchResult {
  personId?: string;
  empId?: string;
  localName?: string;
  deptName?: string;
  postGradeName?: string;
  dateStarted?: string;
  expStartDate?: string;
  expEndDate?: string;
  companyName?: string;
  position?: string;
  payYear?: string;
  dateLeft?: string;
  cellphone?: string;
  mainBusinessName?: string;
  leaveReasonName?: string;
  qualName?: string;
  dateObtained?: string;
  validityDate?: string;
  qualLevel?: string;
  qualInstitute?: string;
  positionName?: string;
  promotionDay?: string;
}

/** Tương ứng với response GET /sys/api/getCode/list?parentCodeNo=... */
export interface CodeItem {
  codeNo: string;
  codeName: string;
}

/** 4 trang tra cứu dùng chung component HrmInfoSearchComponent (truyền qua route data.mode). */
export type HrmInfoSearchMode = 'experience' | 'retire' | 'bid' | 'grade';

/** Các ô tìm kiếm có thể bật/tắt theo từng trang. */
export type HisFilterField =
  | 'period' | 'companyName' | 'qualName' | 'qualLevel'
  | 'postFamily' | 'grade' | 'mainBusiness' | 'empType' | 'empOffice';

export interface HisColumn {
  field: keyof HrInfoSearchResult;
  labelKey: string;
  fallback: string;
  width: string;
  align?: 'center' | 'right';
}

export interface HisModeConfig {
  /** Nhãn i18n cho ô khoảng thời gian riêng của trang (null = trang không có ô này). */
  periodLabelKey: string | null;
  periodFallback: string;
  filters: HisFilterField[];
  columns: HisColumn[];
  exportFileName: string;
}
