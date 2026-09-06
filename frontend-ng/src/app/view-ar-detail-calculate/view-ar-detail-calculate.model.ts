/** Tương ứng với payload gửi lên POST /ar/attendanceMintenance/api/detailCalculate/run
 *  (ArDetailCalculateDto.java). */
export interface DetailCalculatePayload {
  caltype: 'EMP' | 'DEPT';
  fromDate: string;
  toDate: string;
  deptId: string;
  sonDeptFlag: 'YES' | 'NO';
  personId: string;
}

export interface DetailCalculateResult {
  success: boolean;
  message?: string;
  error?: string;
  personId?: string;
}
