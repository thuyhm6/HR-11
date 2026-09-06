import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AuthDeptNode,
  CodeItem,
  DataTablesResponse,
  RecruitActionResult,
  RecruitEducation,
  RecruitEmployee,
  RecruitEmployeeListParams,
  RecruitFamily,
  RecruitWorkExp,
} from './view-recruit-list.model';

const API_BASE = '/hrm/recruitManage/api';

/**
 * Gọi lại nguyên các API JSON đã có sẵn ở HrRecruitManageController (không đổi backend) - trang
 * Thymeleaf viewRecruitList.html đã được thay bằng Angular route /view-recruit-list.
 */
@Injectable({ providedIn: 'root' })
export class ViewRecruitListService {
  constructor(private readonly http: HttpClient) {}

  getEmployeeList(params: RecruitEmployeeListParams): Observable<DataTablesResponse<RecruitEmployee>> {
    return this.http.post<DataTablesResponse<RecruitEmployee>>(`${API_BASE}/employee/list`, params, {
      withCredentials: true,
    });
  }

  getEmployeeDetail(personId: string): Observable<RecruitEmployee> {
    return this.http.get<RecruitEmployee>(`${API_BASE}/employee/detail`, {
      params: new HttpParams().set('personId', personId),
      withCredentials: true,
    });
  }

  saveEmployee(dto: RecruitEmployee): Observable<RecruitActionResult> {
    return this.http.post<RecruitActionResult>(`${API_BASE}/employee/save`, dto, { withCredentials: true });
  }

  getEducationList(personId: string): Observable<RecruitEducation[]> {
    return this.http.get<RecruitEducation[]>(`${API_BASE}/education/list`, {
      params: new HttpParams().set('personId', personId),
      withCredentials: true,
    });
  }

  saveEducation(dto: RecruitEducation): Observable<RecruitActionResult> {
    return this.http.post<RecruitActionResult>(`${API_BASE}/education/save`, dto, { withCredentials: true });
  }

  deleteEducation(seq: number): Observable<RecruitActionResult> {
    return this.http.post<RecruitActionResult>(`${API_BASE}/education/delete`, null, {
      params: new HttpParams().set('seq', String(seq)),
      withCredentials: true,
    });
  }

  getWorkExpList(personId: string): Observable<RecruitWorkExp[]> {
    return this.http.get<RecruitWorkExp[]>(`${API_BASE}/workexp/list`, {
      params: new HttpParams().set('personId', personId),
      withCredentials: true,
    });
  }

  saveWorkExp(dto: RecruitWorkExp): Observable<RecruitActionResult> {
    return this.http.post<RecruitActionResult>(`${API_BASE}/workexp/save`, dto, { withCredentials: true });
  }

  deleteWorkExp(seq: number): Observable<RecruitActionResult> {
    return this.http.post<RecruitActionResult>(`${API_BASE}/workexp/delete`, null, {
      params: new HttpParams().set('seq', String(seq)),
      withCredentials: true,
    });
  }

  getFamilyList(personId: string): Observable<RecruitFamily[]> {
    return this.http.get<RecruitFamily[]>(`${API_BASE}/family/list`, {
      params: new HttpParams().set('personId', personId),
      withCredentials: true,
    });
  }

  saveFamily(dto: RecruitFamily): Observable<RecruitActionResult> {
    return this.http.post<RecruitActionResult>(`${API_BASE}/family/save`, dto, { withCredentials: true });
  }

  deleteFamily(seq: number): Observable<RecruitActionResult> {
    return this.http.post<RecruitActionResult>(`${API_BASE}/family/delete`, null, {
      params: new HttpParams().set('seq', String(seq)),
      withCredentials: true,
    });
  }

  execute(personIds: string, type: 'CONFIRM' | 'CANCEL'): Observable<RecruitActionResult> {
    return this.http.post<RecruitActionResult>(`${API_BASE}/execute`, null, {
      params: new HttpParams().set('personIds', personIds).set('type', type),
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
