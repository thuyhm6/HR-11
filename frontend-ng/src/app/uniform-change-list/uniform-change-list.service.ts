import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ApiResult,
  DataTablesResponse,
  UniformChange,
  UniformChangeSearchParams,
  UniformEmpInfo,
  UniformImportResult,
  UniformImportRow,
  UniformItem,
} from './uniform-change-list.model';

const API_BASE = '/hrm/uniform/api';

/** API quản lý đổi đồng phục (HrUniformController) - dùng chung cho uniform-change-list và uniform-item-list. */
@Injectable({ providedIn: 'root' })
export class UniformChangeListService {
  constructor(private readonly http: HttpClient) {}

  // ==================== Danh mục đồng phục ====================

  getItemList(activeOnly: boolean): Observable<UniformItem[]> {
    const params = new HttpParams().set('activeOnly', String(activeOnly));
    return this.http.get<UniformItem[]>(`${API_BASE}/item/list`, { params, withCredentials: true });
  }

  insertItem(item: UniformItem): Observable<ApiResult> {
    return this.http.post<ApiResult>(`${API_BASE}/item/insert`, item, { withCredentials: true });
  }

  updateItem(item: UniformItem): Observable<ApiResult> {
    return this.http.put<ApiResult>(`${API_BASE}/item/update`, item, { withCredentials: true });
  }

  deleteItem(itemNo: number): Observable<ApiResult> {
    return this.http.delete<ApiResult>(`${API_BASE}/item/delete/${itemNo}`, { withCredentials: true });
  }

  // ==================== Đổi đồng phục ====================

  getChangeList(params: UniformChangeSearchParams): Observable<DataTablesResponse<UniformChange>> {
    let httpParams = new HttpParams();
    for (const [key, value] of Object.entries(params)) {
      httpParams = httpParams.set(key, String(value));
    }
    return this.http.get<DataTablesResponse<UniformChange>>(`${API_BASE}/change/list`, {
      params: httpParams,
      withCredentials: true,
    });
  }

  /** Các lần đổi của 1 nhân viên trong 1 tháng (month = YYYY-MM). */
  getPersonMonthChanges(personId: string, month: string): Observable<UniformChange[]> {
    const params = new HttpParams().set('personId', personId).set('month', month);
    return this.http.get<UniformChange[]>(`${API_BASE}/change/history`, { params, withCredentials: true });
  }

  getEmpInfo(empId: string): Observable<UniformEmpInfo> {
    const params = new HttpParams().set('empId', empId);
    return this.http.get<UniformEmpInfo>(`${API_BASE}/change/employee`, { params, withCredentials: true });
  }

  insertChange(row: UniformImportRow): Observable<ApiResult> {
    return this.http.post<ApiResult>(`${API_BASE}/change/insert`, row, { withCredentials: true });
  }

  updateChange(row: UniformImportRow): Observable<ApiResult> {
    return this.http.put<ApiResult>(`${API_BASE}/change/update`, row, { withCredentials: true });
  }

  deleteChange(changeNo: number): Observable<ApiResult> {
    return this.http.delete<ApiResult>(`${API_BASE}/change/delete/${changeNo}`, { withCredentials: true });
  }

  /** Bước 1 upload: đọc + kiểm tra file, chưa lưu. */
  previewImport(file: File): Observable<UniformImportResult> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<UniformImportResult>(`${API_BASE}/change/import/preview`, formData, { withCredentials: true });
  }

  /** Bước 2 upload: lưu các dòng hợp lệ (backend kiểm tra lại, có lỗi thì không lưu dòng nào). */
  saveImport(rows: UniformImportRow[]): Observable<UniformImportResult> {
    return this.http.post<UniformImportResult>(`${API_BASE}/change/import/save`, rows, { withCredentials: true });
  }
}
