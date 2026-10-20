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
 * API ở EssInfoApplyAttendanceController - bản Angular của ess/infoApplyAttendance/viewAttendanceExForBatchInfoList.jsp
 * (Hanwha_HTSV). getShiftOptions/getCodeList/getAuthorizedDepartments được các trang xin phép hàng loạt khác dùng lại.
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

  /** Tuyến duyệt dự kiến theo NV (personId -> chuỗi HTML) - getAffirmor_ess3434 bản gốc, gọi 1 lần cho cả trang. */
  getAffirmorPreview(personIds: string[]): Observable<Record<string, string>> {
    return this.http.post<Record<string, string>>(`${API_BASE}/affirmor-preview`, personIds, { withCredentials: true });
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
