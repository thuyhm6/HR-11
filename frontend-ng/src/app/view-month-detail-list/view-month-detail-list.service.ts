import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AuthDeptNode,
  CodeItem,
  MonthDetailExportParams,
  MonthDetailSearchParams,
  MonthDetailView,
} from './view-month-detail-list.model';

const API_BASE = '/ess/tempEmp/api/monthDetailList';

/**
 * API của EssTempEmpController cho màn hình viewMonthDetailList (bản JSP gốc: TempEmpCtroller.viewMonthDetailList).
 * /detail trả toàn bộ dữ liệu 1 lần (bản gốc không phân trang server-side) - lọc nhanh/sắp xếp/phân trang
 * làm ở client. getCodeList/getAuthorizedDepartments dùng chung 2 endpoint sẵn có của toàn hệ thống.
 */
@Injectable({ providedIn: 'root' })
export class ViewMonthDetailListService {
  constructor(private readonly http: HttpClient) {}

  getDetailView(params: MonthDetailSearchParams): Observable<MonthDetailView> {
    return this.http.get<MonthDetailView>(`${API_BASE}/detail`, { params: this.toParams(params), withCredentials: true });
  }

  buildExportUrl(params: MonthDetailExportParams): string {
    return `${API_BASE}/export?${this.toParams(params).toString()}`;
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

  private toParams(params: object): HttpParams {
    let httpParams = new HttpParams();
    for (const [key, value] of Object.entries(params)) {
      httpParams = httpParams.set(key, String(value ?? ''));
    }
    return httpParams;
  }
}
