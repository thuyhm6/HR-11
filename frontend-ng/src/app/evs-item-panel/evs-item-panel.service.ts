import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CodeItem, EvsItemPanelRow, EvsResumeOption } from './evs-item-panel.model';

const API_BASE = '/evs/manage/api';

/** Gọi lại nguyên các API JSON đã có sẵn ở EvsManageController (cũng chính là API mà trang Thymeleaf cũ
 *  viewEvsItemPanel.html đang dùng) - không đổi backend. `api` là tiền tố path riêng của từng tab
 *  (evsItem/evsItemParam - xem TAB_META ở component) - cả 2 namespace đều cùng chung 1 khuôn REST
 *  .../list, .../save (POST List), .../delete (POST {seqs}) nên gộp chung được thành method generic. */
@Injectable({ providedIn: 'root' })
export class EvsItemPanelService {
  constructor(private readonly http: HttpClient) {}

  getResumeList(evsType: string): Observable<EvsResumeOption[]> {
    return this.http.get<EvsResumeOption[]>(`${API_BASE}/resume/evsResumeList`, {
      params: new HttpParams().set('evsType', evsType),
      withCredentials: true,
    });
  }

  getList(api: string, resumeSeq: string, groupNo: string, evsGroup: string, evsOccGroup: string): Observable<EvsItemPanelRow[]> {
    let params = new HttpParams().set('resumeSeq', resumeSeq);
    if (groupNo) params = params.set('groupNo', groupNo);
    if (evsGroup) params = params.set('evsGroup', evsGroup);
    if (evsOccGroup) params = params.set('evsOccGroup', evsOccGroup);
    return this.http.get<EvsItemPanelRow[]>(`${API_BASE}/${api}/list`, { params, withCredentials: true });
  }

  saveBatch(api: string, payload: Record<string, unknown>[]): Observable<{ success: boolean }> {
    return this.http.post<{ success: boolean }>(`${API_BASE}/${api}/save`, payload, { withCredentials: true });
  }

  deleteBatch(api: string, seqs: string[]): Observable<{ success: boolean }> {
    return this.http.post<{ success: boolean }>(`${API_BASE}/${api}/delete`, { seqs }, { withCredentials: true });
  }

  /** Combo "Nhóm nhân viên"/"Nhóm chức vụ" (EVS_PARAM paramType=GROUP/FAMILY) - dùng chung endpoint
   *  evsParam/list đã có ở EvsParamPanelComponent (trang chị em), không phụ thuộc lẫn nhau về code. */
  getEvsParamOptions(resumeSeq: string, paramType: 'GROUP' | 'FAMILY'): Observable<CodeItem[]> {
    return this.http.get<CodeItem[]>(`${API_BASE}/evsParam/list`, {
      params: new HttpParams().set('resumeSeq', resumeSeq).set('paramType', paramType),
      withCredentials: true,
    });
  }

  /** Combo mã hệ thống "Nhóm chỉ tiêu" (parentCodeNo=14015376 - đúng giá trị hardcode ở bản gốc). */
  getCodeList(parentCodeNo: string): Observable<CodeItem[]> {
    return this.http.get<CodeItem[]>('/sys/api/getCode/list', {
      params: new HttpParams().set('parentCodeNo', parentCodeNo),
      withCredentials: true,
    });
  }
}
