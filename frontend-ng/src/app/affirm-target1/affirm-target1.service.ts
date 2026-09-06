import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ApiResult,
  DataTablesResponse,
  EvsAffirmTarget1DetailInfo,
  EvsAffirmTarget1Item,
  EvsAffirmTarget1Row,
  EvsGradeInfo,
  EvsResumeOption,
  GradeSummaryRow,
  SaveBatchPayload,
  SaveDetailPayload,
  StandardRateRaw,
} from './affirm-target1.model';

const API_BASE = '/evs/manage/api';

/**
 * Gọi lại nguyên các API JSON đã có sẵn ở EvsManageController (cũng chính là API mà trang Thymeleaf cũ
 * viewAffirmTarget1.html đang dùng) - không đổi backend.
 */
@Injectable({ providedIn: 'root' })
export class AffirmTarget1Service {
  constructor(private readonly http: HttpClient) {}

  getResumeList(evsType: string, evsLevel: string): Observable<EvsResumeOption[]> {
    return this.http.get<EvsResumeOption[]>(`${API_BASE}/resume/evsResumeList`, {
      params: new HttpParams().set('evsType', evsType).set('evsLevel', evsLevel),
      withCredentials: true,
    });
  }

  getGradeList(resumeSeq: string, evsType: string): Observable<EvsGradeInfo[]> {
    return this.http.get<EvsGradeInfo[]>(`${API_BASE}/evsGrade/list`, {
      params: new HttpParams().set('resumeSeq', resumeSeq).set('evsType', evsType),
      withCredentials: true,
    });
  }

  getStandardRate(resumeSeq: string): Observable<StandardRateRaw> {
    return this.http.get<StandardRateRaw>(`${API_BASE}/affirmTarget1/standardRate`, {
      params: new HttpParams().set('resumeSeq', resumeSeq),
      withCredentials: true,
    });
  }

  getGradeSummary(resumeSeq: string): Observable<GradeSummaryRow[]> {
    return this.http.get<GradeSummaryRow[]>(`${API_BASE}/affirmTarget1/gradeSummary`, {
      params: new HttpParams().set('resumeSeq', resumeSeq),
      withCredentials: true,
    });
  }

  getObjectList(params: {
    resumeSeq: string;
    evsType: string;
    draw: number;
    start: number;
    length: number;
  }): Observable<DataTablesResponse<EvsAffirmTarget1Row>> {
    let httpParams = new HttpParams();
    for (const [key, value] of Object.entries(params)) {
      httpParams = httpParams.set(key, String(value));
    }
    return this.http.get<DataTablesResponse<EvsAffirmTarget1Row>>(`${API_BASE}/affirmTarget1/objectList`, {
      params: httpParams,
      withCredentials: true,
    });
  }

  saveBatch(payload: SaveBatchPayload): Observable<ApiResult> {
    return this.http.post<ApiResult>(`${API_BASE}/affirmTarget1/save`, payload, { withCredentials: true });
  }

  execute(payload: SaveBatchPayload): Observable<ApiResult> {
    return this.http.post<ApiResult>(`${API_BASE}/affirmTarget1/execute`, payload, { withCredentials: true });
  }

  getObjectInfo(evsObjectSeq: string): Observable<EvsAffirmTarget1DetailInfo> {
    return this.http.get<EvsAffirmTarget1DetailInfo>(`${API_BASE}/affirmTarget1/objectInfo`, {
      params: new HttpParams().set('evsObjectSeq', evsObjectSeq),
      withCredentials: true,
    });
  }

  getItemList(evsObjectSeq: string): Observable<EvsAffirmTarget1Item[]> {
    return this.http.get<EvsAffirmTarget1Item[]>(`${API_BASE}/affirmTarget1/itemList`, {
      params: new HttpParams().set('evsObjectSeq', evsObjectSeq),
      withCredentials: true,
    });
  }

  saveDetail(payload: SaveDetailPayload): Observable<ApiResult> {
    return this.http.post<ApiResult>(`${API_BASE}/affirmTarget1/saveDetail`, payload, { withCredentials: true });
  }

  confirmDetail(payload: SaveDetailPayload): Observable<ApiResult> {
    return this.http.post<ApiResult>(`${API_BASE}/affirmTarget1/confirmDetail`, payload, { withCredentials: true });
  }

  rejectDetail(seq: string): Observable<ApiResult> {
    return this.http.post<ApiResult>(`${API_BASE}/affirmTarget1/rejectDetail`, { seq }, { withCredentials: true });
  }
}
