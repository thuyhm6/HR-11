import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AttendancePersonalSearchParams,
  EssAttendancePersonalInfoDto,
  EssBasicInfoDto,
} from './attendance-personal-info-list.model';

const API_BASE = '/ess/infoApplyAttendance/api/attendancePersonal';

/**
 * Gọi lại nguyên các API JSON đã có sẵn (không đổi backend) - bản Angular của
 * ess/infoApplyAttendance/viewAttendancePersonalInfoList.html (Thymeleaf + jQuery, tự build bảng +
 * phân trang bằng tay). getBasicInfo dùng chung endpoint /api/personalInfo/myInfo mà
 * fragments/essEmpInfoCard.html gốc gọi qua loadEssEmpInfoCard(). getList dùng chung
 * /api/attendancePersonal/list mà DashboardService.getAttendancePersonalList() cũng đang gọi cho biểu
 * đồ Dashboard - không đổi field/tham số để không ảnh hưởng Dashboard.
 */
@Injectable({ providedIn: 'root' })
export class AttendancePersonalInfoListService {
  constructor(private readonly http: HttpClient) {}

  getBasicInfo(): Observable<EssBasicInfoDto> {
    return this.http.get<EssBasicInfoDto>('/ess/empinfo/api/personalInfo/myInfo', { withCredentials: true });
  }

  getItemList(): Observable<EssAttendancePersonalInfoDto[]> {
    return this.http.get<EssAttendancePersonalInfoDto[]>(`${API_BASE}/items`, { withCredentials: true });
  }

  getList(params: AttendancePersonalSearchParams): Observable<EssAttendancePersonalInfoDto[]> {
    let httpParams = new HttpParams();
    if (params.startDate) httpParams = httpParams.set('startDate', params.startDate);
    if (params.endDate) httpParams = httpParams.set('endDate', params.endDate);
    if (params.itemNoSearch) httpParams = httpParams.set('itemNoSearch', params.itemNoSearch);
    return this.http.get<EssAttendancePersonalInfoDto[]>(`${API_BASE}/list`, { params: httpParams, withCredentials: true });
  }
}
