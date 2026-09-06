import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApplyDetailResponse, ApplyListParams, DataTablesResponse, EssApplyInfoDto } from './apply-info.model';

const API_BASE = '/ess/empinfo/api/apply';

/**
 * Gọi lại nguyên API JSON đã có sẵn ở EssEmpInfoController (không đổi backend) - bản Angular của
 * ess/empinfo/viewEssApplyInfo.html (Thymeleaf + jQuery). getMyApplyList giữ nguyên cách gọi bản gốc
 * (length=9999 - backend không thật sự phân trang server-side cho trang này, toàn bộ filter theo
 * fromDate/toDate/activitySearch xong tải hết về rồi phân trang/lọc nhanh ở client qua nz-table).
 */
@Injectable({ providedIn: 'root' })
export class ApplyInfoService {
  constructor(private readonly http: HttpClient) {}

  getMyApplyList(params: ApplyListParams): Observable<DataTablesResponse<EssApplyInfoDto>> {
    let httpParams = new HttpParams();
    for (const [key, value] of Object.entries(params)) {
      httpParams = httpParams.set(key, String(value));
    }
    return this.http.get<DataTablesResponse<EssApplyInfoDto>>(`${API_BASE}/myApplyList`, {
      params: httpParams,
      withCredentials: true,
    });
  }

  getApplyDetail(applyNo: string, applyTableType: string): Observable<ApplyDetailResponse> {
    return this.http.get<ApplyDetailResponse>(`${API_BASE}/detail`, {
      params: new HttpParams().set('applyNo', applyNo).set('applyTableType', applyTableType),
      withCredentials: true,
    });
  }
}
