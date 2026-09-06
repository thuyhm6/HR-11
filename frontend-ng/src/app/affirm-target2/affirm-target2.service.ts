import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ApiResult,
  DataTablesResponse,
  EvsAffirmTarget2DetailInfo,
  EvsAffirmTarget2Item,
  EvsAffirmTarget2Row,
  EvsGradeInfo,
  EvsResumeOption,
  GradeSummaryRow,
  SaveBatchPayload,
  SaveDetailPayload,
  StandardRateRaw,
} from './affirm-target2.model';

const API_BASE = '/evs/manage/api';

/**
 * Gọi lại nguyên các API JSON đã có sẵn ở EvsManageController (cũng chính là API mà trang Thymeleaf cũ
 * viewAffirmTarget2.html đang dùng) - không đổi backend.
 */
@Injectable({ providedIn: 'root' })
export class AffirmTarget2Service {
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
    return this.http.get<StandardRateRaw>(`${API_BASE}/affirmTarget2/standardRate`, {
      params: new HttpParams().set('resumeSeq', resumeSeq),
      withCredentials: true,
    });
  }

  getGradeSummary(resumeSeq: string): Observable<GradeSummaryRow[]> {
    return this.http.get<GradeSummaryRow[]>(`${API_BASE}/affirmTarget2/gradeSummary`, {
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
  }): Observable<DataTablesResponse<EvsAffirmTarget2Row>> {
    let httpParams = new HttpParams();
    for (const [key, value] of Object.entries(params)) {
      httpParams = httpParams.set(key, String(value));
    }
    return this.http.get<DataTablesResponse<EvsAffirmTarget2Row>>(`${API_BASE}/affirmTarget2/objectList`, {
      params: httpParams,
      withCredentials: true,
    });
  }

  saveBatch(payload: SaveBatchPayload): Observable<ApiResult> {
    return this.http.post<ApiResult>(`${API_BASE}/affirmTarget2/save`, payload, { withCredentials: true });
  }

  execute(payload: SaveBatchPayload): Observable<ApiResult> {
    return this.http.post<ApiResult>(`${API_BASE}/affirmTarget2/execute`, payload, { withCredentials: true });
  }

  getObjectInfo(evsObjectSeq: string): Observable<EvsAffirmTarget2DetailInfo> {
    return this.http.get<EvsAffirmTarget2DetailInfo>(`${API_BASE}/affirmTarget2/objectInfo`, {
      params: new HttpParams().set('evsObjectSeq', evsObjectSeq),
      withCredentials: true,
    });
  }

  getItemList(evsObjectSeq: string): Observable<EvsAffirmTarget2Item[]> {
    return this.http.get<EvsAffirmTarget2Item[]>(`${API_BASE}/affirmTarget2/itemList`, {
      params: new HttpParams().set('evsObjectSeq', evsObjectSeq),
      withCredentials: true,
    });
  }

  saveDetail(payload: SaveDetailPayload): Observable<ApiResult> {
    return this.http.post<ApiResult>(`${API_BASE}/affirmTarget2/saveDetail`, payload, { withCredentials: true });
  }

  confirmDetail(payload: SaveDetailPayload): Observable<ApiResult> {
    return this.http.post<ApiResult>(`${API_BASE}/affirmTarget2/confirmDetail`, payload, { withCredentials: true });
  }

  rejectDetail(seq: string): Observable<ApiResult> {
    return this.http.post<ApiResult>(`${API_BASE}/affirmTarget2/rejectDetail`, { seq }, { withCredentials: true });
  }
}
