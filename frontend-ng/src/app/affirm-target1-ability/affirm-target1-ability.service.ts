import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ApiResult,
  DataTablesResponse,
  EvsAffirmTarget1AbilityDetailInfo,
  EvsAffirmTarget1Row,
  EvsGradeInfo,
  EvsItemAbility,
  EvsResumeOption,
  EvsScoreOption,
  GradeSummaryRow,
  SaveDetailPayload,
  StandardRateRaw,
} from './affirm-target1-ability.model';

const API_BASE = '/evs/manage/api';

/**
 * Gọi lại nguyên các API JSON đã có sẵn ở EvsManageController (cũng chính là API mà trang Thymeleaf cũ
 * viewAffirmTarget1Ability.html đang dùng) - không đổi backend. Danh sách nhân viên/phân bổ cấp/tỷ lệ
 * tiêu chuẩn dùng chung nguyên endpoint /affirmTarget1/* với AffirmTarget1Component (bản gốc cũng gọi
 * thẳng các endpoint này) - chỉ /affirmTarget1Ability/* là endpoint riêng cho modal chi tiết năng lực.
 */
@Injectable({ providedIn: 'root' })
export class AffirmTarget1AbilityService {
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

  getObjectInfo(evsObjectSeq: string): Observable<EvsAffirmTarget1AbilityDetailInfo> {
    return this.http.get<EvsAffirmTarget1AbilityDetailInfo>(`${API_BASE}/affirmTarget1/objectInfo`, {
      params: new HttpParams().set('evsObjectSeq', evsObjectSeq),
      withCredentials: true,
    });
  }

  getItemList(evsObjectSeq: string): Observable<EvsItemAbility[]> {
    return this.http.get<EvsItemAbility[]>(`${API_BASE}/affirmTarget1Ability/itemList`, {
      params: new HttpParams().set('evsObjectSeq', evsObjectSeq),
      withCredentials: true,
    });
  }

  saveDetail(payload: SaveDetailPayload): Observable<ApiResult> {
    return this.http.post<ApiResult>(`${API_BASE}/affirmTarget1Ability/saveDetail`, payload, { withCredentials: true });
  }

  confirmDetail(payload: SaveDetailPayload): Observable<ApiResult> {
    return this.http.post<ApiResult>(`${API_BASE}/affirmTarget1Ability/confirmDetail`, payload, { withCredentials: true });
  }

  rejectDetail(seq: string): Observable<ApiResult> {
    return this.http.post<ApiResult>(`${API_BASE}/affirmTarget1Ability/rejectDetail`, { seq }, { withCredentials: true });
  }
}
