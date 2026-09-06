import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ApiResult,
  EvsPersonalTargetInfo,
  EvsPersonalTargetItem,
  EvsResumeOption,
  SaveItemPayload,
} from './reg-personal-target.model';

const API_BASE = '/evs/manage/api';

/**
 * Gọi lại nguyên các API JSON đã có sẵn ở EvsManageController (cũng chính là API mà trang Thymeleaf cũ
 * viewRegPersonalTarget.html đang dùng) - không đổi backend.
 */
@Injectable({ providedIn: 'root' })
export class RegPersonalTargetService {
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

  getItemList(evsObjectSeq: string): Observable<EvsPersonalTargetItem[]> {
    return this.http.get<EvsPersonalTargetItem[]>(`${API_BASE}/personalTarget/itemList`, {
      params: new HttpParams().set('evsObjectSeq', evsObjectSeq),
      withCredentials: true,
    });
  }

  saveItem(payload: SaveItemPayload): Observable<ApiResult> {
    return this.http.post<ApiResult>(`${API_BASE}/personalTarget/saveItem`, payload, { withCredentials: true });
  }

  deleteItem(seq: string): Observable<ApiResult> {
    return this.http.post<ApiResult>(`${API_BASE}/personalTarget/deleteItem`, { seq }, { withCredentials: true });
  }
}
