import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResult, EvsResultDto, EvsResultSavePayload, EvsResumeOption, StandardRateResponse } from './evs-result.model';

const API_BASE = '/evs/manage/api';

/** Gọi lại nguyên các API JSON đã có sẵn ở EvsManageController (cũng chính là API mà trang Thymeleaf cũ
 *  viewEvsResult.html đang dùng) - không đổi backend. Combo phòng ban/mã hệ thống và tìm kiếm nhân viên
 *  dùng chung ChangeUserService (xem EvsResultComponent) - không lặp lại ở đây. */
@Injectable({ providedIn: 'root' })
export class EvsResultService {
  constructor(private readonly http: HttpClient) {}

  getResumeList(evsType: string): Observable<EvsResumeOption[]> {
    return this.http.get<EvsResumeOption[]>(`${API_BASE}/resume/evsResumeList`, {
      params: new HttpParams().set('evsType', evsType),
      withCredentials: true,
    });
  }

  getList(resumeSeq: string, deptNos: string, personId: string, statusFilter: string, evsType: string): Observable<EvsResultDto[]> {
    let params = new HttpParams().set('resumeSeq', resumeSeq).set('evsType', evsType);
    if (deptNos) params = params.set('deptNos', deptNos);
    if (personId) params = params.set('personId', personId);
    if (statusFilter) params = params.set('statusFilter', statusFilter);
    return this.http.get<EvsResultDto[]>(`${API_BASE}/evsResult/list`, { params, withCredentials: true });
  }

  getStdRate(resumeSeq: string): Observable<StandardRateResponse> {
    return this.http.get<StandardRateResponse>(`${API_BASE}/evsResult/stdRate`, {
      params: new HttpParams().set('resumeSeq', resumeSeq),
      withCredentials: true,
    });
  }

  evaluateEnd(resumeSeq: string): Observable<ApiResult> {
    return this.http.post<ApiResult>(`${API_BASE}/evsResult/evaluateEnd`, { resumeSeq }, { withCredentials: true });
  }

  changeStatus(seqList: string[], status: string): Observable<ApiResult> {
    return this.http.post<ApiResult>(`${API_BASE}/evsResult/changeStatus`, { seqList, status }, { withCredentials: true });
  }

  copyGrade(resumeSeq: string, seqList: string[]): Observable<ApiResult> {
    return this.http.post<ApiResult>(`${API_BASE}/evsResult/copyGrade`, { resumeSeq, seqList }, { withCredentials: true });
  }

  save(items: EvsResultSavePayload[]): Observable<ApiResult> {
    return this.http.post<ApiResult>(`${API_BASE}/evsResult/save`, items, { withCredentials: true });
  }
}
