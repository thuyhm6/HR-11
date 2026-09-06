import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArEmpCalenderDto, EmpCalendarSavePayload, ShiftOption } from './view-emp-calendar.model';

const API_BASE = '/ar/attendanceSettings/api/calender/emp';

/** Gọi lại nguyên các API JSON đã có sẵn ở ArCalenderController (không đổi backend) - dùng chung
 *  endpoint tháng với EssViewEmpCalendarService (/api/calender/emp/month), BE tự giới hạn quyền xem/sửa
 *  lịch của người khác (chỉ ADMIN/SYS mới xem/sửa được nhân viên khác - xem resolvePersonIdForRequest/
 *  resolvePersonIdForWrite). */
@Injectable({ providedIn: 'root' })
export class ViewEmpCalendarService {
  constructor(private readonly http: HttpClient) {}

  getEmpCalendarMonth(year: number, month: number, personId: string): Observable<ArEmpCalenderDto[]> {
    const params = new HttpParams().set('year', year).set('month', month).set('personId', personId);
    return this.http.get<ArEmpCalenderDto[]>(`${API_BASE}/month`, { params, withCredentials: true });
  }

  getEmpScheduleDetail(arDateStr: string, personId: string): Observable<ArEmpCalenderDto> {
    const params = new HttpParams().set('arDateStr', arDateStr).set('personId', personId);
    return this.http.get<ArEmpCalenderDto>(`${API_BASE}/detail`, { params, withCredentials: true });
  }

  saveEmpCalendarDay(payload: EmpCalendarSavePayload): Observable<{ success: boolean; message?: string; error?: string }> {
    return this.http.post<{ success: boolean; message?: string; error?: string }>(`${API_BASE}/save`, payload, {
      withCredentials: true,
    });
  }

  getShiftList(): Observable<ShiftOption[]> {
    return this.http.get<ShiftOption[]>('/ar/attendanceSettings/api/shift', { withCredentials: true });
  }
}
