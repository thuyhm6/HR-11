import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AttendanceSearchParams,
  AttendanceSearchRow,
  AuthDeptNode,
  CodeItem,
  ItemOption,
  ShiftOption,
  SyncCleversePayload,
  SyncCleverseResult,
} from './attendance-search.model';

const API_BASE = '/ar/attendanceMintenance/api';

/**
 * Gọi lại nguyên các API JSON đã có sẵn ở ArAttendanceSearchController (không đổi backend) - bản
 * Angular của ar/attendanceMintenance/viewAttendanceManagentForSerchInfoList.html (Thymeleaf + DataTables).
 */
@Injectable({ providedIn: 'root' })
export class AttendanceSearchService {
  constructor(private readonly http: HttpClient) {}

  getList(params: AttendanceSearchParams): Observable<AttendanceSearchRow[]> {
    let httpParams = new HttpParams();
    for (const [key, value] of Object.entries(params)) {
      if (value) httpParams = httpParams.set(key, value);
    }
    return this.http.get<AttendanceSearchRow[]>(`${API_BASE}/attendanceSearch/list`, {
      params: httpParams,
      withCredentials: true,
    });
  }

  getShiftOptions(): Observable<ShiftOption[]> {
    return this.http.get<ShiftOption[]>('/ar/attendanceSettings/api/shift', { withCredentials: true });
  }

  getItemOptions(): Observable<ItemOption[]> {
    return this.http.get<ItemOption[]>('/ar/attendanceSettings/api/arItemParam/options', {
      params: new HttpParams().set('type', 'attendance'),
      withCredentials: true,
    });
  }

  getCodeList(parentCodeNo: string): Observable<CodeItem[]> {
    return this.http.get<CodeItem[]>('/sys/api/getCode/list', {
      params: new HttpParams().set('parentCodeNo', parentCodeNo),
      withCredentials: true,
    });
  }

  getAuthorizedDepartments(): Observable<AuthDeptNode[]> {
    return this.http.get<AuthDeptNode[]>('/ar/attendanceSettings/api/arSupervisor/authorized-departments', {
      withCredentials: true,
    });
  }

  syncCleverseTest(payload: SyncCleversePayload): Observable<SyncCleverseResult> {
    return this.http.post<SyncCleverseResult>(`${API_BASE}/syncCleverse/test`, payload, { withCredentials: true });
  }
}
