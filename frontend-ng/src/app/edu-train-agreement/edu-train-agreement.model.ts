import { EduFile } from '../edu-common/edu-common.model';

/** Tương ứng với EduTrainAgreementDto.java (bảng EDU_TRAIN_AGREEMENT). Ngày DD/MM/YYYY, phí dạng chuỗi số. */
export interface EduTrainAgreement {
  agreeNo: string | null;
  agreeId: string | null;
  agreeName: string;
  personId: string | null;
  empId: string | null;
  localName: string | null;
  deptName: string | null;
  conStartDate: string | null;
  conEndDate: string | null;
  studyStartDate: string | null;
  studyEndDate: string | null;
  studyDay: string | null;
  serviceYear: string | null;
  serStartDate: string | null;
  serEndDate: string | null;
  exchangeRate: string | null;
  hqFree: string | null;
  cgfyFree: string | null;
  jpFree: string | null;
  zfbzFree: string | null;
  cgbzFree: string | null;
  cgbzFreeFact: string | null;
  sybxFree: string | null;
  yxPay: string | null;
  jtFree: string | null;
  txFree: string | null;
  totalFee: string | null;
  factPay: string | null;
  agreeStartDate: string | null;
  agreeEndDate: string | null;
  leftDate: string | null;
  remark: string | null;
  files?: EduFile[];
}

export interface EduTrainAgreementSearch {
  deptNo: string | null;
  keyword: string;
  conStartDate: string;
  conEndDate: string;
}

/** 10 khoản phí cộng dồn ra "Tiền thanh toán" (bản gốc weiyuejinMethod()). */
export const AGREEMENT_FEE_FIELDS = [
  { field: 'hqFree', key: 'edu.trainAgreement.HUQIANFEI.a', fallback: 'Phí bảo vệ' },
  { field: 'cgfyFree', key: 'edu.trainAgreement.CHUGUOFANGYIFEI.a', fallback: 'Phí thuốc phòng dịch' },
  { field: 'jpFree', key: 'edu.trainAgreement.JIPIAOFEI.a', fallback: 'Phí máy bay' },
  { field: 'zfbzFree', key: 'edu.trainAgreement.ZHUFANGBUZHU.a', fallback: 'Trợ cấp nơi ở' },
  { field: 'cgbzFree', key: 'edu.trainAgreement.CHUGUOBUZHU.a', fallback: 'Trợ cấp công tác' },
  { field: 'cgbzFreeFact', key: 'edu.trainAgreement.CHUGUOBUZHUSHIJI.a', fallback: 'Trợ cấp công tác thực tế' },
  { field: 'sybxFree', key: 'edu.trainAgreement.SHANGYEBAOXIANFEI.a', fallback: 'Phí BH thương mại' },
  { field: 'yxPay', key: 'edu.trainAgreement.YANXIUGONGZI.a', fallback: 'Lương đào tạo' },
  { field: 'jtFree', key: 'edu.trainAgreement.JIAOTONGFEI.a', fallback: 'Phụ cấp đi lại' },
  { field: 'txFree', key: 'edu.trainAgreement.TONGXINFEI.a', fallback: 'Trợ cấp điện thoại' },
] as const;

export type AgreementFeeField = typeof AGREEMENT_FEE_FIELDS[number]['field'];

/**
 * Cột file Excel import/export - giữ nguyên thứ tự + tiêu đề của file mẫu bản gốc (getTrainAgreeList / importTrainAgreement)
 * để file cũ vẫn import được. Cột "Department" chỉ để xem, không import.
 */
export const AGREEMENT_EXCEL_COLUMNS: { header: string; field: keyof EduTrainAgreement | null; date?: boolean; sample: string }[] = [
  { header: 'Contract name (not null)', field: 'agreeName', sample: 'Training agreement XXX' },
  { header: 'Employee numbere (not null)', field: 'empId', sample: '20000013' },
  { header: 'Employee name(not null)', field: 'localName', sample: 'Name' },
  { header: 'Department', field: 'deptName', sample: 'HR Part' },
  { header: 'Training starting date', field: 'studyStartDate', date: true, sample: '01/01/2018' },
  { header: 'Training finishing date', field: 'studyEndDate', date: true, sample: '30/01/2018' },
  { header: 'Training days', field: 'studyDay', sample: '90' },
  { header: 'Working days (year)', field: 'serviceYear', sample: '2' },
  { header: 'Contract starting date', field: 'conStartDate', date: true, sample: '01/01/2018' },
  { header: 'Contract finishing date', field: 'conEndDate', date: true, sample: '30/01/2018' },
  { header: 'Working starting date', field: 'serStartDate', date: true, sample: '01/01/2018' },
  { header: 'Working finishing date', field: 'serEndDate', date: true, sample: '30/01/2018' },
  { header: 'Exchange rate of the month', field: 'exchangeRate', sample: '12' },
  { header: 'Passport and visa fee', field: 'hqFree', sample: '100' },
  { header: 'Vaccination fee', field: 'cgfyFree', sample: '100' },
  { header: 'Air ticket fee', field: 'jpFree', sample: '100' },
  { header: 'Housing benefits', field: 'zfbzFree', sample: '100' },
  { header: 'Going abroad benefits', field: 'cgbzFree', sample: '100' },
  { header: 'Going abroad benefits(actual)', field: 'cgbzFreeFact', sample: '100' },
  { header: 'Commercial insurance', field: 'sybxFree', sample: '100' },
  { header: 'Salary given to training people', field: 'yxPay', sample: '100' },
  { header: 'Transportation fee', field: 'jtFree', sample: '100' },
  { header: 'Telecommunication fee', field: 'txFree', sample: '100' },
  { header: 'Total', field: 'totalFee', sample: '1000' },
  { header: 'Contract sign date', field: 'agreeStartDate', date: true, sample: '01/01/2018' },
  { header: 'Contract release date', field: 'agreeEndDate', date: true, sample: '30/01/2018' },
  { header: 'Resignation date(predicted)', field: 'leftDate', date: true, sample: '01/01/2019' },
  { header: 'Actual amount paid', field: 'factPay', sample: '60' },
  { header: 'Remark', field: 'remark', sample: 'Remark' },
];
