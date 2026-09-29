import { HisColumn, HisModeConfig, HrmInfoSearchMode } from './hrm-info-search.model';

/** Cột chung đầu bảng: Họ tên, Mã NV, Phòng ban, Chức cấp (giống thứ tự cột các trang JSP gốc). */
const BASE_COLUMNS: HisColumn[] = [
  { field: 'localName', labelKey: 'common.empName', fallback: 'Họ tên', width: '170px' },
  { field: 'empId', labelKey: 'common.empId', fallback: 'Mã nhân viên', width: '110px', align: 'center' },
  { field: 'deptName', labelKey: 'common.deptName', fallback: 'Phòng ban', width: '200px' },
  { field: 'postGradeName', labelKey: 'hrSearch.grade', fallback: 'Chức cấp', width: '130px' },
];

/**
 * Cấu hình ô tìm kiếm + cột bảng cho từng trang - bám theo 4 file JSP gốc ở Hanwha_HTSV:
 * hrm/empinfo/experienceSearch.jsp, retireSearch.jsp, bidSearch.jsp, gradeSearch.jsp.
 */
export const HIS_MODE_CONFIGS: Record<HrmInfoSearchMode, HisModeConfig> = {
  experience: {
    periodLabelKey: 'common.period',
    periodFallback: 'Thời gian',
    filters: ['period', 'companyName', 'postFamily', 'grade', 'mainBusiness', 'empType', 'empOffice'],
    columns: [
      ...BASE_COLUMNS,
      { field: 'expStartDate', labelKey: 'his.expStartDate', fallback: 'Ngày vào làm', width: '110px', align: 'center' },
      { field: 'expEndDate', labelKey: 'his.expEndDate', fallback: 'Ngày nghỉ làm', width: '110px', align: 'center' },
      { field: 'companyName', labelKey: 'his.companyName', fallback: 'Tên công ty', width: '220px' },
      { field: 'payYear', labelKey: 'his.payYear', fallback: 'Lương tháng', width: '120px', align: 'right' },
    ],
    exportFileName: 'tra_cuu_kinh_nghiem',
  },
  retire: {
    periodLabelKey: 'his.dateLeft',
    periodFallback: 'Ngày nghỉ việc',
    filters: ['period', 'postFamily', 'grade', 'mainBusiness', 'empType', 'empOffice'],
    columns: [
      ...BASE_COLUMNS,
      { field: 'dateStarted', labelKey: 'common.joinDate', fallback: 'Ngày vào làm', width: '110px', align: 'center' },
      { field: 'dateLeft', labelKey: 'his.dateLeft', fallback: 'Ngày nghỉ việc', width: '110px', align: 'center' },
      { field: 'leaveReasonName', labelKey: 'his.leaveReason', fallback: 'Phân loại nghỉ việc', width: '160px' },
      { field: 'cellphone', labelKey: 'his.cellphone', fallback: 'Số điện thoại', width: '120px' },
      { field: 'mainBusinessName', labelKey: 'hrSearch.mainBusiness', fallback: 'Nghiệp vụ chính', width: '180px' },
    ],
    exportFileName: 'tra_cuu_nghi_viec',
  },
  bid: {
    periodLabelKey: 'his.dateObtained',
    periodFallback: 'Ngày cấp',
    filters: ['period', 'qualName', 'qualLevel', 'postFamily', 'grade', 'mainBusiness', 'empType', 'empOffice'],
    columns: [
      ...BASE_COLUMNS,
      { field: 'qualName', labelKey: 'his.qualName', fallback: 'Chứng chỉ', width: '200px' },
      { field: 'dateObtained', labelKey: 'his.dateObtained', fallback: 'Ngày cấp', width: '110px', align: 'center' },
      { field: 'validityDate', labelKey: 'his.validityDate', fallback: 'Ngày hết hạn', width: '110px', align: 'center' },
      { field: 'qualLevel', labelKey: 'his.qualLevel', fallback: 'Cấp độ chứng chỉ', width: '130px' },
      { field: 'qualInstitute', labelKey: 'his.qualInstitute', fallback: 'Nơi cấp', width: '180px' },
    ],
    exportFileName: 'tra_cuu_chung_chi',
  },
  grade: {
    periodLabelKey: null,
    periodFallback: '',
    filters: ['postFamily', 'grade', 'empOffice'],
    columns: [
      ...BASE_COLUMNS,
      { field: 'positionName', labelKey: 'his.positionName', fallback: 'Chức trách', width: '150px' },
      { field: 'dateStarted', labelKey: 'common.joinDate', fallback: 'Ngày vào làm', width: '110px', align: 'center' },
      { field: 'promotionDay', labelKey: 'his.promotionDay', fallback: 'Ngày thăng chức', width: '120px', align: 'center' },
    ],
    exportFileName: 'tra_cuu_chuc_cap',
  },
};

/** Mã SY_CODE cha của các danh mục dùng trên trang (giống parentNo ở các JSP gốc). */
export const HIS_CODE_PARENTS = {
  postFamily: '14015812',
  /** Chức cấp: con trực tiếp của nhóm chức đã chọn; chưa chọn nhóm chức thì lấy toàn bộ dưới 400001
   *  (giống ViewExperienceBatchListComponent.loadPostGradeOptions). */
  gradeAll: '400001',
  mainBusiness: '400098',
  empType: '13864',
  empOffice: '15118',
  transCode: '14013956',
} as const;
