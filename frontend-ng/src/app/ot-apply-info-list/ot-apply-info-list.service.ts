import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  CancelResult,
  CodeItem,
  EssBasicInfoDto,
  OtApplyDetailResponse,
  OtApplyRow,
  OtApplySearchParams,
} from './ot-apply-info-list.model';

const API_BASE = '/ess/infoApply/api/myOtApply';

/**
 * Gọi lại nguyên các API JSON đã có sẵn (không đổi backend) - bản Angular của
 * ess/infoApply/viewPOtApplyInfoList.html (Thymeleaf + jQuery). getBasicInfo dùng chung endpoint
 * /api/personalInfo/myInfo mà fragments/essEmpInfoCard.html gốc gọi qua loadEssEmpInfoCard().
 * getDetail gọi thẳng sang ArOvertimeManagentController - đúng API mà trang gốc dùng để mở modal chi
 * tiết (giống hệt getDetail() ở apply-attendance-info-list.service.ts, chỉ khác endpoint OT).
 */
@Injectable({ providedIn: 'root' })
export class OtApplyInfoListService {
  constructor(private readonly http: HttpClient) {}

  getBasicInfo(): Observable<EssBasicInfoDto> {
    return this.http.get<EssBasicInfoDto>('/ess/empinfo/api/personalInfo/myInfo', { withCredentials: true });
  }

  getList(params: OtApplySearchParams): Observable<OtApplyRow[]> {
    let httpParams = new HttpParams();
    for (const [key, value] of Object.entries(params)) {
      if (value) httpParams = httpParams.set(key, value);
    }
    return this.http.get<OtApplyRow[]>(`${API_BASE}/list`, { params: httpParams, withCredentials: true });
  }

  cancel(applyNos: string[]): Observable<CancelResult> {
    return this.http.post<CancelResult>(`${API_BASE}/cancel`, applyNos, { withCredentials: true });
  }

  getDetail(applyNo: string, applyType: string): Observable<OtApplyDetailResponse> {
    let httpParams = new HttpParams().set('applyNo', applyNo);
    if (applyType) httpParams = httpParams.set('applyType', applyType);
    return this.http.get<OtApplyDetailResponse>('/ar/attendanceMintenance/api/overtime/detail', {
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
