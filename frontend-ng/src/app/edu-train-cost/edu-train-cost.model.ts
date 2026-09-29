import { EduFile } from '../edu-common/edu-common.model';

/** Chi phí đào tạo - tương ứng EduTrainCostDto.java. Số tiền dạng chuỗi số (bind VARCHAR giống các trang khác). */
export interface EduTrainCost {
  costNo: string;
  basicNo: string | null;
  trainTypeCodeName: string | null;
  courseNameCode: string | null;
  periodTime: string | null;
  impleStartDate: string | null;
  impleEndDate: string | null;
  budget: string | null;
  allCost: string | null;
  avgCost: string | null;
  totalCount: number | null;
  teacherCost: string | null;
  materialCost: string | null;
  fieldCost: string | null;
  foodCost: string | null;
  stayCost: string | null;
  trafficCost: string | null;
  visaCost: string | null;
  otherCost: string | null;
  remark: string | null;
  files?: EduFile[];
}

export type CostField = 'teacherCost' | 'materialCost' | 'fieldCost' | 'foodCost' | 'stayCost' | 'trafficCost' | 'visaCost' | 'otherCost';

/** 8 khoản chi phí (bản gốc trainCostManagerInfo); 3 khoản đầu là chi phí trực tiếp. */
export const COST_FIELDS: { field: CostField; key: string; fallback: string; direct: boolean }[] = [
  { field: 'teacherCost', key: 'edu.trainCostMANAGER.JIANGSHIFEI.a', fallback: 'Thù lao giảng viên', direct: true },
  { field: 'materialCost', key: 'edu.trainCostMANAGER.JIAOCAIFEI.a', fallback: 'Tiền tài liệu', direct: true },
  { field: 'fieldCost', key: 'edu.trainCostMANAGER.CHANGDIFEI.a', fallback: 'Tiền thuê chỗ học', direct: true },
  { field: 'foodCost', key: 'edu.trainCostMANAGER.CANYINFEI.a', fallback: 'Tiền ăn uống', direct: false },
  { field: 'stayCost', key: 'edu.trainCostMANAGER.ZHUSUFEI.a', fallback: 'Tiền ở', direct: false },
  { field: 'trafficCost', key: 'edu.trainAgreement.JIAOTONGFEI.a', fallback: 'Phụ cấp đi lại', direct: false },
  { field: 'visaCost', key: 'edu.trainCostMANAGER.QIANZHENGJIXIANGGUANFEIYONG.a', fallback: 'Visa và phí liên quan', direct: false },
  { field: 'otherCost', key: 'edu.trainCostMANAGER.QITAFEIYONG.a', fallback: 'Chi phí khác', direct: false },
];
