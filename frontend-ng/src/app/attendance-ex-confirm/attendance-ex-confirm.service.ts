import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AttendanceExConfirmRow,
  AttendanceExConfirmSearchParams,
  AttendanceExDetailResponse,
  ConfirmResult,
  DataTablesResponse,
} from './attendance-ex-confirm.model';

const API_BASE = '/ess/arConfirm/api/attendanceExConfirm';
const DETAIL_URL = '/ess/infoApplyAttendance/api/checkAttendanceEx/detail';

/**
 * Gọi lại nguyên các API JSON đã có sẵn ở EssLeaveConfirmController (không đổi backend) - bản Angular
 * của ess/arConfirm/viewAttendanceExConfirm.html (Thymeleaf + DataTables serverSide).
 */
@Injectable({ providedIn: 'root' })
export class AttendanceExConfirmService {
  constructor(private readonly http: HttpClient) {}

  getPageList(params: AttendanceExConfirmSearchParams): Observable<DataTablesResponse<AttendanceExConfirmRow>> {
    let httpParams = new HttpParams();
    for (const [key, value] of Object.entries(params)) {
      httpParams = httpParams.set(key, String(value));
    }
    return this.http.get<DataTablesResponse<AttendanceExConfirmRow>>(`${API_BASE}/list`, {
      params: httpParams,
      withCredentials: true,
    });
  }

  confirm(applyNo: string, flag: '1' | '2', hrComment: string): Observable<ConfirmResult> {
    return this.http.post<ConfirmResult>(`${API_BASE}/confirm`, { applyNo, flag, hrComment }, { withCredentials: true });
  }

  confirmBatch(applyNos: string[], flag: '1' | '2', hrComment: string): Observable<ConfirmResult> {
    return this.http.post<ConfirmResult>(
      `${API_BASE}/confirmBatch`,
      { applyNos, flag, hrComment },
      { withCredentials: true },
    );
  }

  getDetail(applyNo: string, applyType: string): Observable<AttendanceExDetailResponse> {
    const params = new HttpParams().set('applyNo', applyNo).set('applyType', applyType || '');
    return this.http.get<AttendanceExDetailResponse>(DETAIL_URL, { params, withCredentials: true });
  }
}
