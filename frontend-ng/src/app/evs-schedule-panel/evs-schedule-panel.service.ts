import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CodeItem, EvsResumeOption, EvsScheduleDto, EvsScheduleSavePayload } from './evs-schedule-panel.model';

const API_BASE = '/evs/manage/api';

/** Gọi lại nguyên các API JSON đã có sẵn ở EvsManageController (cũng chính là API mà trang Thymeleaf cũ
 *  viewEvsSchedulePanel.html đang dùng) - không đổi backend. */
@Injectable({ providedIn: 'root' })
export class EvsSchedulePanelService {
  constructor(private readonly http: HttpClient) {}

  getResumeList(evsType: string): Observable<EvsResumeOption[]> {
    return this.http.get<EvsResumeOption[]>(`${API_BASE}/resume/evsResumeList`, {
      params: new HttpParams().set('evsType', evsType),
      withCredentials: true,
    });
  }

  getScheduleList(resumeSeq: string, scheduleType: string, evsType: string): Observable<EvsScheduleDto[]> {
    return this.http.get<EvsScheduleDto[]>(`${API_BASE}/schedule/list`, {
      params: new HttpParams().set('resumeSeq', resumeSeq).set('scheduleType', scheduleType).set('evsType', evsType),
      withCredentials: true,
    });
  }

  saveBatch(payload: EvsScheduleSavePayload[]): Observable<{ success: boolean }> {
    return this.http.post<{ success: boolean }>(`${API_BASE}/schedule/save`, payload, { withCredentials: true });
  }

  deleteBatch(seqs: string[]): Observable<{ success: boolean }> {
    return this.http.post<{ success: boolean }>(`${API_BASE}/schedule/delete`, { seqs }, { withCredentials: true });
  }

  /** Combo "Giai đoạn thực hiện" (parentCodeNo=14015065) - đúng giá trị hardcode data-parent-code ở bản
   *  Thymeleaf gốc. */
  getCodeList(parentCodeNo: string): Observable<CodeItem[]> {
    return this.http.get<CodeItem[]>('/sys/api/getCode/list', {
      params: new HttpParams().set('parentCodeNo', parentCodeNo),
      withCredentials: true,
    });
  }
}
