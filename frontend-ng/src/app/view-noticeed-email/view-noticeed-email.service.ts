import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApplyDetailResponse, SyAffirmEmailDto } from './view-noticeed-email.model';

const API_BASE = '/ess/infoApply/api/noticeedEmail';
const OT_DETAIL_URL = '/ar/attendanceMintenance/api/overtime/detail';
const LEAVE_DETAIL_URL = '/ar/attendanceMintenance/api/leaveApply/detail';
const ATTENDANCE_EX_DETAIL_URL = '/ess/infoApplyAttendance/api/checkAttendanceEx/detail';

/**
 * Gọi lại nguyên các API JSON đã có sẵn ở backend mà viewNoticeedEmail.html (Thymeleaf) và 3 modal
 * chi tiết dùng chung (viewApprovaledOt/viewApprovaledLeave/viewAttendanceEx) đang dùng - không đổi backend.
 */
@Injectable({ providedIn: 'root' })
export class ViewNoticeedEmailService {
  constructor(private readonly http: HttpClient) {}

  getList(): Observable<SyAffirmEmailDto[]> {
    return this.http.get<SyAffirmEmailDto[]>(`${API_BASE}/list`, { withCredentials: true });
  }

  getOtDetail(applyNo: string, applyType: string): Observable<ApplyDetailResponse> {
    return this.getDetail(OT_DETAIL_URL, applyNo, applyType);
  }

  getLeaveDetail(applyNo: string, applyType: string): Observable<ApplyDetailResponse> {
    return this.getDetail(LEAVE_DETAIL_URL, applyNo, applyType);
  }

  getAttendanceExDetail(applyNo: string, applyType: string): Observable<ApplyDetailResponse> {
    return this.getDetail(ATTENDANCE_EX_DETAIL_URL, applyNo, applyType);
  }

  private getDetail(url: string, applyNo: string, applyType: string): Observable<ApplyDetailResponse> {
    const params = new HttpParams().set('applyNo', applyNo).set('applyType', applyType || '');
    return this.http.get<ApplyDetailResponse>(url, { params, withCredentials: true });
  }
}
