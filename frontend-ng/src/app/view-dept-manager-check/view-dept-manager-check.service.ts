import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrgResumeInfoDto } from '../view-resume-list/view-resume-list.model';
import { DeptManagerCheckRow, EmployeeOption, UpdateManagerPayload } from './view-dept-manager-check.model';

const API_BASE = '/org/api';

/** Gọi lại nguyên các API JSON đã có sẵn ở OrgComposeController (xem viewDeptManagerCheck.html bản
 *  Thymeleaf gốc) - không đổi backend. Dropdown phiên bản dùng chung API/DTO với
 *  ViewResumeProcessService/ViewComposeOrgService (OrgResumeInfoController#getResumeDropdown). Tìm
 *  nhân viên dùng chung API tìm nhân viên toàn hệ thống (/hrm/empinfo/api/employee/search) thay cho
 *  EmployeeSearchModal (jQuery) bản gốc. */
@Injectable({ providedIn: 'root' })
export class ViewDeptManagerCheckService {
  constructor(private readonly http: HttpClient) {}

  getResumeDropdown(): Observable<OrgResumeInfoDto[]> {
    return this.http.get<OrgResumeInfoDto[]>(`${API_BASE}/resume/dropdown`, { withCredentials: true });
  }

  getManagerCheckList(resumeNo: string): Observable<DeptManagerCheckRow[]> {
    return this.http.get<DeptManagerCheckRow[]>(`${API_BASE}/compose/manager-check`, {
      params: new HttpParams().set('resumeNo', resumeNo),
      withCredentials: true,
    });
  }

  updateManager(payload: UpdateManagerPayload): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${API_BASE}/compose/updateManager`, payload, {
      withCredentials: true,
    });
  }

  searchEmployees(keyword: string): Observable<EmployeeOption[]> {
    let params = new HttpParams();
    if (keyword) params = params.set('keyword', keyword);
    return this.http.get<EmployeeOption[]>('/hrm/empinfo/api/employee/search', { params, withCredentials: true });
  }
}
