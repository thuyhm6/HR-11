import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../hrm-info-search/hrm-info-search.model';
import { RecruitResumeCriteria, RecruitResumeItem } from './recruit-resume-list.model';

const API_BASE = '/hrm/recruitManage/api/resume';

/** API khái quát phát lệnh (HrRecruitResumeController). */
@Injectable({ providedIn: 'root' })
export class RecruitResumeListService {
  constructor(private readonly http: HttpClient) {}

  getList(criteria: RecruitResumeCriteria): Observable<ApiResponse<RecruitResumeItem[]>> {
    return this.http.post<ApiResponse<RecruitResumeItem[]>>(`${API_BASE}/list`, criteria, { withCredentials: true });
  }

  save(dto: RecruitResumeItem): Observable<ApiResponse<void>> {
    return this.http.post<ApiResponse<void>>(`${API_BASE}/save`, dto, { withCredentials: true });
  }

  delete(seq: string): Observable<ApiResponse<void>> {
    return this.http.post<ApiResponse<void>>(`${API_BASE}/delete`, null, {
      params: new HttpParams().set('seq', seq),
      withCredentials: true,
    });
  }
}
