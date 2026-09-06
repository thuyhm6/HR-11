/** Tương ứng với ManageEvsResultEmpDto.java (danh sách kết quả đánh giá nhân sự theo phòng ban). */
export interface ManageEvsResultEmpDto {
  empId: string;
  localName: string;
  deptNo: string;
  deptName: string;
  orderNo: string;
  dateStarted: string;
  postFamily: string;
  empTypeCode: string;
  empOffice: string;
  evsYear: string;
  evsMonth1: string;
  evsMonth2: string;
  evsMonth3: string;
  evsMonth4: string;
  evsMonth5: string;
  evsMonth6: string;
  evsMonth7: string;
  evsMonth8: string;
  evsMonth9: string;
  evsMonth10: string;
  evsMonth11: string;
  evsMonth12: string;
  /** Kết quả đánh giá năng lực (ability) - không phải tháng 13, giữ tên theo DTO gốc. */
  evsMonth13: string;
}

export interface ManageEvsResultEmpSearchParams {
  keyword: string;
  deptNos: string;
  fromDate: string;
  toDate: string;
  year: string;
  postFamily: string;
  empTypeCode: string;
  empOffice: string;
}

/** Tương ứng với response GET /sys/api/getCode/list?parentCodeNo=... */
export interface CodeItem {
  codeNo: string;
  codeName: string;
  description: string;
  codeId: string;
}

/** Tương ứng với response GET /ar/attendanceSettings/api/arSupervisor/authorized-departments (danh sách phẳng). */
export interface AuthDeptNode {
  id: string;
  text: string;
  parent: string;
}
