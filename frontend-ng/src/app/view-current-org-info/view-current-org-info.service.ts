import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrentOrgEmployeeDto, HrDepartmentDto } from './view-current-org-info.model';

const API_BASE = '/org/api/current';

/** Gọi lại nguyên API JSON đã có sẵn ở CurrentOrgController (xem viewCurrentOrgInfo.html bản Thymeleaf
 *  gốc) - không đổi backend. */
@Injectable({ providedIn: 'root' })
export class ViewCurrentOrgInfoService {
  constructor(private readonly http: HttpClient) {}

  getStructure(): Observable<HrDepartmentDto[]> {
    return this.http.get<HrDepartmentDto[]>(`${API_BASE}/structure`, { withCredentials: true });
  }

  getEmployees(deptNo: string): Observable<CurrentOrgEmployeeDto[]> {
    return this.http.get<CurrentOrgEmployeeDto[]>(`${API_BASE}/employees`, {
      params: new HttpParams().set('deptNo', deptNo),
      withCredentials: true,
    });
  }
}
