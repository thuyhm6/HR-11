import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SyCodeDto } from '../view-code-manage/view-code-manage.model';
import { CodeParamActionResult, CodeParamPayload, CompanyOption, SyCodeParamDto } from './view-code-param-list.model';

const API_BASE = '/sys/api/code_param';

/**
 * Gọi lại nguyên API JSON đã có sẵn ở SyCodeParamController/SyCodeController/HrCompanyController
 * (không đổi backend) - xem giải thích ở ViewCodeParamListComponent.
 */
@Injectable({ providedIn: 'root' })
export class ViewCodeParamListService {
  constructor(private readonly http: HttpClient) {}

  /** Toàn bộ cây code (dùng chung API với ViewCodeManageComponent) để dựng cây bên trái. */
  getCodeTree(): Observable<SyCodeDto[]> {
    return this.http.get<SyCodeDto[]>('/sys/api/code/tree', { withCredentials: true });
  }

  getCompanies(): Observable<CompanyOption[]> {
    return this.http.get<CompanyOption[]>('/sys/api/company/list', { withCredentials: true });
  }

  list(parentCodeNo: string, cpnyId: string): Observable<SyCodeParamDto[]> {
    let params = new HttpParams().set('cpnyId', cpnyId);
    if (parentCodeNo) params = params.set('parentCodeNo', parentCodeNo);
    return this.http.get<SyCodeParamDto[]>(`${API_BASE}/list`, { params, withCredentials: true });
  }

  save(payload: CodeParamPayload): Observable<CodeParamActionResult> {
    return this.http.post<CodeParamActionResult>(`${API_BASE}/save`, payload, { withCredentials: true });
  }

  /** Sửa 1 dòng đã gán (đổi thứ tự/trạng thái thật) - khác save() (xem giải thích ở model). */
  update(payload: CodeParamPayload): Observable<CodeParamActionResult> {
    return this.http.post<CodeParamActionResult>(`${API_BASE}/update`, payload, { withCredentials: true });
  }

  delete(payload: CodeParamPayload): Observable<CodeParamActionResult> {
    return this.http.post<CodeParamActionResult>(`${API_BASE}/delete`, payload, { withCredentials: true });
  }
}
