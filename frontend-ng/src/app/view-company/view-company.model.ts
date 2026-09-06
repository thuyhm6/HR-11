/** Tương ứng với response GET /sys/api/company/list (HrCompanyDto.java - HrCompany + tên đa ngôn ngữ). */
export interface HrCompanyDto {
  cpnyId: string;
  cpnyNo: string | null;
  cpnyLocation: string | null;
  cpnyAddr: string | null;
  cpnyPostalcode: string | null;
  cpnyIntro: string | null;
  cpnyHistory: string | null;
  cpnyWebAddr: string | null;
  cpnyTelNo: string | null;
  cpnyFaxNo: string | null;
  operationId: string | null;
  ggsYn: string | null;
  activity: string | null;
  orderNo: number | null;
  nameVi: string | null;
  nameEn: string | null;
  nameZh: string | null;
  nameKo: string | null;
}

/** Payload gửi lên POST /sys/api/company/save - cpnyNo rỗng nghĩa là thêm mới (xem HrCompanyServiceImpl.saveCompany). */
export interface CompanySavePayload {
  cpnyId: string;
  cpnyNo: string | null;
  operationId: string | null;
  nameVi: string;
  nameEn: string | null;
  nameZh: string | null;
  nameKo: string | null;
  cpnyAddr: string | null;
  cpnyPostalcode: string | null;
  cpnyLocation: string | null;
  cpnyTelNo: string | null;
  cpnyFaxNo: string | null;
  cpnyWebAddr: string | null;
  cpnyIntro: string | null;
  cpnyHistory: string | null;
  orderNo: number | null;
  ggsYn: string;
  activity: string;
}

export interface CompanyActionResult {
  success: boolean;
  message: string;
}
