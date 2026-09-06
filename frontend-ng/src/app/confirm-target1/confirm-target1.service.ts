import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ApiResult,
  ConfirmPayload,
  DataTablesResponse,
  EvsConfirmTarget1Row,
  EvsPersonalTargetInfo,
  EvsPersonalTargetItem,
  EvsResumeOption,
} from './confirm-target1.model';

const API_BASE = '/evs/manage/api';

/**
 * Gọi lại nguyên các API JSON đã có sẵn ở EvsManageController (cũng chính là API mà trang Thymeleaf cũ
 * viewConfirmTarget1.html đang dùng) - không đổi backend. getItemList dùng chung endpoint
 * /personalTarget/itemList với RegPersonalTargetComponent (chỉ đọc, không sửa/xóa ở màn xác nhận).
 */
@Injectable({ providedIn: 'root' })
export class ConfirmTarget1Service {
  constructor(private readonly http: HttpClient) {}

  getResumeList(evsType: string, evsLevel: string): Observable<EvsResumeOption[]> {
    return this.http.get<EvsResumeOption[]>(`${API_BASE}/resume/evsResumeList`, {
      params: new HttpParams().set('evsType', evsType).set('evsLevel', evsLevel),
      withCredentials: true,
    });
  }

  getObjectList(params: {
    resumeSeq: string;
    evsType: string;
    affirmLevel: string;
    draw: number;
    start: number;
    length: number;
  }): Observable<DataTablesResponse<EvsConfirmTarget1Row>> {
    let httpParams = new HttpParams();
    for (const [key, value] of Object.entries(params)) {
      httpParams = httpParams.set(key, String(value));
    }
    return this.http.get<DataTablesResponse<EvsConfirmTarget1Row>>(`${API_BASE}/confirmTarget1/objectList`, {
      params: httpParams,
      withCredentials: true,
    });
  }

  getObjectInfo(evsObjectSeq: string): Observable<EvsPersonalTargetInfo> {
    return this.http.get<EvsPersonalTargetInfo>(`${API_BASE}/confirmTarget1/objectInfo`, {
      params: new HttpParams().set('evsObjectSeq', evsObjectSeq),
      withCredentials: true,
    });
  }

  getItemList(evsObjectSeq: string): Observable<EvsPersonalTargetItem[]> {
    return this.http.get<EvsPersonalTargetItem[]>(`${API_BASE}/personalTarget/itemList`, {
      params: new HttpParams().set('evsObjectSeq', evsObjectSeq),
      withCredentials: true,
    });
  }

  confirm(payload: ConfirmPayload): Observable<ApiResult> {
    return this.http.post<ApiResult>(`${API_BASE}/confirmTarget1/confirm`, payload, { withCredentials: true });
  }
}
