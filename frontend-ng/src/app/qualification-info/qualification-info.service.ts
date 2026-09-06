import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  CodeItem,
  EducationApplyPayload,
  EssBasicInfoDto,
  HrEducation,
  HrQualification,
  HrReward,
  QualificationApplyPayload,
} from './qualification-info.model';

const API_BASE = '/ess/empinfo/api/qualInfo';

/**
 * Gọi lại nguyên các API JSON đã có sẵn ở EssEmpInfoController (không đổi backend) - bản Angular của
 * ess/empinfo/viewQualificationInfo.html (Thymeleaf + jQuery). getBasicInfo dùng chung endpoint
 * /api/personalInfo/myInfo mà fragments/essEmpInfoCard.html gốc gọi qua loadEssEmpInfoCard().
 * saveEducationApply/saveQualificationApply nhận form fields (không phải JSON) kèm file đính kèm
 * multipart nên build bằng FormData - đúng như ajax jQuery bản gốc.
 */
@Injectable({ providedIn: 'root' })
export class QualificationInfoService {
  constructor(private readonly http: HttpClient) {}

  getBasicInfo(): Observable<EssBasicInfoDto> {
    return this.http.get<EssBasicInfoDto>('/ess/empinfo/api/personalInfo/myInfo', { withCredentials: true });
  }

  getEducation(): Observable<HrEducation[]> {
    return this.http.get<HrEducation[]>(`${API_BASE}/myEducation`, { withCredentials: true });
  }

  getQualification(): Observable<HrQualification[]> {
    return this.http.get<HrQualification[]>(`${API_BASE}/myQualification`, { withCredentials: true });
  }

  getReward(): Observable<HrReward[]> {
    return this.http.get<HrReward[]>(`${API_BASE}/myReward`, { withCredentials: true });
  }

  getCodeList(parentCodeNo: string): Observable<CodeItem[]> {
    return this.http.get<CodeItem[]>('/sys/api/getCode/list', {
      params: new HttpParams().set('parentCodeNo', parentCodeNo),
      withCredentials: true,
    });
  }

  saveEducationApply(payload: EducationApplyPayload, files: File[]): Observable<{ applyNo: string }> {
    return this.http.post<{ applyNo: string }>(`${API_BASE}/saveEducationApply`, this.toFormData(payload, files), {
      withCredentials: true,
    });
  }

  saveQualificationApply(payload: QualificationApplyPayload, files: File[]): Observable<{ applyNo: string }> {
    return this.http.post<{ applyNo: string }>(`${API_BASE}/saveQualificationApply`, this.toFormData(payload, files), {
      withCredentials: true,
    });
  }

  /** Không set Content-Type thủ công - trình duyệt tự thêm boundary đúng cho multipart/form-data. */
  private toFormData<T extends object>(payload: T, files: File[]): FormData {
    const fd = new FormData();
    Object.entries(payload).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') fd.append(key, String(value));
    });
    files.forEach((file) => fd.append('attachFiles', file));
    return fd;
  }
}
