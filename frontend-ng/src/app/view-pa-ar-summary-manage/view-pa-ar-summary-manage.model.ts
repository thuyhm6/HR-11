/** Option dropdown - tương ứng PaArSummaryOptionDto.java (kế hoạch trả lương / hạng mục tổng hợp chấm công). */
export interface PaArSummaryOption {
  code: string;
  name: string;
  /** Chỉ có ở kế hoạch trả lương: 1 = lương đã chốt (không cho lưu / tính tổng hợp). */
  paConfirmFlag: number | null;
}

/** 1 dòng AR_SUMMARY_MANAGE_HTSV - tương ứng PaArSummaryManageDto.java. */
export interface PaArSummaryManageDto {
  arSummaryManageNo: number;
  empId: string | null;
  localName: string | null;
  deptName: string | null;
  postGrade: string | null;
  dateStarted: string | null;
  itemName: string | null;
  arStartDate: string | null;
  calValue: number | null;
  finalValue: number | null;
  remark: string | null;
  updatedBy: string | null;
  updateDate: string | null;
}

/** Dòng hiển thị trên bảng - giữ giá trị ngoại lệ / ghi chú người dùng đang sửa. */
export interface PaArSummaryManageRow extends PaArSummaryManageDto {
  /** Số thứ tự theo kết quả tra cứu (No. ở bản gốc). */
  no: number;
  editFinalValue: number | null;
  editRemark: string;
}

/** Tham số GET /pa/workManagement/api/arSummaryManage/list. */
export interface PaArSummaryManageSearchParams {
  payScheduleNo: string;
  key: string;
  deptNo: string;
  itemNos: string[];
  isSpecialFlag: string;
}

/** Payload POST /pa/workManagement/api/arSummaryManage/save - tương ứng PaArSummaryManageSaveDto.java. */
export interface PaArSummaryManageSavePayload {
  payScheduleNo: string;
  items: { arSummaryManageNo: number; finalValue: number | null; remark: string | null }[];
}

export interface PaArSummaryManageActionResponse {
  success: boolean;
  count?: number;
  message?: string;
  error?: string;
}
