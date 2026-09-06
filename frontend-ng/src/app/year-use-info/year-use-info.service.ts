import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EssBasicInfoDto, YearUseLeaveUsageDto, YearUseVacationDto } from './year-use-info.model';

const API_BASE = '/ess/viewDept/api/yearUseInfo';

/**
 * Gọi lại nguyên các API JSON đã có sẵn (không đổi backend) - bản Angular của
 * ess/viewDept/yearUseInfo.html (Thymeleaf + jQuery, tự build bảng + phân trang bằng tay).
 * getBasicInfo dùng chung endpoint /api/personalInfo/myInfo mà fragments/essEmpInfoCard.html gốc gọi
 * qua loadEssEmpInfoCard().
 */
@Injectable({ providedIn: 'root' })
export class YearUseInfoService {
  constructor(private readonly http: HttpClient) {}

  getBasicInfo(): Observable<EssBasicInfoDto> {
    return this.http.get<EssBasicInfoDto>('/ess/empinfo/api/personalInfo/myInfo', { withCredentials: true });
  }

  getVacationRows(year: string): Observable<YearUseVacationDto[]> {
    let httpParams = new HttpParams();
    if (year) httpParams = httpParams.set('year', year);
    return this.http.get<YearUseVacationDto[]>(`${API_BASE}/vacationRows`, { params: httpParams, withCredentials: true });
  }

  getLeaveUsage(year: string): Observable<YearUseLeaveUsageDto[]> {
    let httpParams = new HttpParams();
    if (year) httpParams = httpParams.set('year', year);
    return this.http.get<YearUseLeaveUsageDto[]>(`${API_BASE}/leaveUsage`, { params: httpParams, withCredentials: true });
  }
}
