import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  SqlMasterActionResult,
  SqlMasterDetail,
  SqlMasterRow,
  SqlMasterSavePayload,
} from './view-sql-master-list.model';

const API_BASE = '/sys/api/sqlMaster';

/** Gọi API JSON của SySqlMasterController (xem ViewSqlMasterListComponent). */
@Injectable({ providedIn: 'root' })
export class ViewSqlMasterListService {
  constructor(private readonly http: HttpClient) {}

  list(keyword: string, pgmNm: string | null): Observable<SqlMasterRow[]> {
    let params = new HttpParams();
    if (keyword) params = params.set('keyword', keyword);
    if (pgmNm) params = params.set('pgmNm', pgmNm);
    return this.http.get<SqlMasterRow[]>(`${API_BASE}/list`, { params, withCredentials: true });
  }

  detail(sqlSeq: string): Observable<SqlMasterDetail> {
    const params = new HttpParams().set('sqlSeq', sqlSeq);
    return this.http.get<SqlMasterDetail>(`${API_BASE}/detail`, { params, withCredentials: true });
  }

  save(payload: SqlMasterSavePayload): Observable<SqlMasterActionResult> {
    return this.http.post<SqlMasterActionResult>(`${API_BASE}/save`, payload, { withCredentials: true });
  }

  delete(sqlSeq: string): Observable<SqlMasterActionResult> {
    const params = new HttpParams().set('sqlSeq', sqlSeq);
    return this.http.post<SqlMasterActionResult>(`${API_BASE}/delete`, null, { params, withCredentials: true });
  }

  /** Câu lệnh SQL được thực thi trực tiếp ở server khi tải file, nên dùng điều hướng trình duyệt
   *  thay vì HttpClient blob - giống cách export ở disc-sql-master-list (HAE-VHR). */
  buildExportUrl(sqlSeq: string, paramValues: Record<string, string>): string {
    const params = new URLSearchParams();
    params.set('sqlSeq', sqlSeq);
    params.set('paramsJson', JSON.stringify(paramValues ?? {}));
    return `${API_BASE}/export?${params.toString()}`;
  }
}
