import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  CancelResult,
  CodeItem,
  EssBasicInfoDto,
  LeaveApplyDetailResponse,
  MyLeaveApplyRow,
  MyLeaveApplySearchParams,
} from './apply-attendance-info-list.model';

const API_BASE = '/ess/infoApplyAttendance/api/myLeaveApply';

/**
 * Gọi lại nguyên các API JSON đã có sẵn (không đổi backend) - bản Angular của
 * ess/infoApplyAttendance/viewApplyAttendanceInfoList.html (Thymeleaf + jQuery). getBasicInfo dùng
 * chung endpoint /api/personalInfo/myInfo mà fragments/essEmpInfoCard.html gốc gọi qua
 * loadEssEmpInfoCard(). getDetail gọi thẳng sang EssLeaveApplyController - đúng API mà trang gốc dùng
 * để mở modal chi tiết (giống hệt getDetail() ở apply-attendance-batch-info.service.ts).
 */
@Injectable({ providedIn: 'root' })
export class ApplyAttendanceInfoListService {
  constructor(private readonly http: HttpClient) {}

  getBasicInfo(): Observable<EssBasicInfoDto> {
    return this.http.get<EssBasicInfoDto>('/ess/empinfo/api/personalInfo/myInfo', { withCredentials: true });
  }

  getList(params: MyLeaveApplySearchParams): Observable<MyLeaveApplyRow[]> {
    let httpParams = new HttpParams();
    for (const [key, value] of Object.entries(params)) {
      if (value) httpParams = httpParams.set(key, value);
    }
    return this.http.get<MyLeaveApplyRow[]>(`${API_BASE}/list`, { params: httpParams, withCredentials: true });
  }

  cancel(applyNos: string[]): Observable<CancelResult> {
    return this.http.post<CancelResult>(`${API_BASE}/cancel`, applyNos, { withCredentials: true });
  }

  getDetail(applyNo: string, applyType: string): Observable<LeaveApplyDetailResponse> {
    let httpParams = new HttpParams().set('applyNo', applyNo);
    if (applyType) httpParams = httpParams.set('applyType', applyType);
    return this.http.get<LeaveApplyDetailResponse>('/ar/attendanceMintenance/api/leaveApply/detail', {
      params: httpParams,
      withCredentials: true,
    });
  }

  getCodeList(parentCodeNo: string): Observable<CodeItem[]> {
    return this.http.get<CodeItem[]>('/sys/api/getCode/list', {
      params: new HttpParams().set('parentCodeNo', parentCodeNo),
      withCredentials: true,
    });
  }
}
