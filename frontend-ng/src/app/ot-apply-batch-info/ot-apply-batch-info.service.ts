import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  CancelBatchResult,
  EmployeeOption,
  OtBatchApiRow,
  OtBatchSearchParams,
  OtDetailResponse,
  SaveResult,
} from './ot-apply-batch-info.model';

const API_BASE = '/ar/attendanceMintenance/api/overtime';
const EXCEL_TEMPLATE_NAME = 'OvertimeApply_add_Template';

/**
 * Gọi lại nguyên các API JSON đã có sẵn ở ArOvertimeManagentController (không đổi backend) - bản
 * Angular của ess/infoApply/viewPiciOtAffirmLBatchList.html (Thymeleaf + DataTables + jQuery).
 */
@Injectable({ providedIn: 'root' })
export class OtApplyBatchInfoService {
  constructor(private readonly http: HttpClient) {}

  getList(params: OtBatchSearchParams): Observable<OtBatchApiRow[]> {
    let httpParams = new HttpParams();
    for (const [key, value] of Object.entries(params)) {
      if (value) httpParams = httpParams.set(key, value);
    }
    return this.http.get<OtBatchApiRow[]>(`${API_BASE}/list`, { params: httpParams, withCredentials: true });
  }

  getDetail(applyNo: string, applyType: string): Observable<OtDetailResponse> {
    let httpParams = new HttpParams().set('applyNo', applyNo);
    if (applyType) httpParams = httpParams.set('applyType', applyType);
    return this.http.get<OtDetailResponse>(`${API_BASE}/detail`, { params: httpParams, withCredentials: true });
  }

  getAutoFillByEmp(personId: string, applyOtDate: string, deductYn: string): Observable<OtBatchApiRow> {
    const httpParams = new HttpParams().set('personId', personId).set('applyOtDate', applyOtDate).set('deductYn', deductYn);
    return this.http.get<OtBatchApiRow>(`${API_BASE}/auto-fill-by-emp`, { params: httpParams, withCredentials: true });
  }

  getDefaultOtInfo(
    personId: string,
    applyOtDate: string,
    otFromTime: string,
    otToTime: string,
    deductYn: string,
  ): Observable<OtBatchApiRow> {
    const httpParams = new HttpParams()
      .set('personId', personId)
      .set('applyOtDate', applyOtDate)
      .set('otFromTime', otFromTime)
      .set('otToTime', otToTime)
      .set('deductYn', deductYn);
    return this.http.get<OtBatchApiRow>(`${API_BASE}/default-info`, { params: httpParams, withCredentials: true });
  }

  getOtTotals(personId: string, applyOtDate: string): Observable<{ otTotalMonth?: string; otTotalYear?: string }> {
    const httpParams = new HttpParams().set('personId', personId).set('applyOtDate', applyOtDate);
    return this.http.get<{ otTotalMonth?: string; otTotalYear?: string }>(`${API_BASE}/ot-totals`, {
      params: httpParams,
      withCredentials: true,
    });
  }

  saveBatch(payloads: Record<string, unknown>[]): Observable<SaveResult> {
    return this.http.post<SaveResult>(`${API_BASE}/saveBatch`, payloads, { withCredentials: true });
  }

  resubmit(payload: Record<string, unknown>): Observable<SaveResult> {
    return this.http.post<SaveResult>(`${API_BASE}/resubmit`, payload, { withCredentials: true });
  }

  cancelBatch(applyNos: string[]): Observable<CancelBatchResult> {
    return this.http.post<CancelBatchResult>(`${API_BASE}/cancel-batch`, { applyNos }, { withCredentials: true });
  }

  searchEmployees(keyword: string, empOffice: string): Observable<EmployeeOption[]> {
    let httpParams = new HttpParams().set('keyword', keyword);
    if (empOffice) httpParams = httpParams.set('empOffice', empOffice);
    return this.http.get<EmployeeOption[]>('/hrm/empinfo/api/employee/search', { params: httpParams, withCredentials: true });
  }

  downloadTemplateUrl(): string {
    return `/sy/excel/api/downloadTemplate?templateName=${EXCEL_TEMPLATE_NAME}`;
  }

  importExcel(file: File): Observable<SaveResult & { errors?: string[] }> {
    const fd = new FormData();
    fd.append('templateName', EXCEL_TEMPLATE_NAME);
    fd.append('file', file);
    return this.http.post<SaveResult & { errors?: string[] }>('/sy/excel/api/importTemplate', fd, { withCredentials: true });
  }
}
