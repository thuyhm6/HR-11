import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AuthDeptNode,
  CodeItem,
  DataTablesResponse,
  RecruitBatchActionResult,
  RecruitBatchImportResult,
  RecruitBatchItem,
  RecruitBatchListParams,
  RecruitBatchRegister,
} from './view-recruit-batch-list.model';

const API_BASE = '/hrm/recruitManage/api';
const TEMPLATE_NAME = 'NewEmp_add_Template';

/**
 * Gọi lại nguyên các API JSON đã có sẵn ở HrRecruitManageController (không đổi backend) - trang
 * Thymeleaf viewRecruitBatchList.html đã được thay bằng Angular route /view-recruit-batch-list.
 */
@Injectable({ providedIn: 'root' })
export class ViewRecruitBatchListService {
  constructor(private readonly http: HttpClient) {}

  getRegisterList(): Observable<RecruitBatchRegister[]> {
    return this.http.get<RecruitBatchRegister[]>(`${API_BASE}/rblBatch/registerList`, { withCredentials: true });
  }

  register(dto: { registerDate: string; registerRemark: string }): Observable<RecruitBatchActionResult> {
    return this.http.post<RecruitBatchActionResult>(`${API_BASE}/rblBatch/register`, dto, { withCredentials: true });
  }

  getBatchList(params: RecruitBatchListParams): Observable<DataTablesResponse<RecruitBatchItem>> {
    return this.http.post<DataTablesResponse<RecruitBatchItem>>(`${API_BASE}/rblBatch/list`, params, {
      withCredentials: true,
    });
  }

  updateBatchItem(dto: RecruitBatchItem): Observable<RecruitBatchActionResult> {
    return this.http.post<RecruitBatchActionResult>(`${API_BASE}/rblBatch/update`, dto, { withCredentials: true });
  }

  deleteBatchItem(seq: string): Observable<RecruitBatchActionResult> {
    return this.http.post<RecruitBatchActionResult>(`${API_BASE}/rblBatch/delete`, null, {
      params: new HttpParams().set('seq', seq),
      withCredentials: true,
    });
  }

  importExcel(file: File, registerSeq: string): Observable<RecruitBatchImportResult> {
    const fd = new FormData();
    fd.append('file', file);
    return this.http.post<RecruitBatchImportResult>(`${API_BASE}/rblBatch/import`, fd, {
      params: new HttpParams().set('registerSeq', registerSeq),
      withCredentials: true,
    });
  }

  executeConfirmBatch(registerSeq: string): Observable<RecruitBatchActionResult> {
    return this.http.post<RecruitBatchActionResult>(`${API_BASE}/execute`, null, {
      params: new HttpParams().set('personIds', registerSeq).set('type', 'CONFIRM_BATCH'),
      withCredentials: true,
    });
  }

  downloadTemplateUrl(): string {
    return `/sy/excel/api/downloadTemplate?templateName=${TEMPLATE_NAME}`;
  }

  getCodeList(parentCodeNo: string): Observable<CodeItem[]> {
    return this.http.get<CodeItem[]>('/sys/api/getCode/list', {
      params: new HttpParams().set('parentCodeNo', parentCodeNo),
      withCredentials: true,
    });
  }

  getAuthorizedDepartments(): Observable<AuthDeptNode[]> {
    return this.http.get<AuthDeptNode[]>('/ar/attendanceSettings/api/arSupervisor/authorized-departments', {
      withCredentials: true,
    });
  }
}
