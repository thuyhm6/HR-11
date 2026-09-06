import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface AttendanceOtRow {
  arDateStr: string;
  itemNo: string;
  itemName: string;
  workHour: string;
}

/**
 * Gọi lại nguyên 5 API JSON đã có sẵn ở backend mà login/dashboard.html (Thymeleaf) đang dùng -
 * không đổi backend, chỉ port phần gọi/hiển thị sang Angular.
 */
@Injectable({ providedIn: 'root' })
export class DashboardService {
  constructor(private readonly http: HttpClient) {}

  getMyLeaveApplyList(fromDate: string, toDate: string): Observable<unknown[]> {
    return this.http.get<unknown[]>('/ess/infoApplyAttendance/api/myLeaveApply/list', {
      params: new HttpParams().set('fromDate', fromDate).set('toDate', toDate),
      withCredentials: true,
    });
  }

  getMyOtApplyList(fromDate: string, toDate: string): Observable<unknown[]> {
    return this.http.get<unknown[]>('/ess/infoApply/api/myOtApply/list', {
      params: new HttpParams().set('fromDate', fromDate).set('toDate', toDate),
      withCredentials: true,
    });
  }

  getMyCwaAbnormalList(startDate: string, endDate: string): Observable<unknown[]> {
    return this.http.get<unknown[]>('/ess/infoApply/api/myCwaAbnormal/list', {
      params: new HttpParams().set('startDate', startDate).set('endDate', endDate),
      withCredentials: true,
    });
  }

  getAttendancePersonalList(startDate: string, endDate: string): Observable<AttendanceOtRow[]> {
    return this.http.get<AttendanceOtRow[]>('/ess/infoApplyAttendance/api/attendancePersonal/list', {
      params: new HttpParams().set('startDate', startDate).set('endDate', endDate),
      withCredentials: true,
    });
  }

  getPersonOtList(startDate: string, endDate: string): Observable<AttendanceOtRow[]> {
    return this.http.get<AttendanceOtRow[]>('/ess/infoApply/api/personOt/list', {
      params: new HttpParams().set('startDate', startDate).set('endDate', endDate),
      withCredentials: true,
    });
  }
}
