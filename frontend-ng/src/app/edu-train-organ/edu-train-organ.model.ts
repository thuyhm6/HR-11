import { EduFile } from '../edu-common/edu-common.model';

/** Tương ứng với EduTrainOrganDto.java (bảng EDU_TRAIN_ORGAN). organNo null = thêm mới. */
export interface EduTrainOrgan {
  organNo: string | null;
  organName: string;
  linkman: string | null;
  address: string | null;
  officePhone: string | null;
  cellphone: string | null;
  urlNet: string | null;
  mainField: string | null;
  workTogether: string | null;
  organAbstract: string | null;
  files?: EduFile[];
}
