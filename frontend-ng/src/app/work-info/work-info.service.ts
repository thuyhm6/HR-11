import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EssBasicInfoDto, HrWorkExperience, InsideExperienceDto, WorkExperienceApplyPayload } from './work-info.model';

const API_BASE = '/ess/empinfo/api/workInfo';

/**
 * Gọi lại nguyên các API JSON đã có sẵn ở EssEmpInfoController (không đổi backend) - bản Angular của
 * ess/empinfo/viewEssPersonalInfo.html (Thymeleaf + jQuery). getBasicInfo dùng chung endpoint
 * /api/personalInfo/myInfo mà fragments/essEmpInfoCard.html gốc gọi qua loadEssEmpInfoCard().
 * saveWorkExperienceApply nhận form fields (không phải JSON) kèm file đính kèm multipart nên build
 * bằng FormData - đúng như ajax jQuery bản gốc (backend bind qua @RequestParam từng field).
 */
@Injectable({ providedIn: 'root' })
export class WorkInfoService {
  constructor(private readonly http: HttpClient) {}

  getBasicInfo(): Observable<EssBasicInfoDto> {
    return this.http.get<EssBasicInfoDto>('/ess/empinfo/api/personalInfo/myInfo', { withCredentials: true });
  }

  getInsideExperience(): Observable<InsideExperienceDto[]> {
    return this.http.get<InsideExperienceDto[]>(`${API_BASE}/myInsideExperience`, { withCredentials: true });
  }

  getWorkExperience(): Observable<HrWorkExperience[]> {
    return this.http.get<HrWorkExperience[]>(`${API_BASE}/myWorkExperience`, { withCredentials: true });
  }

  saveWorkExperienceApply(payload: WorkExperienceApplyPayload, files: File[]): Observable<{ applyNo: string }> {
    const fd = new FormData();
    Object.entries(payload).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') fd.append(key, String(value));
    });
    files.forEach((file) => fd.append('attachFiles', file));
    return this.http.post<{ applyNo: string }>(`${API_BASE}/saveWorkExperienceApply`, fd, { withCredentials: true });
  }
}
