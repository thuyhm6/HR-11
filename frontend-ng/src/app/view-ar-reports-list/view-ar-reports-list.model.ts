/** Tương ứng ArReportItemDto.java - 1 báo cáo trong REPORT_CENTER. */
export interface ArReportItemDto {
  reportTypeNo: string;
  typeName: string;
  reportName: string | null;
  urlJsp: string | null;
  orderNo: number | null;
}

/** Nhóm báo cáo theo loại (REPORT_TYPE_NO) để hiển thị trên menu bên trái. */
export interface ArReportGroup {
  reportTypeNo: string;
  typeName: string;
  reports: ArReportItemDto[];
}
