/** File đính kèm (ESS_FILE) - tương ứng EssFileDto.java. */
export interface EduFile {
  fileNo: string;
  applyNo: string;
  applyType: string;
  fileUrl: string;
  fileName: string;
}

/** Loại file đính kèm của module Đào tạo (EduFileService.TYPE_*). */
export type EduFileApplyType = 'eduTrainOrgan' | 'eduTrainAgreement' | 'eduPlanManager' | 'eduTrainResult' | 'eduCostManager';

/** Cặp (mã nhân viên, họ tên) - tương ứng EduPersonDto.java. */
export interface EduPerson {
  empId: string;
  name: string;
}

/** Nhân viên - tương ứng EduEmployeeDto.java. */
export interface EduEmployee {
  personId: string;
  empId: string;
  localName: string;
  deptNo: string | null;
  deptName: string | null;
  postGradeName: string | null;
  positionName: string | null;
}

/** Kết quả chung {success, message} của các API module Đào tạo (message đã dịch theo ngôn ngữ session). */
export interface EduActionResult {
  success: boolean;
  message: string;
  /** Mã bản ghi vừa lưu (thêm mới) - dùng để upload file đính kèm / import lịch đào tạo. */
  id?: string;
  /** Lỗi theo dòng khi import Excel. */
  errors?: string[];
}
