import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrgResumeInfoDto } from '../view-resume-list/view-resume-list.model';
import {
  OrgCostCenterOption,
  OrgEmployeeDto,
  OrgInfoDto,
  TransferEmployeesPayload,
} from './view-compose-org.model';

const API_BASE = '/org/api';

/** Gọi lại nguyên các API JSON đã có sẵn ở OrgComposeController + OrgCostCenterController (xem
 *  viewComposeOrg.html bản Thymeleaf gốc) - không đổi backend. Dropdown phiên bản thay đổi dùng chung
 *  API/DTO với ViewResumeProcessService (OrgResumeInfoController#getResumeDropdown). */
@Injectable({ providedIn: 'root' })
export class ViewComposeOrgService {
  constructor(private readonly http: HttpClient) {}

  getResumeDropdown(): Observable<OrgResumeInfoDto[]> {
    return this.http.get<OrgResumeInfoDto[]>(`${API_BASE}/resume/dropdown`, { withCredentials: true });
  }

  getOrgStructure(resumeNo: string): Observable<OrgInfoDto[]> {
    return this.http.get<OrgInfoDto[]>(`${API_BASE}/compose/structure`, {
      params: new HttpParams().set('resumeNo', resumeNo),
      withCredentials: true,
    });
  }

  getEmployees(resumeNo: string, deptNo: string): Observable<OrgEmployeeDto[]> {
    return this.http.get<OrgEmployeeDto[]>(`${API_BASE}/compose/employees`, {
      params: new HttpParams().set('resumeNo', resumeNo).set('deptNo', deptNo),
      withCredentials: true,
    });
  }

  saveOrgInfo(orgInfo: OrgInfoDto, isNew: boolean): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${API_BASE}/compose/save`, orgInfo, {
      params: new HttpParams().set('isNew', String(isNew)),
      withCredentials: true,
    });
  }

  deleteOrgInfo(resumeNo: string, deptNo: string): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${API_BASE}/compose/delete`, null, {
      params: new HttpParams().set('resumeNo', resumeNo).set('deptNo', deptNo),
      withCredentials: true,
    });
  }

  transferEmployees(payload: TransferEmployeesPayload): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${API_BASE}/compose/transfer`, payload, { withCredentials: true });
  }

  /** POST /org/api/costCenter/list - controller nhận Map<String,String> nên gửi object rỗng để lấy full
   *  danh sách (codeNo/codeName rỗng nghĩa là không lọc). */
  getCostCenters(): Observable<{ data: OrgCostCenterOption[] }> {
    return this.http.post<{ data: OrgCostCenterOption[] }>(
      '/org/api/costCenter/list',
      {},
      { withCredentials: true },
    );
  }
}
