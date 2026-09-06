import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ApiResult,
  DataTablesResponse,
  EvsAffirmTarget2AbilityDetailInfo,
  EvsAffirmTarget2Row,
  EvsGradeInfo,
  EvsItemAbility,
  EvsResumeOption,
  EvsScoreOption,
  GradeSummaryRow,
  SaveDetailPayload,
  StandardRateRaw,
} from './affirm-target2-ability.model';

const API_BASE = '/evs/manage/api';

/**
 * Gọi lại nguyên các API JSON đã có sẵn ở EvsManageController (cũng chính là API mà trang Thymeleaf cũ
 * viewAffirmTarget2Ability.html đang dùng) - không đổi backend. Danh sách nhân viên/phân bổ cấp/tỷ lệ
 * tiêu chuẩn dùng chung nguyên endpoint /affirmTarget2/* với AffirmTarget2Component (bản gốc cũng gọi
 * thẳng các endpoint này) - chỉ /affirmTarget2Ability/* là endpoint riêng cho modal chi tiết năng lực.
 */
@Injectable({ providedIn: 'root' })
export class AffirmTarget2AbilityService {
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

  getScoreOptions(resumeSeq: string): Observable<EvsScoreOption[]> {
    return this.http.get<EvsScoreOption[]>(`${API_BASE}/evsParam/list`, {
      params: new HttpParams().set('resumeSeq', resumeSeq).set('paramType', 'ITEM'),
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

  getObjectInfo(evsObjectSeq: string): Observable<EvsAffirmTarget2AbilityDetailInfo> {
    return this.http.get<EvsAffirmTarget2AbilityDetailInfo>(`${API_BASE}/affirmTarget2/objectInfo`, {
      params: new HttpParams().set('evsObjectSeq', evsObjectSeq),
      withCredentials: true,
    });
  }

  getItemList(evsObjectSeq: string): Observable<EvsItemAbility[]> {
    return this.http.get<EvsItemAbility[]>(`${API_BASE}/affirmTarget2Ability/itemList`, {
      params: new HttpParams().set('evsObjectSeq', evsObjectSeq),
      withCredentials: true,
    });
  }

  saveDetail(payload: SaveDetailPayload): Observable<ApiResult> {
    return this.http.post<ApiResult>(`${API_BASE}/affirmTarget2Ability/saveDetail`, payload, { withCredentials: true });
  }

  confirmDetail(payload: SaveDetailPayload): Observable<ApiResult> {
    return this.http.post<ApiResult>(`${API_BASE}/affirmTarget2Ability/confirmDetail`, payload, { withCredentials: true });
  }

  rejectDetail(seq: string): Observable<ApiResult> {
    return this.http.post<ApiResult>(`${API_BASE}/affirmTarget2Ability/rejectDetail`, { seq }, { withCredentials: true });
  }
}
