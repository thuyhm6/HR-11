import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ApplyActionResponse,
  ApplyDetailResponse,
  ApplyListParams,
  DataTablesResponse,
  HrmApproveApplyDto,
} from './hrm-approve-apply-info.model';

const API_BASE = '/hrm/approve/api';

/**
 * Gọi lại nguyên API JSON đã có sẵn ở HrmApproveController (không đổi backend) - bản Angular của
 * hrm/approve/viewEssApplyInfo.html (Thymeleaf + jQuery DataTables). applyList vẫn giữ đúng cơ chế
 * DataTables server-side processing cũ (GET + draw/start/length) - chỉ đổi phía client sang nz-table
 * (nzFrontPagination=false) thay cho jQuery DataTables.
 */
@Injectable({ providedIn: 'root' })
export class HrmApproveApplyInfoService {
  constructor(private readonly http: HttpClient) {}

  getApplyList(params: ApplyListParams): Observable<DataTablesResponse<HrmApproveApplyDto>> {
    let httpParams = new HttpParams();
    for (const [key, value] of Object.entries(params)) {
      httpParams = httpParams.set(key, String(value));
    }
    return this.http.get<DataTablesResponse<HrmApproveApplyDto>>(`${API_BASE}/applyList`, {
      params: httpParams,
      withCredentials: true,
    });
  }

  getApplyDetail(applyNo: string, applyTableType: string): Observable<ApplyDetailResponse> {
    return this.http.get<ApplyDetailResponse>(`${API_BASE}/applyDetail`, {
      params: new HttpParams().set('applyNo', applyNo).set('applyTableType', applyTableType),
      withCredentials: true,
    });
  }

  approve(applyNo: string, applyTableType: string): Observable<ApplyActionResponse> {
    const body = new HttpParams().set('applyNo', applyNo).set('applyTableType', applyTableType);
    return this.http.post<ApplyActionResponse>(`${API_BASE}/approve`, body, { withCredentials: true });
  }

  reject(applyNo: string, applyTableType: string): Observable<ApplyActionResponse> {
    const body = new HttpParams().set('applyNo', applyNo).set('applyTableType', applyTableType);
    return this.http.post<ApplyActionResponse>(`${API_BASE}/reject`, body, { withCredentials: true });
  }
}
