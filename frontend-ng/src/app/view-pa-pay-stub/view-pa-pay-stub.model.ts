import { AuthDeptNode, CodeItem } from '../change-user/change-user.model';

export type { AuthDeptNode, CodeItem };

/** Tương ứng với PaPayScheduleDto.java (danh sách kế hoạch trả lương, GET /pa/workManagement/api/paySchedule). */
export interface PaPayScheduleDto {
  payScheduleNo: string;
  payDate: string;
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

/** Tương ứng với PaPayStubDto.java (1 phiếu lương nhân viên, response của GET /pa/workManagement/api/payStub/load -
 *  bản quản trị/HR, khác /pa/salary/api/monthPersonInfo/payStub/load của trang ESS pa-month-person-info vì
 *  trả về danh sách nhiều nhân viên theo điều kiện lọc thay vì chỉ nhân viên đang đăng nhập). */
export interface PaPayStubDto {
  personId: string;
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

/** Tham số GET /pa/workManagement/api/payStub/load. */
export interface PaPayStubSearchParams {
  payScheduleNo: string;
  deptNos: string;
  empSearch: string;
  empOffice: string | null;
  lang: string;
}
