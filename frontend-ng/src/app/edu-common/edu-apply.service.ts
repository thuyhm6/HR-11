import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EduApplyCourse, EduApplyRow, EduApplySearch, EduApplySituationResponse } from './edu-apply.model';
import { EduActionResult, EduEmployee } from './edu-common.model';

const API_BASE = '/edu/traineducation/api/courseApply';

/**
 * API của EduCourseApplyController - dùng chung cho các trang Đăng ký khóa học, Phê duyệt, Xác nhận, Tình hình đăng ký.
 */
@Injectable({ providedIn: 'root' })
export class EduApplyService {
  constructor(private readonly http: HttpClient) {}

  getApplyCourses(search: EduApplySearch): Observable<EduApplyCourse[]> {
    return this.http.get<EduApplyCourse[]>(`${API_BASE}/courses`, { params: toParams(search), withCredentials: true });
  }

  getDefaultMakers(): Observable<EduEmployee[]> {
    return this.http.get<EduEmployee[]>(`${API_BASE}/defaultMakers`, { withCredentials: true });
  }

  submit(courses: { basicNo: string; applyTask: string }[], makerPersonIds: string[]): Observable<EduActionResult> {
    return this.http.post<EduActionResult>(`${API_BASE}/submit`, { courses, makerPersonIds }, { withCredentials: true });
  }

  getMakerRows(search: EduApplySearch): Observable<EduApplyRow[]> {
    return this.http.get<EduApplyRow[]>(`${API_BASE}/maker/list`, { params: toParams(search), withCredentials: true });
  }

  updateApplyFlag(applyNos: string[], flag: string): Observable<EduActionResult> {
    return this.http.post<EduActionResult>(`${API_BASE}/maker/update`, { applyNos, flag }, { withCredentials: true });
  }

  getConfirmRows(search: EduApplySearch): Observable<EduApplyRow[]> {
    return this.http.get<EduApplyRow[]>(`${API_BASE}/confirm/list`, { params: toParams(search), withCredentials: true });
  }

  updateConfirmFlag(applyNos: string[], flag: string): Observable<EduActionResult> {
    return this.http.post<EduActionResult>(`${API_BASE}/confirm/update`, { applyNos, flag }, { withCredentials: true });
  }

  getSituation(search: EduApplySearch): Observable<EduApplySituationResponse> {
    return this.http.get<EduApplySituationResponse>(`${API_BASE}/situation/list`, { params: toParams(search), withCredentials: true });
  }

  cancel(applyNo: string): Observable<EduActionResult> {
    return this.http.post<EduActionResult>(`${API_BASE}/situation/cancel`, { applyNo }, { withCredentials: true });
  }
}

function toParams(search: EduApplySearch): HttpParams {
  let params = new HttpParams();
  Object.entries(search).forEach(([k, v]) => {
    if (v !== null && v !== undefined && String(v).trim() !== '') params = params.set(k, String(v).trim());
  });
  return params;
}
