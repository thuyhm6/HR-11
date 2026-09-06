import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AuthDeptNode,
  DataTablesResponse,
  MonthDetailListDto,
  MonthDetailListExportParams,
  MonthDetailListSearchParams,
} from './view-month-detail-list.model';

const API_BASE = '/ess/tempEmp/api/monthDetailList';

/**
 * Gọi lại nguyên các API JSON đã có sẵn ở EssTempEmpController (xem viewMonthDetailList.html bản
 * Thymeleaf gốc) - không đổi backend. /list vẫn trả DataTablesResponse phân trang server-side.
 */
@Injectable({ providedIn: 'root' })
export class ViewMonthDetailListService {
  constructor(private readonly http: HttpClient) {}

  getPageList(params: MonthDetailListSearchParams): Observable<DataTablesResponse<MonthDetailListDto>> {
    let httpParams = new HttpParams();
    for (const [key, value] of Object.entries(params)) {
      httpParams = httpParams.set(key, String(value));
    }
    return this.http.get<DataTablesResponse<MonthDetailListDto>>(`${API_BASE}/list`, { params: httpParams, withCredentials: true });
  }

  buildExportUrl(params: MonthDetailListExportParams): string {
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
