import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArCalenderHolidayDto, ArCalenderHolidaySavePayload } from './view-statutory-holidays.model';

const API_BASE = '/ar/attendanceSettings/api/calender/holidays';

/** Gọi lại nguyên các API JSON đã có sẵn ở ArCalenderController (không đổi backend). */
@Injectable({ providedIn: 'root' })
export class ViewStatutoryHolidaysService {
  constructor(private readonly http: HttpClient) {}

  search(iyear: string): Observable<ArCalenderHolidayDto[]> {
    let params = new HttpParams();
    if (iyear) params = params.set('iyear', iyear);
    return this.http.get<ArCalenderHolidayDto[]>(API_BASE, { params, withCredentials: true });
  }

  save(payload: ArCalenderHolidaySavePayload): Observable<{ success: boolean; message?: string; error?: string }> {
    return this.http.post<{ success: boolean; message?: string; error?: string }>(`${API_BASE}/save`, payload, {
      withCredentials: true,
    });
  }

  delete(ddateStr: string): Observable<{ success: boolean; message?: string; error?: string }> {
    const params = new HttpParams().set('ddateStr', ddateStr);
    return this.http.delete<{ success: boolean; message?: string; error?: string }>(`${API_BASE}/delete`, {
      params,
      withCredentials: true,
    });
  }
}
