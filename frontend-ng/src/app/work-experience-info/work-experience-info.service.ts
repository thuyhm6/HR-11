import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  EmployeeOption,
  HrWorkExperienceDto,
  WorkExperienceSavePayload,
  WorkExperienceSearchParams,
} from './work-experience-info.model';

const API_BASE = '/hrm/empinfo/api/work-experience';

/**
 * Gọi lại nguyên các API JSON đã có sẵn ở HrEmpinfoController (không đổi backend) - xem giải thích ở
 * WorkExperienceInfoComponent. searchEmployees dùng chung endpoint tìm nhân viên mà OtApplyBatchInfo/
 * ViewTempEmpInfoList đang dùng để thay cho EmployeeSearchModal jQuery toàn cục.
 */
@Injectable({ providedIn: 'root' })
export class WorkExperienceInfoService {
  constructor(private readonly http: HttpClient) {}

  search(params: WorkExperienceSearchParams): Observable<HrWorkExperienceDto[]> {
    let httpParams = new HttpParams();
    if (params.empId) httpParams = httpParams.set('empId', params.empId);
    if (params.localName) httpParams = httpParams.set('localName', params.localName);
    if (params.companyName) httpParams = httpParams.set('companyName', params.companyName);
    return this.http.get<HrWorkExperienceDto[]>(API_BASE, { params: httpParams, withCredentials: true });
  }

  save(payload: WorkExperienceSavePayload): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${API_BASE}/save`, payload, { withCredentials: true });
  }

  delete(workExpNo: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${API_BASE}/delete/${workExpNo}`, { withCredentials: true });
  }

  searchEmployees(keyword: string): Observable<EmployeeOption[]> {
    let params = new HttpParams();
    if (keyword) params = params.set('keyword', keyword);
    return this.http.get<EmployeeOption[]>('/hrm/empinfo/api/employee/search', { params, withCredentials: true });
  }
}
