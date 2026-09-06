import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ArCardRecordDayDto,
  ArCardRecordDaySearchParams,
  AuthDeptNode,
  DataTablesResponse,
  ShiftOption,
} from './view-ar-card-record-day.model';

const API_BASE = '/ar/attendanceMintenance/api/cardRecordDay';

/**
 * Gọi lại nguyên API JSON đã có sẵn ở ArAttendanceSearchController (xem viewArCardRecordDay.html bản
 * Thymeleaf gốc) - không đổi backend. /api/cardRecordDay/list vẫn trả DataTablesResponse phân trang
 * server-side, giống hệt ViewArCardRecordService (trang chị em cùng controller).
 */
@Injectable({ providedIn: 'root' })
export class ViewArCardRecordDayService {
  constructor(private readonly http: HttpClient) {}

  getPageList(params: ArCardRecordDaySearchParams): Observable<DataTablesResponse<ArCardRecordDayDto>> {
    let httpParams = new HttpParams();
    for (const [key, value] of Object.entries(params)) {
      httpParams = httpParams.set(key, String(value));
    }
    return this.http.get<DataTablesResponse<ArCardRecordDayDto>>(`${API_BASE}/list`, { params: httpParams, withCredentials: true });
  }

  getShiftList(): Observable<ShiftOption[]> {
    return this.http.get<ShiftOption[]>('/ar/attendanceSettings/api/shift', { withCredentials: true });
  }

  getAuthorizedDepartments(): Observable<AuthDeptNode[]> {
    return this.http.get<AuthDeptNode[]>('/ar/attendanceSettings/api/arSupervisor/authorized-departments', {
      withCredentials: true,
    });
  }
}
