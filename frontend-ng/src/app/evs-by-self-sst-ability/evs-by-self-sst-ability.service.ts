import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ApiResult,
  EvsItemAbility,
  EvsPersonalTargetInfo,
  EvsResumeOption,
  EvsScoreOption,
  SavePayload,
} from './evs-by-self-sst-ability.model';

const API_BASE = '/evs/manage/api';

/**
 * Gọi lại nguyên các API JSON đã có sẵn ở EvsManageController (cũng chính là API mà trang Thymeleaf cũ
 * viewEvsBySelfSSTAbility.html đang dùng) - không đổi backend. getObjectInfo dùng chung endpoint
 * /personalTarget/objectInfo với RegPersonalTargetComponent (bản gốc cũng gọi thẳng endpoint này).
 */
@Injectable({ providedIn: 'root' })
export class EvsBySelfSSTAbilityService {
  constructor(private readonly http: HttpClient) {}

  getResumeList(evsType: string, evsLevel: string): Observable<EvsResumeOption[]> {
    return this.http.get<EvsResumeOption[]>(`${API_BASE}/resume/evsResumeList`, {
      params: new HttpParams().set('evsType', evsType).set('evsLevel', evsLevel),
      withCredentials: true,
    });
  }

  getObjectInfo(resumeSeq: string): Observable<EvsPersonalTargetInfo> {
    return this.http.get<EvsPersonalTargetInfo>(`${API_BASE}/personalTarget/objectInfo`, {
      params: new HttpParams().set('resumeSeq', resumeSeq),
      withCredentials: true,
    });
  }

  getScoreOptions(resumeSeq: string): Observable<EvsScoreOption[]> {
    return this.http.get<EvsScoreOption[]>(`${API_BASE}/evsParam/list`, {
      params: new HttpParams().set('resumeSeq', resumeSeq).set('paramType', 'ITEM'),
      withCredentials: true,
    });
  }

  getItemList(resumeSeq: string): Observable<EvsItemAbility[]> {
    return this.http.get<EvsItemAbility[]>(`${API_BASE}/evsBySelfSSTAbility/itemList`, {
      params: new HttpParams().set('resumeSeq', resumeSeq),
      withCredentials: true,
    });
  }

  save(payload: SavePayload): Observable<ApiResult> {
    return this.http.post<ApiResult>(`${API_BASE}/evsBySelfSSTAbility/save`, payload, { withCredentials: true });
  }
}
