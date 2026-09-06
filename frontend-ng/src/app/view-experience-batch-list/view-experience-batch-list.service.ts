import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AuthDeptNode,
  CodeItem,
  DataTablesResponse,
  ExpBatchActionResult,
  ExpBatchImportResult,
  ExpBatchItem,
  ExpBatchListParams,
  ExpBatchRegister,
} from './view-experience-batch-list.model';

const API_BASE = '/hrm/recruitManage/api';
const TEMPLATE_NAME = 'StartPoint_add_Template';

/**
 * Gọi lại nguyên các API JSON đã có sẵn ở HrRecruitManageController (không đổi backend) - trang
 * Thymeleaf viewExperienceBatchList.html đã được thay bằng Angular route /view-experience-batch-list.
 */
@Injectable({ providedIn: 'root' })
export class ViewExperienceBatchListService {
  constructor(private readonly http: HttpClient) {}

  getRegisterList(): Observable<ExpBatchRegister[]> {
    return this.http.get<ExpBatchRegister[]>(`${API_BASE}/expBatch/registerList`, { withCredentials: true });
  }

  register(dto: { registerDate: string; registerRemark: string }): Observable<ExpBatchActionResult> {
    return this.http.post<ExpBatchActionResult>(`${API_BASE}/expBatch/register`, dto, { withCredentials: true });
  }

  getBatchList(params: ExpBatchListParams): Observable<DataTablesResponse<ExpBatchItem>> {
    return this.http.post<DataTablesResponse<ExpBatchItem>>(`${API_BASE}/expBatch/list`, params, {
      withCredentials: true,
    });
  }

  updateBatchItem(dto: ExpBatchItem): Observable<ExpBatchActionResult> {
    return this.http.post<ExpBatchActionResult>(`${API_BASE}/expBatch/update`, dto, { withCredentials: true });
  }

  deleteBatchItem(seq: string): Observable<ExpBatchActionResult> {
    return this.http.post<ExpBatchActionResult>(`${API_BASE}/expBatch/delete`, null, {
      params: new HttpParams().set('seq', seq),
      withCredentials: true,
    });
  }

  importExcel(file: File, registerSeq: string): Observable<ExpBatchImportResult> {
    const fd = new FormData();
    fd.append('file', file);
    return this.http.post<ExpBatchImportResult>(`${API_BASE}/expBatch/import`, fd, {
      params: new HttpParams().set('registerSeq', registerSeq),
      withCredentials: true,
    });
  }

  executeExpBatch(registerSeq: string): Observable<ExpBatchActionResult> {
    return this.http.post<ExpBatchActionResult>(`${API_BASE}/execute`, null, {
      params: new HttpParams().set('personIds', registerSeq).set('type', 'EXP_BATCH'),
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
