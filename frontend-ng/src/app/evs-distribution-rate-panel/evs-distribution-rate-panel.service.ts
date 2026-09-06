import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EvsResumeOption, EvsScoreDto, EvsScoreSavePayload } from './evs-distribution-rate-panel.model';

const API_BASE = '/evs/manage/api';

/** Gọi lại nguyên các API JSON đã có sẵn ở EvsManageController (cũng chính là API mà trang Thymeleaf cũ
 *  viewEvsDistributionRatePanel.html đang dùng) - không đổi backend. */
@Injectable({ providedIn: 'root' })
export class EvsDistributionRatePanelService {
  constructor(private readonly http: HttpClient) {}

  getResumeList(evsType: string): Observable<EvsResumeOption[]> {
    return this.http.get<EvsResumeOption[]>(`${API_BASE}/resume/evsResumeList`, {
      params: new HttpParams().set('evsType', evsType),
      withCredentials: true,
    });
  }

  getList(resumeSeq: string, scoreType: string, activity: string, evsType: string): Observable<EvsScoreDto[]> {
    let params = new HttpParams().set('evsType', evsType);
    if (resumeSeq) params = params.set('resumeSeq', resumeSeq);
    if (scoreType) params = params.set('scoreType', scoreType);
    if (activity) params = params.set('activity', activity);
    return this.http.get<EvsScoreDto[]>(`${API_BASE}/evsScore/list`, { params, withCredentials: true });
  }

  getOne(seq: string): Observable<EvsScoreDto> {
    return this.http.get<EvsScoreDto>(`${API_BASE}/evsScore/${encodeURIComponent(seq)}`, { withCredentials: true });
  }

  save(payload: EvsScoreSavePayload): Observable<{ success: boolean }> {
    return this.http.post<{ success: boolean }>(`${API_BASE}/evsScore/save`, payload, { withCredentials: true });
  }

  delete(seq: string): Observable<{ success: boolean }> {
    return this.http.post<{ success: boolean }>(`${API_BASE}/evsScore/delete`, { seq }, { withCredentials: true });
  }
}
