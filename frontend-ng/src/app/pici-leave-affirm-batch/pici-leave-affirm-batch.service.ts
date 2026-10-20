import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  PiciLeaveApiRow,
  PiciLeaveEmpInfo,
  PiciLeaveLength,
  PiciLeavePayload,
  PiciLeaveResult,
  PiciLeaveSearchParams,
} from './pici-leave-affirm-batch.model';

const API_BASE = '/ess/infoApplyAttendance/api/piciLeave';

/** API của EssPiciLeaveAffirmController - Xin nghỉ phép hàng loạt (viewApplyAttenanceBatchInfoList / viewApplyAttenanceManagentInfoList_new bản gốc). */
@Injectable({ providedIn: 'root' })
export class PiciLeaveAffirmBatchService {
  constructor(private readonly http: HttpClient) {}

  getList(params: PiciLeaveSearchParams): Observable<PiciLeaveApiRow[]> {
    let httpParams = new HttpParams();
    for (const [key, value] of Object.entries(params)) {
      if (value) httpParams = httpParams.set(key, value);
    }
    return this.http.get<PiciLeaveApiRow[]>(`${API_BASE}/list`, { params: httpParams, withCredentials: true });
  }

  addEmptyRow(): Observable<PiciLeaveResult> {
    return this.http.post<PiciLeaveResult>(`${API_BASE}/add`, {}, { withCredentials: true });
  }

  getLeaveLength(personId: string, fromDate: string, fromTime: string, toDate: string, toTime: string, leaveTypeCode: string): Observable<PiciLeaveLength> {
    const params = new HttpParams()
      .set('personId', personId)
      .set('fromDate', fromDate)
      .set('fromTime', fromTime)
      .set('toDate', toDate)
      .set('toTime', toTime)
      .set('leaveTypeCode', leaveTypeCode);
    return this.http.get<PiciLeaveLength>(`${API_BASE}/leave-length`, { params, withCredentials: true });
  }

  getEmpLeaveInfo(personId: string, applyDate: string): Observable<PiciLeaveEmpInfo> {
    const params = new HttpParams().set('personId', personId).set('applyDate', applyDate);
    return this.http.get<PiciLeaveEmpInfo>(`${API_BASE}/emp-leave-info`, { params, withCredentials: true });
  }

  getAffirmorPreview(personId: string, leaveTypeCode: string, applyLength: string): Observable<{ affirmStr: string }> {
    const params = new HttpParams().set('personId', personId).set('leaveTypeCode', leaveTypeCode).set('applyLength', applyLength);
    return this.http.get<{ affirmStr: string }>(`${API_BASE}/affirmor-preview`, { params, withCredentials: true });
  }

  /** mode = 'hr': trang HR viewApplyAttenanceManagentInfoList_new (quy tắc kiểm tra riêng ở backend). */
  save(rows: PiciLeavePayload[], mode: string): Observable<PiciLeaveResult> {
    const params = new HttpParams().set('mode', mode);
    return this.http.post<PiciLeaveResult>(`${API_BASE}/save`, rows, { params, withCredentials: true });
  }

  cancel(rows: PiciLeavePayload[], mode: string): Observable<PiciLeaveResult> {
    const params = new HttpParams().set('mode', mode);
    return this.http.post<PiciLeaveResult>(`${API_BASE}/cancel`, rows, { params, withCredentials: true });
  }
}
