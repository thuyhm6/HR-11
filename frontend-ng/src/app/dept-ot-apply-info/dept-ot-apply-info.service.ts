import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  DataTablesResponse,
  DeptOtApplyInfoSearchParams,
  EssDeptOtApplyInfoDto,
} from './dept-ot-apply-info.model';

const API_BASE = '/ess/infoApply/api/deptOtApplyInfo';

@Injectable({ providedIn: 'root' })
export class DeptOtApplyInfoService {
  constructor(private http: HttpClient) {}

  getPageList(params: DeptOtApplyInfoSearchParams): Observable<DataTablesResponse<EssDeptOtApplyInfoDto>> {
    let httpParams = new HttpParams();
    for (const [key, value] of Object.entries(params)) {
      httpParams = httpParams.set(key, String(value));
    }
    return this.http.get<DataTablesResponse<EssDeptOtApplyInfoDto>>(`${API_BASE}/list`, {
      params: httpParams,
      withCredentials: true,
    });
  }

  buildExportUrl(params: Pick<DeptOtApplyInfoSearchParams, 'year' | 'keyword' | 'deptNos'>): string {
    let httpParams = new HttpParams();
    for (const [key, value] of Object.entries(params)) {
      httpParams = httpParams.set(key, String(value));
    }
    return `${API_BASE}/export?${httpParams.toString()}`;
  }
}
