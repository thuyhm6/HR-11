import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeSearchDto, HrAddressMatters, HrEmergencyAddress, HrFamily, HrPersonalInfoDto } from './view-personal-info.model';

const API_BASE = '/hrm/empinfo';

/**
 * Gọi lại nguyên các API JSON đã có sẵn ở HrEmpinfoController (không đổi backend, trừ /api/personalInfo
 * mới thêm để lấy HrPersonalInfo theo personId - các API address/family/emergency-address theo personId
 * đã có sẵn từ trước, dùng chung với các trang tra cứu addressSearch/familySearch/emergencyAddressSearch).
 */
@Injectable({ providedIn: 'root' })
export class ViewPersonalInfoService {
  constructor(private readonly http: HttpClient) {}

  searchEmployees(keyword: string): Observable<EmployeeSearchDto[]> {
    let params = new HttpParams();
    if (keyword) params = params.set('keyword', keyword);
    return this.http.get<EmployeeSearchDto[]>(`${API_BASE}/api/employee/search`, { params, withCredentials: true });
  }

  getPersonalInfo(personId: string): Observable<HrPersonalInfoDto> {
    return this.http.get<HrPersonalInfoDto>(`${API_BASE}/api/personalInfo`, {
      params: new HttpParams().set('personId', personId),
      withCredentials: true,
    });
  }

  getAddresses(personId: string): Observable<HrAddressMatters[]> {
    return this.http.get<HrAddressMatters[]>(`${API_BASE}/api/address`, {
      params: new HttpParams().set('personId', personId),
      withCredentials: true,
    });
  }

  getFamilies(personId: string): Observable<HrFamily[]> {
    return this.http.get<HrFamily[]>(`${API_BASE}/api/family`, {
      params: new HttpParams().set('personId', personId),
      withCredentials: true,
    });
  }

  getEmergencies(personId: string): Observable<HrEmergencyAddress[]> {
    return this.http.get<HrEmergencyAddress[]>(`${API_BASE}/api/emergency-address`, {
      params: new HttpParams().set('personId', personId),
      withCredentials: true,
    });
  }
}
