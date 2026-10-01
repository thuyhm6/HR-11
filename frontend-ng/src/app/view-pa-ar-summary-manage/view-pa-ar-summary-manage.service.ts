import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  PaArSummaryManageActionResponse,
  PaArSummaryManageDto,
  PaArSummaryManageSavePayload,
  PaArSummaryManageSearchParams,
  PaArSummaryOption,
} from './view-pa-ar-summary-manage.model';

const API_BASE = '/pa/workManagement/api/arSummaryManage';

/** API JSON của PaWorkManagementController cho màn hình quản lý tổng hợp chấm công
 *  (thay JSP /pa/workManagement/viewPaArSummaryForManageList của dự án Hanwha_HTSV). */
@Injectable({ providedIn: 'root' })
export class ViewPaArSummaryManageService {
  constructor(private readonly http: HttpClient) {}

  getPaySchedules(): Observable<PaArSummaryOption[]> {
    return this.http.get<PaArSummaryOption[]>(`${API_BASE}/paySchedules`, { withCredentials: true });
  }

  getSummaryItems(): Observable<PaArSummaryOption[]> {
    return this.http.get<PaArSummaryOption[]>(`${API_BASE}/items`, { withCredentials: true });
  }

  getList(params: PaArSummaryManageSearchParams): Observable<PaArSummaryManageDto[]> {
    let httpParams = new HttpParams().set('payScheduleNo', params.payScheduleNo);
    if (params.key) httpParams = httpParams.set('key', params.key);
    if (params.deptNo) httpParams = httpParams.set('deptNo', params.deptNo);
    if (params.itemNos.length) httpParams = httpParams.set('itemNos', params.itemNos.join(','));
    if (params.isSpecialFlag) httpParams = httpParams.set('isSpecialFlag', params.isSpecialFlag);
    return this.http.get<PaArSummaryManageDto[]>(`${API_BASE}/list`, { params: httpParams, withCredentials: true });
  }

  save(payload: PaArSummaryManageSavePayload): Observable<PaArSummaryManageActionResponse> {
    return this.http.post<PaArSummaryManageActionResponse>(`${API_BASE}/save`, payload, { withCredentials: true });
  }

  /** Backend tự sinh file .xlsx (Content-Disposition attachment) - trình duyệt tải trực tiếp qua URL. */
  exportExcelUrl(params: Pick<PaArSummaryManageSearchParams, 'payScheduleNo' | 'key' | 'deptNo'>): string {
    let httpParams = new HttpParams().set('payScheduleNo', params.payScheduleNo);
    if (params.key) httpParams = httpParams.set('key', params.key);
    if (params.deptNo) httpParams = httpParams.set('deptNo', params.deptNo);
    return `${API_BASE}/exportExcel?${httpParams.toString()}`;
  }
}
