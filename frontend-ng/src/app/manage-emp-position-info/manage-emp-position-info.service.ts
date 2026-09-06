import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AuthDeptNode,
  CodeItem,
  ManageEmpPositionInfoDto,
  ManageEmpPositionInsideDto,
  ManageEmpPositionSearchParams,
} from './manage-emp-position-info.model';

const API_BASE = '/ess/viewDept/api/manageEmpPositionInfo';

/**
 * Gọi lại nguyên các API JSON đã có sẵn ở backend mà ManageEmpPositionInfoList.html (Thymeleaf) đang
 * dùng - không đổi backend. getCodeList/getAuthorizedDepartments dùng chung 2 endpoint sẵn có của
 * toàn hệ thống (initCodeSelects/DeptTree trong layout/master.html bản Thymeleaf).
 */
@Injectable({ providedIn: 'root' })
export class ManageEmpPositionInfoService {
  constructor(private readonly http: HttpClient) {}

  getList(params: ManageEmpPositionSearchParams): Observable<ManageEmpPositionInfoDto[]> {
    let httpParams = new HttpParams();
    for (const [key, value] of Object.entries(params)) {
      if (value) httpParams = httpParams.set(key, value);
    }
    return this.http.get<ManageEmpPositionInfoDto[]>(`${API_BASE}/list`, { params: httpParams, withCredentials: true });
  }

  getInsideExperience(personId: string): Observable<ManageEmpPositionInsideDto[]> {
    return this.http.get<ManageEmpPositionInsideDto[]>(`${API_BASE}/insideExperience`, {
      params: new HttpParams().set('personId', personId),
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
