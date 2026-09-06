import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AuthDeptNode,
  CodeItem,
  ManageEvsResultEmpDto,
  ManageEvsResultEmpSearchParams,
} from './manage-evs-result-emp.model';

const API_BASE = '/ess/viewDept/api/manageEvsResultEmp';

/**
 * Gọi lại nguyên các API JSON đã có sẵn ở backend mà viewManageEvsResultEmpList.html (Thymeleaf)
 * đang dùng - không đổi backend. getCodeList/getAuthorizedDepartments dùng chung 2 endpoint sẵn có
 * của toàn hệ thống (giống ManageEmpPositionInfoService).
 */
@Injectable({ providedIn: 'root' })
export class ManageEvsResultEmpService {
  constructor(private readonly http: HttpClient) {}

  getList(params: ManageEvsResultEmpSearchParams): Observable<ManageEvsResultEmpDto[]> {
    let httpParams = new HttpParams();
    for (const [key, value] of Object.entries(params)) {
      if (value) httpParams = httpParams.set(key, value);
    }
    return this.http.get<ManageEvsResultEmpDto[]>(`${API_BASE}/list`, { params: httpParams, withCredentials: true });
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
