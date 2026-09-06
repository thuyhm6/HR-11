import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AuthDeptNode,
  CodeItem,
  DataTablesResponse,
  StartPointActionResult,
  StartPointDecision,
  StartPointEmployee,
  StartPointListParams,
} from './view-start-point.model';

const API_BASE = '/hrm/empinfo/api/startpoint';

/**
 * Gọi lại nguyên các API JSON đã có sẵn ở HrEmpinfoController (không đổi backend) - trang Thymeleaf
 * viewStartPoint.html đã được thay bằng Angular route /view-start-point.
 */
@Injectable({ providedIn: 'root' })
export class ViewStartPointService {
  constructor(private readonly http: HttpClient) {}

  searchEmployee(keyword: string): Observable<StartPointEmployee> {
    return this.http.get<StartPointEmployee>(`${API_BASE}/employee/search`, {
      params: new HttpParams().set('keyword', keyword),
      withCredentials: true,
    });
  }

  getDecisionList(params: StartPointListParams): Observable<DataTablesResponse<StartPointDecision>> {
    return this.http.post<DataTablesResponse<StartPointDecision>>(`${API_BASE}/decisions/list`, params, {
      withCredentials: true,
    });
  }

  getDecisionDetail(seq: number): Observable<StartPointDecision> {
    return this.http.get<StartPointDecision>(`${API_BASE}/decisions/detail`, {
      params: new HttpParams().set('seq', String(seq)),
      withCredentials: true,
    });
  }

  saveDecision(dto: Partial<StartPointDecision>): Observable<StartPointActionResult> {
    return this.http.post<StartPointActionResult>(`${API_BASE}/decisions/save`, dto, { withCredentials: true });
  }

  deleteDecision(seq: number): Observable<StartPointActionResult> {
    return this.http.post<StartPointActionResult>(`${API_BASE}/decisions/delete`, null, {
      params: new HttpParams().set('seq', String(seq)),
      withCredentials: true,
    });
  }

  exportUrl(personId: string, localName: string): string {
    return `${API_BASE}/decisions/export?personId=${encodeURIComponent(personId)}&localName=${encodeURIComponent(localName)}`;
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
