import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrgCostCenterDto, OrgCostCenterSearchPayload } from './view-org-cost-center.model';

const API_BASE = '/org/api/costCenter';

/** Gọi lại nguyên các API JSON đã có sẵn ở OrgCostCenterController (không đổi backend). */
@Injectable({ providedIn: 'root' })
export class ViewOrgCostCenterService {
  constructor(private readonly http: HttpClient) {}

  getList(payload: OrgCostCenterSearchPayload): Observable<{ data: OrgCostCenterDto[] }> {
    return this.http.post<{ data: OrgCostCenterDto[] }>(`${API_BASE}/list`, payload, { withCredentials: true });
  }

  save(obj: OrgCostCenterDto): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${API_BASE}/save`, obj, { withCredentials: true });
  }

  delete(seq: string): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${API_BASE}/delete`, null, {
      params: new HttpParams().set('seq', seq),
      withCredentials: true,
    });
  }
}
