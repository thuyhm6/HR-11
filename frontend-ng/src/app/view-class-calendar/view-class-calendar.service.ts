import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArCalenderGroupDto, ArShift010Dto, CodeItem } from './view-class-calendar.model';

const API_BASE = '/ar/attendanceSettings/api/calender/group';
const SHIFT_API = '/ar/attendanceSettings/api/shift';

/**
 * Gọi lại nguyên các API JSON đã có sẵn ở backend mà viewClassCalendar.html (Thymeleaf) đang dùng -
 * không đổi backend. batch_save dùng @RequestParam (form-urlencoded) ở backend nên phải gửi bằng
 * Content-Type application/x-www-form-urlencoded thay vì JSON, giống hệt jQuery.ajax bản gốc.
 */
@Injectable({ providedIn: 'root' })
export class ViewClassCalendarService {
  constructor(private readonly http: HttpClient) {}

  getGroupCalendarMonth(year: number, month: number, groupId: string): Observable<ArCalenderGroupDto[]> {
    const params = new HttpParams().set('year', year).set('month', month).set('groupId', groupId);
    return this.http.get<ArCalenderGroupDto[]>(`${API_BASE}/month`, { params, withCredentials: true });
  }

  getGroupCalendarDetail(arDateStr: string, groupId: string): Observable<ArCalenderGroupDto> {
    const params = new HttpParams().set('arDateStr', arDateStr).set('groupId', groupId);
    return this.http.get<ArCalenderGroupDto>(`${API_BASE}/detail`, { params, withCredentials: true });
  }

  saveGroupCalendarBatch(startDate: string, endDate: string, groupId: string, workShift: string, restShift: string): Observable<{ success: boolean; message?: string; error?: string }> {
    const body = new HttpParams()
      .set('startDate', startDate)
      .set('endDate', endDate)
      .set('groupId', groupId)
      .set('workShift', workShift)
      .set('restShift', restShift);
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post<{ success: boolean; message?: string; error?: string }>(`${API_BASE}/batch_save`, body.toString(), {
      headers,
      withCredentials: true,
    });
  }

  saveGroupCalendarSingle(dto: Partial<ArCalenderGroupDto>): Observable<{ success: boolean; message?: string; error?: string }> {
    return this.http.post<{ success: boolean; message?: string; error?: string }>(`${API_BASE}/save`, dto, { withCredentials: true });
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
