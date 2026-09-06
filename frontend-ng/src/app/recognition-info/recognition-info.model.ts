/** Tương ứng với HrReward.java (danh sách chính, đầy đủ field cho form thêm/sửa) - đã có đủ field cần
 *  cho form sửa, không cần gọi thêm GET /api/reward/{rewardNo} như bản gốc. Không có field nào được
 *  BE resolve tên qua GET_GLOBAL_NAME (xem HrRewardMapper.xml) nên giữ nguyên text input như bản gốc,
 *  không đổi sang nz-select. */
export interface HrRewardDto {
  rewardNo: number;
  personId: string;
  rewardType: string;
  rewardDate: string | null;
  rewardCnpy: string;
  reward: string;
  rewardTypeCode: string;
  rewardPayDate: string | null;
  personnelCardInquiry: string;
  payAppearIsnot: string;
  lineId: string;
  otherType: string;
  remarks: string;
  empId: string;
  localName: string;
  deptName: string;
}

/** Payload gửi lên POST /api/reward/save - rewardNo null nghĩa là thêm mới (xem
 *  HrEmpinfoController.saveReward). Mapper update() có cập nhật PERSON_ID (xem HrRewardMapper.xml)
 *  nên form cho đổi nhân viên cả khi sửa. */
export interface RewardSavePayload {
  rewardNo: number | null;
  personId: string;
  rewardType: string;
  rewardDate: string | null;
  rewardCnpy: string;
  reward: string;
  rewardTypeCode: string;
  rewardPayDate: string | null;
  personnelCardInquiry: string;
  payAppearIsnot: string;
  lineId: string;
  otherType: string;
  remarks: string;
}

export interface RewardSearchParams {
  empId: string;
  localName: string;
  rewardType: string;
}

/** Tương ứng với response GET /hrm/empinfo/api/employee/search (EmployeeSearchResponse.java). */
export interface EmployeeOption {
  personId: string;
  empId: string;
  localName: string;
  deptNo: string;
  deptName: string;
}
