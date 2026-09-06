import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  EmployeeOption,
  HrRewardDto,
  RewardSavePayload,
  RewardSearchParams,
} from './recognition-info.model';

const API_BASE = '/hrm/empinfo/api/reward';

/**
 * Gọi lại nguyên các API JSON đã có sẵn ở HrEmpinfoController (không đổi backend) - xem giải thích ở
 * RecognitionInfoComponent. searchEmployees dùng chung endpoint sẵn có của toàn hệ thống (giống
 * WorkExperienceInfoService/AddressInfoService/FamilyInfoService/EducationInfoService).
 */
@Injectable({ providedIn: 'root' })
export class RecognitionInfoService {
  constructor(private readonly http: HttpClient) {}

  search(params: RewardSearchParams): Observable<HrRewardDto[]> {
    let httpParams = new HttpParams();
    if (params.empId) httpParams = httpParams.set('empId', params.empId);
    if (params.localName) httpParams = httpParams.set('localName', params.localName);
    if (params.rewardType) httpParams = httpParams.set('rewardType', params.rewardType);
    return this.http.get<HrRewardDto[]>(API_BASE, { params: httpParams, withCredentials: true });
  }

  save(payload: RewardSavePayload): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${API_BASE}/save`, payload, { withCredentials: true });
  }

  delete(rewardNo: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${API_BASE}/delete/${rewardNo}`, { withCredentials: true });
  }

  searchEmployees(keyword: string): Observable<EmployeeOption[]> {
    let params = new HttpParams();
    if (keyword) params = params.set('keyword', keyword);
    return this.http.get<EmployeeOption[]>('/hrm/empinfo/api/employee/search', { params, withCredentials: true });
  }
}
