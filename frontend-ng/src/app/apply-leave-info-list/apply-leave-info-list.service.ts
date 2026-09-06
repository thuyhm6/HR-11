import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  CancelResult,
  CardApplyDetailResponse,
  CardApplySearchParams,
  CodeItem,
  EssBasicInfoDto,
  EssCardApplyListDto,
} from './apply-leave-info-list.model';

const API_BASE = '/ess/infoApplyLeave/api/myCardApply';

/** Endpoint chi tiết phê duyệt gốc nằm ở controller KHÁC (EssInfoApplyAttendanceController, không
 *  phải EssInfoApplyLeaveController) - đúng như aliOpenDetail() bản gốc gọi. */
const DETAIL_URL = '/ess/infoApplyAttendance/api/checkAttendanceEx/detail';

/**
 * Gọi lại nguyên các API JSON đã có sẵn (không đổi backend) - bản Angular của
 * ess/infoApplyLeave/viewApplyLeaveInfoList.html (Thymeleaf + jQuery, tự build bảng + phân trang bằng
 * tay). getBasicInfo dùng chung endpoint /api/personalInfo/myInfo mà fragments/essEmpInfoCard.html gốc
 * gọi qua loadEssEmpInfoCard().
 */
@Injectable({ providedIn: 'root' })
export class ApplyLeaveInfoListService {
  constructor(private readonly http: HttpClient) {}

  getBasicInfo(): Observable<EssBasicInfoDto> {
    return this.http.get<EssBasicInfoDto>('/ess/empinfo/api/personalInfo/myInfo', { withCredentials: true });
  }

  getCodeList(parentCodeNo: string): Observable<CodeItem[]> {
    return this.http.get<CodeItem[]>('/sys/api/getCode/list', {
      params: new HttpParams().set('parentCodeNo', parentCodeNo),
      withCredentials: true,
    });
  }

  getList(params: CardApplySearchParams): Observable<EssCardApplyListDto[]> {
    let httpParams = new HttpParams();
    if (params.affirmFlag) httpParams = httpParams.set('affirmFlag', params.affirmFlag);
    if (params.startDate) httpParams = httpParams.set('startDate', params.startDate);
    if (params.endDate) httpParams = httpParams.set('endDate', params.endDate);
    return this.http.get<EssCardApplyListDto[]>(`${API_BASE}/list`, { params: httpParams, withCredentials: true });
  }

  cancel(applyNos: string[]): Observable<CancelResult> {
    return this.http.post<CancelResult>(`${API_BASE}/cancel`, applyNos, { withCredentials: true });
  }

  getDetail(applyNo: string, applyType: string): Observable<CardApplyDetailResponse> {
    let httpParams = new HttpParams().set('applyNo', applyNo);
    if (applyType) httpParams = httpParams.set('applyType', applyType);
    return this.http.get<CardApplyDetailResponse>(DETAIL_URL, { params: httpParams, withCredentials: true });
  }
}
