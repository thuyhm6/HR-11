import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  DataTablesResponse,
  ExpBatchActionResult,
  ExpBatchImportResult,
  ExpBatchItem,
  ExpBatchListParams,
  ExpBatchRegister,
} from './view-experience-batch-list.model';

const API_BASE = '/hrm/recruitManage/api';
/** File mẫu import (ExcelController.buildStartPointTemplate - có sẵn danh mục mã để chọn). */
const TEMPLATE_NAME = 'StartPoint_add_Template';

/** API Quyết định hàng loạt ở HrRecruitManageController (bản gốc /hrm/recruitManage/viewExperienceBatchList). */
@Injectable({ providedIn: 'root' })
export class ViewExperienceBatchListService {
  constructor(private readonly http: HttpClient) {}

  getRegisterList(): Observable<ExpBatchRegister[]> {
    return this.http.get<ExpBatchRegister[]>(`${API_BASE}/expBatch/registerList`, { withCredentials: true });
  }

  /** registerDate dạng dd/MM/yyyy (bản gốc). */
  register(registerDate: string): Observable<ExpBatchActionResult> {
    return this.http.post<ExpBatchActionResult>(`${API_BASE}/expBatch/register`, { registerDate }, { withCredentials: true });
  }

  getBatchList(params: ExpBatchListParams): Observable<DataTablesResponse<ExpBatchItem>> {
    return this.http.post<DataTablesResponse<ExpBatchItem>>(`${API_BASE}/expBatch/list`, params, {
      withCredentials: true,
    });
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
}
