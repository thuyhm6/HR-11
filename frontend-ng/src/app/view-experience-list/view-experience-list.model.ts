/** Tương ứng với HrExperienceListDto.java - phần điều kiện tìm kiếm (ngày dạng dd/MM/yyyy). */
export interface ExperienceListCriteria {
  keyword?: string;
  startDate?: string;
  endDate?: string;
  transCodes?: string[];
  transReasons?: string[];
  deptNo?: string | null;
  includeSubDept?: boolean;
  postFamilies?: string[];
  empTypeCodes?: string[];
  empOffices?: string[];
  startDateJoin?: string;
  endDateJoin?: string;
}

/** Tương ứng với HrExperienceListDto.java - phần dữ liệu 1 dòng kết quả. */
export interface ExperienceListItem {
  personId?: string;
  empId?: string;
  localName?: string;
  orderDate?: string;
  transCodeName?: string;
  transResourceName?: string;
  deptName?: string;
  empTypeName?: string;
  postGradeName?: string;
  postFamilyName?: string;
  mainBusinessName?: string;
  positionName?: string;
  empOfficeName?: string;
  dateStarted?: string;
  remark?: string;
}
