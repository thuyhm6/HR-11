import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArEmpCalenderDto, EssMyInfoDto } from './ess-view-emp-calendar.model';

const MY_INFO_URL = '/ess/empinfo/api/personalInfo/myInfo';
const CALENDAR_MONTH_URL = '/ar/attendanceSettings/api/calender/emp/month';

/**
 * Gọi lại nguyên các API JSON đã có sẵn ở backend mà ess/viewDept/viewEmpCalendar.html (Thymeleaf)
 * đang dùng - không đổi backend. Endpoint lịch tháng dùng chung với bản HRM
 * (/ar/attendanceSettings/api/calender/emp/month) - backend tự giới hạn quyền xem người khác.
 */
@Injectable({ providedIn: 'root' })
export class EssViewEmpCalendarService {
  constructor(private readonly http: HttpClient) {}

  getMyInfo(): Observable<EssMyInfoDto> {
    return this.http.get<EssMyInfoDto>(MY_INFO_URL, { withCredentials: true });
  }

  getEmpCalendarMonth(year: number, month: number, personId: string): Observable<ArEmpCalenderDto[]> {
    const params = new HttpParams().set('year', year).set('month', month).set('personId', personId);
    return this.http.get<ArEmpCalenderDto[]>(CALENDAR_MONTH_URL, { params, withCredentials: true });
  }
}
