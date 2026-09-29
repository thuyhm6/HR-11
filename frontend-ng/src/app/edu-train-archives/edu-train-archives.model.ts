import { EduFile } from '../edu-common/edu-common.model';

/**
 * 1 dòng hồ sơ đào tạo - tương ứng EduTrainArchiveDto.java. Ngày DD/MM/YYYY; impleClassUnit '0' tháng / '1' ngày / '2' giờ.
 * history = dữ liệu đào tạo cũ trước khi chuyển hệ thống (EDU_TRAIN_BASIC_HISTORY).
 */
export interface EduTrainArchive {
  empId: string;
  localName: string | null;
  sexName: string | null;
  deptName: string | null;
  postGradeName: string | null;
  dateStarted: string | null;
  courseNameCode: string | null;
  periodTime: string | null;
  trainContent: string | null;
  impleClassHour: string | null;
  impleClassUnit: string | null;
  impleStartDate: string | null;
  impleEndDate: string | null;
  trainAddress: string | null;
  departManaCodeName: string | null;
  allCost: string | null;
  evaResult: string | null;
  basicNo: string | null;
  resultNo: string | null;
  history: boolean;
  files: EduFile[];
}

export interface EduTrainArchiveSearch {
  keyword: string;
  deptNo: string | null;
  courseName: string;
  startDate: string;
  endDate: string;
  trainContent: string;
}
