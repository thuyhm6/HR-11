import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ApplyPayloadRow,
  ApplyResult,
  AttendanceExApiRow,
  AttendanceExSearchParams,
  AuthDeptNode,
  CodeItem,
  ShiftOption,
} from './attendance-ex-batch-info.model';

const API_BASE = '/ess/infoApplyAttendance/api/attendanceEx';

/**
 * Gọi lại nguyên các API JSON đã có sẵn ở EssInfoApplyAttendanceController (không đổi backend) - bản
 * Angular của ess/infoApplyAttendance/viewAttendanceExForBatchInfoList.html (Thymeleaf + DataTables + jQuery).
 */
@Injectable({ providedIn: 'root' })
export class AttendanceExBatchInfoService {
  constructor(private readonly http: HttpClient) {}

  getList(params: AttendanceExSearchParams): Observable<AttendanceExApiRow[]> {
    let httpParams = new HttpParams();
    for (const [key, value] of Object.entries(params)) {
      if (value) httpParams = httpParams.set(key, value);
    }
    return this.http.get<AttendanceExApiRow[]>(`${API_BASE}/list`, { params: httpParams, withCredentials: true });
  }

  apply(rows: ApplyPayloadRow[]): Observable<ApplyResult> {
    return this.http.post<ApplyResult>(`${API_BASE}/apply`, rows, { withCredentials: true });
  }

  getShiftOptions(): Observable<ShiftOption[]> {
    return this.http.get<ShiftOption[]>('/ar/attendanceSettings/api/shift', { withCredentials: true });
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
}
