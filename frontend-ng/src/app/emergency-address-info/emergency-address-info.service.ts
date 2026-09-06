import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  CodeItem,
  EmergencyAddressSavePayload,
  EmergencyAddressSearchParams,
  EmployeeOption,
  HrEmergencyAddressDto,
} from './emergency-address-info.model';

const API_BASE = '/hrm/empinfo/api/emergency-address';

/**
 * Gọi lại nguyên các API JSON đã có sẵn ở HrEmpinfoController (không đổi backend) - xem giải thích ở
 * EmergencyAddressInfoComponent. searchEmployees/getCodeList dùng chung 2 endpoint sẵn có của toàn hệ
 * thống (giống WorkExperienceInfoService/PersonalInfoService).
 */
@Injectable({ providedIn: 'root' })
export class EmergencyAddressInfoService {
  constructor(private readonly http: HttpClient) {}

  search(params: EmergencyAddressSearchParams): Observable<HrEmergencyAddressDto[]> {
    let httpParams = new HttpParams();
    if (params.empId) httpParams = httpParams.set('empId', params.empId);
    if (params.localName) httpParams = httpParams.set('localName', params.localName);
    if (params.emerName) httpParams = httpParams.set('emerName', params.emerName);
    return this.http.get<HrEmergencyAddressDto[]>(API_BASE, { params: httpParams, withCredentials: true });
  }

  save(payload: EmergencyAddressSavePayload): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${API_BASE}/save`, payload, { withCredentials: true });
  }

  delete(emergencyNo: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${API_BASE}/delete/${emergencyNo}`, { withCredentials: true });
  }

  searchEmployees(keyword: string): Observable<EmployeeOption[]> {
    let params = new HttpParams();
    if (keyword) params = params.set('keyword', keyword);
    return this.http.get<EmployeeOption[]>('/hrm/empinfo/api/employee/search', { params, withCredentials: true });
  }

  getCodeList(parentCodeNo: string): Observable<CodeItem[]> {
    return this.http.get<CodeItem[]>('/sys/api/getCode/list', {
      params: new HttpParams().set('parentCodeNo', parentCodeNo),
      withCredentials: true,
    });
  }
}
