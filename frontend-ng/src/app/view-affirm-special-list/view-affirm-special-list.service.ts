import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthDeptNode } from '../manage-emp-position-info/manage-emp-position-info.model';
import {
  AffirmSpecialActionResult,
  AffirmSpecialDetail,
  AffirmSpecialRow,
  AffirmSpecialSavePayload,
  AffirmSpecialType,
  EmployeeOption,
} from './view-affirm-special-list.model';

const API_BASE = '/sys/api/affirmSpecial';

/**
 * API của AffirmSpecialController. searchEmployees/getAuthorizedDepartments dùng lại 2 endpoint sẵn có của
 * toàn hệ thống (cùng cách AddressInfoService/ManageEmpPositionInfoService đang gọi).
 */
@Injectable({ providedIn: 'root' })
export class ViewAffirmSpecialListService {
  constructor(private readonly http: HttpClient) {}

  getTypes(): Observable<AffirmSpecialType[]> {
    return this.http.get<AffirmSpecialType[]>(`${API_BASE}/types`, { withCredentials: true });
  }

  getList(keyword: string): Observable<AffirmSpecialRow[]> {
    let params = new HttpParams();
    if (keyword) params = params.set('keyword', keyword);
    return this.http.get<AffirmSpecialRow[]>(`${API_BASE}/list`, { params, withCredentials: true });
  }

  getAffirmors(affirmObject: string, affirmTypeNo: string): Observable<AffirmSpecialDetail[]> {
    const params = new HttpParams().set('affirmObject', affirmObject).set('affirmTypeNo', affirmTypeNo);
    return this.http.get<AffirmSpecialDetail[]>(`${API_BASE}/affirmors`, { params, withCredentials: true });
  }

  save(payload: AffirmSpecialSavePayload): Observable<AffirmSpecialActionResult> {
    return this.http.post<AffirmSpecialActionResult>(`${API_BASE}/save`, payload, { withCredentials: true });
  }

  delete(affirmObject: string, affirmTypeNo: string): Observable<AffirmSpecialActionResult> {
    return this.http.post<AffirmSpecialActionResult>(
      `${API_BASE}/delete`,
      { affirmObject, affirmTypeNo },
      { withCredentials: true },
    );
  }

  searchEmployees(keyword: string): Observable<EmployeeOption[]> {
    const params = new HttpParams().set('keyword', keyword);
    return this.http.get<EmployeeOption[]>('/hrm/empinfo/api/employee/search', { params, withCredentials: true });
  }

  getAuthorizedDepartments(): Observable<AuthDeptNode[]> {
    return this.http.get<AuthDeptNode[]>('/ar/attendanceSettings/api/arSupervisor/authorized-departments', {
      withCredentials: true,
    });
  }
}
