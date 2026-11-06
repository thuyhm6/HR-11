import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AuthDeptNode,
  CodeItem,
  StartPointActionResult,
  StartPointDecision,
  StartPointEmployee,
} from './view-start-point.model';

const API_BASE = '/hrm/empinfo/api/startpoint';

/** API quyết định nhân sự ở HrEmpinfoController (bản gốc /hrm/empinfo/viewStartPoint của dự án HTSV). */
@Injectable({ providedIn: 'root' })
export class ViewStartPointService {
  constructor(private readonly http: HttpClient) {}

  searchEmployees(keyword: string): Observable<StartPointEmployee[]> {
    return this.http.get<StartPointEmployee[]>(`${API_BASE}/employee/search`, {
      params: new HttpParams().set('keyword', keyword),
      withCredentials: true,
    });
  }

  getEmployeeInfo(personId: string): Observable<StartPointEmployee> {
    return this.http.get<StartPointEmployee>(`${API_BASE}/employee/info`, {
      params: new HttpParams().set('personId', personId),
      withCredentials: true,
    });
  }

  getDecisionList(personId: string): Observable<StartPointDecision[]> {
    return this.http.get<StartPointDecision[]>(`${API_BASE}/decisions/list`, {
      params: new HttpParams().set('personId', personId),
      withCredentials: true,
    });
  }

  getDecisionDetail(seq: number): Observable<StartPointDecision> {
    return this.http.get<StartPointDecision>(`${API_BASE}/decisions/detail`, {
      params: new HttpParams().set('seq', String(seq)),
      withCredentials: true,
    });
  }

  /** Giá trị mặc định cho quyết định mới (thông tin hiện tại ở HR_EMPLOYEE). */
  getDecisionDefault(personId: string): Observable<StartPointDecision> {
    return this.http.get<StartPointDecision>(`${API_BASE}/decisions/current`, {
      params: new HttpParams().set('personId', personId),
      withCredentials: true,
    });
  }

  saveDecision(dto: StartPointDecision): Observable<StartPointActionResult> {
    return this.http.post<StartPointActionResult>(`${API_BASE}/decisions/save`, dto, { withCredentials: true });
  }

  deleteDecision(seq: number): Observable<StartPointActionResult> {
    return this.http.post<StartPointActionResult>(`${API_BASE}/decisions/delete`, null, {
      params: new HttpParams().set('seq', String(seq)),
      withCredentials: true,
    });
  }

  getCodeList(parentCodeNo: string): Observable<CodeItem[]> {
    return this.http.get<CodeItem[]>('/sys/api/getCode/list', {
      params: new HttpParams().set('parentCodeNo', parentCodeNo),
      withCredentials: true,
    });
  }

  getAuthorizedDepartments(): Observable<AuthDeptNode[]> {
    return this.http.get<AuthDeptNode[]>('/ar/attendanceSettings/api/arSupervisor/authorized-departments', {
      withCredentials: true,
    });
  }
}
