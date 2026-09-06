/** Tương ứng với OrgCostCenter.java (com.ait.org.orgManage.model) - 1 trung tâm chi phí. startDate/
 *  endDate là VARCHAR2(20) tự do (không phải cột DATE thật) nên giữ nguyên dạng chuỗi nhập tay như bản
 *  gốc, không ép qua nz-date-picker để tránh đổi định dạng dữ liệu đã lưu trong DB. */
export interface OrgCostCenterDto {
  seq: string | null;
  codeNo: string;
  codeName: string | null;
  codeEngName: string | null;
  remark: string | null;
  startDate: string | null;
  endDate: string | null;
  country: string | null;
  address: string | null;
  activity: string | null;
  orderNo: number | null;
  createdBy: string | null;
  createDate: string | null;
  updatedBy: string | null;
  updateDate: string | null;
  businessScope: string | null;
  profitCenter: string | null;
  codeKoreanName: string | null;
  codeVietnameseName: string | null;
}

/** Payload gửi lên POST /org/api/costCenter/list - chỉ codeNo/codeName dùng để lọc (đúng field
 *  OrgCostCenterController#getList đọc), rỗng nghĩa là không lọc. */
export interface OrgCostCenterSearchPayload {
  codeNo: string;
  codeName: string;
}
