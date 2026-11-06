import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AuthDeptNode,
  CodeItem,
  RecruitActionResult,
  RecruitEducation,
  RecruitEmployee,
  RecruitFamily,
  RecruitSearchParams,
  RecruitWorkExp,
} from './view-recruit-list.model';

const API_BASE = '/hrm/recruitManage/api';

/** API Quyết định nhận việc ở HrRecruitManageController (bản gốc /hrm/recruitManage/viewRecruitList). */
@Injectable({ providedIn: 'root' })
export class ViewRecruitListService {
  constructor(private readonly http: HttpClient) {}

  getEmployeeList(params: RecruitSearchParams): Observable<RecruitEmployee[]> {
    return this.http.post<RecruitEmployee[]>(`${API_BASE}/employee/list`, params, { withCredentials: true });
  }

  getEmployeeDetail(personId: string): Observable<RecruitEmployee> {
    return this.http.get<RecruitEmployee>(`${API_BASE}/employee/detail`, {
      params: new HttpParams().set('personId', personId),
      withCredentials: true,
    });
  }

  saveEmployeeBasic(dto: RecruitEmployee): Observable<RecruitActionResult> {
    return this.http.post<RecruitActionResult>(`${API_BASE}/employee/saveBasic`, dto, { withCredentials: true });
  }

  saveEmployeePersonal(dto: RecruitEmployee): Observable<RecruitActionResult> {
    return this.http.post<RecruitActionResult>(`${API_BASE}/employee/savePersonal`, dto, { withCredentials: true });
  }

  deleteEmployee(personId: string): Observable<RecruitActionResult> {
    return this.http.post<RecruitActionResult>(`${API_BASE}/employee/delete`, null, {
      params: new HttpParams().set('personId', personId),
      withCredentials: true,
    });
  }

  uploadPhoto(personId: string, file: File): Observable<RecruitActionResult> {
    const fd = new FormData();
    fd.append('file', file);
    return this.http.post<RecruitActionResult>(`${API_BASE}/employee/photo`, fd, {
      params: new HttpParams().set('personId', personId),
      withCredentials: true,
    });
  }

  getPersonSupplierNames(): Observable<string[]> {
    return this.http.get<string[]>(`${API_BASE}/personSupplier/list`, { withCredentials: true });
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

  /** type: CONFIRM (Xác nhận) | CANCEL (Kéo lại) - personIds phân cách dấu phẩy. */
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
