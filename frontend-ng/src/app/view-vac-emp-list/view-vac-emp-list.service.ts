import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthDeptNode, CodeItem, VacEmpRow, VacEmpSearchParams } from './view-vac-emp-list.model';

const API_BASE = '/ar/attendanceSettings/api';

/**
 * Gọi lại nguyên các API JSON đã có sẵn ở ArVacEmpController (không đổi backend) - bản Angular của
 * ar/attendanceSettings/viewVacEmpList.html (Thymeleaf + DataTables).
 */
@Injectable({ providedIn: 'root' })
export class ViewVacEmpListService {
  constructor(private readonly http: HttpClient) {}

  getList(params: VacEmpSearchParams): Observable<VacEmpRow[]> {
    let httpParams = new HttpParams();
    for (const [key, value] of Object.entries(params)) {
      if (value) httpParams = httpParams.set(key, value);
    }
    return this.http.get<VacEmpRow[]>(`${API_BASE}/vacEmp/list`, { params: httpParams, withCredentials: true });
  }

  getCodeList(parentCodeNo: string): Observable<CodeItem[]> {
    return this.http.get<CodeItem[]>('/sys/api/getCode/list', {
      params: new HttpParams().set('parentCodeNo', parentCodeNo),
      withCredentials: true,
    });
  }

  getAuthorizedDepartments(): Observable<AuthDeptNode[]> {
    return this.http.get<AuthDeptNode[]>(`${API_BASE}/arSupervisor/authorized-departments`, { withCredentials: true });
  }
}
