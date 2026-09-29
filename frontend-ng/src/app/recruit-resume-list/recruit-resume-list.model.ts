/** Tương ứng với HrRecruitResumeDto.java (bảng HR_RECRUIT_REGISTER_INFO) - ngày dạng dd/MM/yyyy. */
export interface RecruitResumeItem {
  seq?: string | null;
  registerType?: string | null;
  registerTypeName?: string | null;
  /** Ngày hiệu lực. */
  registerDate?: string | null;
  /** Ngày đăng ký (DB tự sinh). */
  registerInfo?: string | null;
  /** Mã xử lý tự động (DB tự sinh). */
  registerCode?: string | null;
  /** 0 = Đang xử lý, 1 = Đã hoàn tất. */
  activity?: string | null;
  remark?: string | null;
}

export interface RecruitResumeCriteria {
  searchStartDate?: string;
  searchEndDate?: string;
  searchRegisterType?: string | null;
  searchActivity?: string | null;
}

export const RRL_ACTIVITY_IN_PROGRESS = '0';
export const RRL_ACTIVITY_COMPLETED = '1';
