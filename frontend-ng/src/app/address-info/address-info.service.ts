import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AddressSavePayload,
  AddressSearchParams,
  CodeItem,
  EmployeeOption,
  HrAddressMattersDto,
} from './address-info.model';

const API_BASE = '/hrm/empinfo/api/address';

/**
 * Gọi lại nguyên các API JSON đã có sẵn ở HrEmpinfoController (không đổi backend) - xem giải thích ở
 * AddressInfoComponent. searchEmployees/getCodeList dùng chung 2 endpoint sẵn có của toàn hệ thống
 * (giống WorkExperienceInfoService/EmergencyAddressInfoService/PersonalInfoService).
 */
@Injectable({ providedIn: 'root' })
export class AddressInfoService {
  constructor(private readonly http: HttpClient) {}

  search(params: AddressSearchParams): Observable<HrAddressMattersDto[]> {
    let httpParams = new HttpParams();
    if (params.empId) httpParams = httpParams.set('empId', params.empId);
    if (params.localName) httpParams = httpParams.set('localName', params.localName);
    if (params.addressContent) httpParams = httpParams.set('addressContent', params.addressContent);
    return this.http.get<HrAddressMattersDto[]>(API_BASE, { params: httpParams, withCredentials: true });
  }

  save(payload: AddressSavePayload): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${API_BASE}/save`, payload, { withCredentials: true });
  }

  delete(addressNo: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${API_BASE}/delete/${addressNo}`, { withCredentials: true });
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
