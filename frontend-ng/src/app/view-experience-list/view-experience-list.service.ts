import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../hrm-info-search/hrm-info-search.model';
import { ExperienceListCriteria, ExperienceListItem } from './view-experience-list.model';

/** API tra cứu phát lệnh (HrRecruitResumeController). Danh mục SY_CODE + cây phòng ban dùng lại
 *  HrmInfoSearchService (cùng 2 endpoint dùng chung toàn hệ thống). */
@Injectable({ providedIn: 'root' })
export class ViewExperienceListService {
  constructor(private readonly http: HttpClient) {}

  getList(criteria: ExperienceListCriteria): Observable<ApiResponse<ExperienceListItem[]>> {
    return this.http.post<ApiResponse<ExperienceListItem[]>>('/hrm/recruitManage/api/experience/list', criteria, {
      withCredentials: true,
    });
  }
}
