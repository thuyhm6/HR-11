import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OtMonthLimitDeptNode, OtMonthLimitRow } from './ot-month-limit-list.model';

const API_BASE = '/ess/infoApply/api/otMonthLimit';

@Injectable({ providedIn: 'root' })
export class OtMonthLimitListService {
  constructor(private readonly http: HttpClient) {}

  getOtMonthLimitList(params: { year: string; keyword: string; deptNos: string }): Observable<OtMonthLimitRow[]> {
    let httpParams = new HttpParams().set('year', params.year);
    if (params.keyword) httpParams = httpParams.set('keyword', params.keyword);
    if (params.deptNos) httpParams = httpParams.set('deptNos', params.deptNos);
    return this.http.get<OtMonthLimitRow[]>(`${API_BASE}/list`, { params: httpParams, withCredentials: true });
  }

  getAuthorizedDepartments(): Observable<OtMonthLimitDeptNode[]> {
    return this.http.get<OtMonthLimitDeptNode[]>('/ar/attendanceSettings/api/arSupervisor/authorized-departments', {
      withCredentials: true,
    });
  }
}
