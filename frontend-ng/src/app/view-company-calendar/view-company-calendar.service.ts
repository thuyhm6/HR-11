import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArShift010Dto, CodeItem } from '../view-class-calendar/view-class-calendar.model';
import { ArCalenderDto } from './view-company-calendar.model';

const API_BASE = '/ar/attendanceSettings/api/calender';
const SHIFT_API = '/ar/attendanceSettings/api/shift';

/** Gọi lại nguyên các API JSON đã có sẵn ở ArCalenderController/ArShiftController - không đổi backend
 *  (cùng backend với ViewStatutoryHolidaysService/ViewClassCalendarService, chỉ khác endpoint /month
 *  lấy toàn bộ ngày trong tháng thay vì chỉ ngày lễ). */
@Injectable({ providedIn: 'root' })
export class ViewCompanyCalendarService {
  constructor(private readonly http: HttpClient) {}

  getMonth(year: number, month: number): Observable<ArCalenderDto[]> {
    const params = new HttpParams().set('year', year).set('month', month);
    return this.http.get<ArCalenderDto[]>(`${API_BASE}/month`, { params, withCredentials: true });
  }

  getDayDetail(ddateStr: string): Observable<ArCalenderDto> {
    const params = new HttpParams().set('ddateStr', ddateStr);
    return this.http.get<ArCalenderDto>(`${API_BASE}/holidays/detail`, { params, withCredentials: true });
  }

  saveDay(payload: Partial<ArCalenderDto>): Observable<{ success: boolean; message?: string; error?: string }> {
    return this.http.post<{ success: boolean; message?: string; error?: string }>(`${API_BASE}/holidays/save`, payload, {
      withCredentials: true,
    });
  }

  getShiftList(): Observable<ArShift010Dto[]> {
    return this.http.get<ArShift010Dto[]>(SHIFT_API, { withCredentials: true });
  }

  getCodeList(parentCodeNo: string): Observable<CodeItem[]> {
    return this.http.get<CodeItem[]>('/sys/api/getCode/list', {
      params: new HttpParams().set('parentCodeNo', parentCodeNo),
      withCredentials: true,
    });
  }
}
