import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  PiciOtApiRow,
  PiciOtEmpInfo,
  PiciOtPayload,
  PiciOtResult,
  PiciOtSearchParams,
  PiciOtValidateInfo,
} from './pici-ot-affirm-batch.model';

const API_BASE = '/ess/infoApply/api/piciOtAffirm';

/** API của EssPiciOtAffirmController - Xin phép tăng ca hàng loạt (viewPiciOtAffirmLBatchList / viewArOvertimeManagent_fast bản gốc). */
@Injectable({ providedIn: 'root' })
export class PiciOtAffirmBatchService {
  constructor(private readonly http: HttpClient) {}

  getList(params: PiciOtSearchParams): Observable<PiciOtApiRow[]> {
    let httpParams = new HttpParams();
    for (const [key, value] of Object.entries(params)) {
      if (value) httpParams = httpParams.set(key, value);
    }
    return this.http.get<PiciOtApiRow[]>(`${API_BASE}/list`, { params: httpParams, withCredentials: true });
  }

  addEmptyRow(): Observable<PiciOtResult> {
    return this.http.post<PiciOtResult>(`${API_BASE}/add`, {}, { withCredentials: true });
  }

  getValidateInfo(personId: string, applyOtDate: string, otFromTime: string, otToTime: string, deductYn: string): Observable<PiciOtValidateInfo> {
    const params = new HttpParams()
      .set('personId', personId)
      .set('applyOtDate', applyOtDate)
      .set('otFromTime', otFromTime)
      .set('otToTime', otToTime)
      .set('deductYn', deductYn);
    return this.http.get<PiciOtValidateInfo>(`${API_BASE}/validate-info`, { params, withCredentials: true });
  }

  getEmpOtInfo(personId: string, applyOtDate: string): Observable<PiciOtEmpInfo> {
    const params = new HttpParams().set('personId', personId).set('applyOtDate', applyOtDate);
    return this.http.get<PiciOtEmpInfo>(`${API_BASE}/emp-ot-info`, { params, withCredentials: true });
  }

  getDefaultTime(applyOtDate: string): Observable<PiciOtValidateInfo> {
    const params = new HttpParams().set('applyOtDate', applyOtDate);
    return this.http.get<PiciOtValidateInfo>(`${API_BASE}/default-time`, { params, withCredentials: true });
  }

  getAffirmorPreview(personId: string, otTypeCode: string, applyLength: string): Observable<{ affirmStr: string }> {
    const params = new HttpParams().set('personId', personId).set('otTypeCode', otTypeCode).set('applyLength', applyLength);
    return this.http.get<{ affirmStr: string }>(`${API_BASE}/affirmor-preview`, { params, withCredentials: true });
  }

  /** mode = 'hr': trang HR viewArOvertimeManagent_fast (quy tắc kiểm tra riêng ở backend). */
  save(rows: PiciOtPayload[], mode: string): Observable<PiciOtResult> {
    const params = new HttpParams().set('mode', mode);
    return this.http.post<PiciOtResult>(`${API_BASE}/save`, rows, { params, withCredentials: true });
  }

  cancel(rows: Partial<PiciOtPayload>[], mode: string): Observable<PiciOtResult> {
    const params = new HttpParams().set('mode', mode);
    return this.http.post<PiciOtResult>(`${API_BASE}/cancel`, rows, { params, withCredentials: true });
  }
}
