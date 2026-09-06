import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrgResumeInfoDto } from '../view-resume-list/view-resume-list.model';
import { OrgInfoDto } from '../view-compose-org/view-compose-org.model';
import { OrgBusinessRelationDto } from './view-org-business.model';

const API_BASE = '/org/api';

/** Gọi lại nguyên các API JSON đã có sẵn ở OrgBusinessController + OrgComposeController (dropdown phiên
 *  bản dùng chung API với ViewComposeOrgService/ViewResumeProcessService) - không đổi backend. */
@Injectable({ providedIn: 'root' })
export class ViewOrgBusinessService {
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

  getBusinessList(resumeNo: string, deptNo: string): Observable<OrgBusinessRelationDto[]> {
    return this.http.get<OrgBusinessRelationDto[]>(`${API_BASE}/business/list`, {
      params: new HttpParams().set('resumeNo', resumeNo).set('deptNo', deptNo),
      withCredentials: true,
    });
  }

  saveBusiness(obj: OrgBusinessRelationDto): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${API_BASE}/business/save`, obj, { withCredentials: true });
  }

  deleteBusiness(seq: string): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${API_BASE}/business/delete`, null, {
      params: new HttpParams().set('seq', seq),
      withCredentials: true,
    });
  }
}
