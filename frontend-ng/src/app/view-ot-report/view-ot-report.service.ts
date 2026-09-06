import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AuthDeptNode,
  DataTablesResponse,
  EssOtReportDto,
  ViewOtReportSearchParams,
} from './view-ot-report.model';

const API_BASE = '/ess/infoApply/api/otReport';

@Injectable({ providedIn: 'root' })
export class ViewOtReportService {
  constructor(private http: HttpClient) {}

  getPageList(params: ViewOtReportSearchParams): Observable<DataTablesResponse<EssOtReportDto>> {
    let httpParams = new HttpParams();
    for (const [key, value] of Object.entries(params)) {
      httpParams = httpParams.set(key, String(value));
    }
    return this.http.get<DataTablesResponse<EssOtReportDto>>(`${API_BASE}/list`, {
      params: httpParams,
      withCredentials: true,
    });
  }

  buildExportUrl(params: Pick<ViewOtReportSearchParams, 'month' | 'year' | 'keyword' | 'deptNos'>): string {
    let httpParams = new HttpParams();
    for (const [key, value] of Object.entries(params)) {
      httpParams = httpParams.set(key, String(value));
    }
    return `${API_BASE}/export?${httpParams.toString()}`;
  }

  getAuthorizedDepartments(): Observable<AuthDeptNode[]> {
    return this.http.get<AuthDeptNode[]>('/ar/attendanceSettings/api/arSupervisor/authorized-departments', {
      withCredentials: true,
    });
  }
}
