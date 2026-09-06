/** Tương ứng với PaPayScheduleDto.java (danh sách kế hoạch trả lương đã mở). */
export interface PaPayScheduleDto {
  payScheduleNo: string;
  payDate: string;
  salaryDistinNo: string;
  salaryDistinName: string;
  empOpinion: string;
}

/** Tương ứng với PaPayStubItemDto.java (1 dòng hạng mục chấm công/lương/khoản trừ/tiêu chuẩn). */
export interface PaPayStubItemDto {
  itemNo: string;
  itemName: string;
  itemValue: number;
}

/** Tương ứng với PaPayStubOtherDto.java (hạng mục khác). */
export interface PaPayStubOtherDto {
  returnValue: number;
  remark: string;
}

/** Tương ứng với PaPayStubDto.java (1 phiếu lương cá nhân, response của /payStub/load). */
export interface PaPayStubDto {
  hrEndDate: string;
  empId: string;
  localName: string;
  deptName: string;
  empTypeName: string;
  postFamily: string;
  positionName: string;
  postGrade: string;
  empOfficeName: string;
  dependentCount: number;
  socialInsuranceNo: string;
  bankName: string;
  bankAccountNo: string;
  accountNo: string;
  attendanceItems: PaPayStubItemDto[];
  salaryItems: PaPayStubItemDto[];
  deductionItems: PaPayStubItemDto[];
  standardItems: PaPayStubItemDto[];
  otherItems: PaPayStubOtherDto[];
}
