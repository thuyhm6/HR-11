import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResult, EvsPersonalTargetInfo, EvsPersonalTargetItem, EvsResumeOption, SavePayload } from './evs-by-self-htsv.model';

const API_BASE = '/evs/manage/api';

/**
 * Gọi lại nguyên các API JSON đã có sẵn ở EvsManageController (cũng chính là API mà trang Thymeleaf cũ
 * viewEvsBySelfHTSV.html đang dùng) - không đổi backend. getObjectInfo/getItemList dùng chung 2 endpoint
 * /personalTarget/objectInfo và /personalTarget/itemList với RegPersonalTargetComponent (bản gốc
 * viewEvsBySelfHTSV.html cũng gọi thẳng 2 endpoint này thay vì /evsBySelfHTSV/objectInfo - endpoint
 * evsBySelfHTSV/objectInfo tồn tại ở backend nhưng không được trang gốc dùng tới nên không dùng lại ở
 * đây). Chỉ /evsBySelfHTSV/save là endpoint riêng cho trang này.
 */
@Injectable({ providedIn: 'root' })
export class EvsBySelfHtsvService {
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

  save(payload: SavePayload): Observable<ApiResult> {
    return this.http.post<ApiResult>(`${API_BASE}/evsBySelfHTSV/save`, payload, { withCredentials: true });
  }
}
