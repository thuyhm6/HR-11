import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  EmployeeOption,
  HrPunishmentDto,
  PunishmentSavePayload,
  PunishmentSearchParams,
} from './punishment-info.model';

const API_BASE = '/hrm/empinfo/api/punishment';

/**
 * Gọi lại nguyên các API JSON đã có sẵn ở HrEmpinfoController (không đổi backend) - xem giải thích ở
 * PunishmentInfoComponent. searchEmployees dùng chung endpoint sẵn có của toàn hệ thống (giống
 * RecognitionInfoService/AddressInfoService/FamilyInfoService/EducationInfoService).
 */
@Injectable({ providedIn: 'root' })
export class PunishmentInfoService {
  constructor(private readonly http: HttpClient) {}

  search(params: PunishmentSearchParams): Observable<HrPunishmentDto[]> {
    let httpParams = new HttpParams();
    if (params.empId) httpParams = httpParams.set('empId', params.empId);
    if (params.localName) httpParams = httpParams.set('localName', params.localName);
    if (params.punishCode) httpParams = httpParams.set('punishCode', params.punishCode);
    return this.http.get<HrPunishmentDto[]>(API_BASE, { params: httpParams, withCredentials: true });
  }

  save(payload: PunishmentSavePayload): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${API_BASE}/save`, payload, { withCredentials: true });
  }

  delete(punishNo: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${API_BASE}/delete/${punishNo}`, { withCredentials: true });
  }

  searchEmployees(keyword: string): Observable<EmployeeOption[]> {
    let params = new HttpParams();
    if (keyword) params = params.set('keyword', keyword);
    return this.http.get<EmployeeOption[]>('/hrm/empinfo/api/employee/search', { params, withCredentials: true });
  }
}
