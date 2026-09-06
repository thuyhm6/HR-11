import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  CodeItem,
  EmployeeOption,
  FamilySavePayload,
  FamilySearchParams,
  HrFamilyDto,
} from './family-info.model';

const API_BASE = '/hrm/empinfo/api/family';

/**
 * Gọi lại nguyên các API JSON đã có sẵn ở HrEmpinfoController (không đổi backend) - xem giải thích ở
 * FamilyInfoComponent. searchEmployees/getCodeList dùng chung 2 endpoint sẵn có của toàn hệ thống
 * (giống WorkExperienceInfoService/EmergencyAddressInfoService/AddressInfoService).
 */
@Injectable({ providedIn: 'root' })
export class FamilyInfoService {
  constructor(private readonly http: HttpClient) {}

  search(params: FamilySearchParams): Observable<HrFamilyDto[]> {
    let httpParams = new HttpParams();
    if (params.empId) httpParams = httpParams.set('empId', params.empId);
    if (params.localName) httpParams = httpParams.set('localName', params.localName);
    if (params.famName) httpParams = httpParams.set('famName', params.famName);
    return this.http.get<HrFamilyDto[]>(API_BASE, { params: httpParams, withCredentials: true });
  }

  save(payload: FamilySavePayload): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${API_BASE}/save`, payload, { withCredentials: true });
  }

  delete(familyNo: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${API_BASE}/delete/${familyNo}`, { withCredentials: true });
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
