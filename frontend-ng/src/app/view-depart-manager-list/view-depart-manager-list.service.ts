import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ArDepartmentManageActionResponse,
  ArDepartmentManageDto,
  ArDepartmentManageSaveItem,
} from './view-depart-manager-list.model';

const API_BASE = '/ar/attendanceSettings/api/departmentManage';

/**
 * Gọi lại nguyên các API JSON đã có sẵn ở ArDepartmentManageController (xem viewDepartManagerList.html
 * bản Thymeleaf gốc) - không đổi backend.
 */
@Injectable({ providedIn: 'root' })
export class ViewDepartManagerListService {
  constructor(private readonly http: HttpClient) {}

  getList(lockDate: string, deptNo: string): Observable<ArDepartmentManageDto[]> {
    let params = new HttpParams().set('lockDate', lockDate);
    if (deptNo) params = params.set('deptNo', deptNo);
    return this.http.get<ArDepartmentManageDto[]>(`${API_BASE}/list`, { params, withCredentials: true });
  }

  save(items: ArDepartmentManageSaveItem[]): Observable<ArDepartmentManageActionResponse> {
    return this.http.post<ArDepartmentManageActionResponse>(`${API_BASE}/save`, items, { withCredentials: true });
  }
}
