import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  DataTablesResponse,
  PaDistinctListItem,
  PaInputItemParamDto,
  PaInputItemParamListParams,
  PaInputItemParamUpdatePayload,
} from './view-pa-input-item-param.model';

const API_BASE = '/pa/salary/inputitemparam/api';

/** Gọi lại nguyên API JSON đã có sẵn ở PaInputItemParamController (không đổi backend). */
@Injectable({ providedIn: 'root' })
export class ViewPaInputItemParamService {
  constructor(private readonly http: HttpClient) {}

  getList(params: PaInputItemParamListParams): Observable<DataTablesResponse<PaInputItemParamDto>> {
    let httpParams = new HttpParams()
      .set('draw', params.draw)
      .set('start', params.start)
      .set('length', params.length);
    if (params.itemTypeSearch != null) httpParams = httpParams.set('itemTypeSearch', params.itemTypeSearch);
    if (params.aliasNameSearch) httpParams = httpParams.set('aliasNameSearch', params.aliasNameSearch);
    return this.http.get<DataTablesResponse<PaInputItemParamDto>>(`${API_BASE}/list`, {
      params: httpParams,
      withCredentials: true,
    });
  }

  getOne(paramNo: string): Observable<PaInputItemParamDto> {
    return this.http.get<PaInputItemParamDto>(`${API_BASE}/${paramNo}`, { withCredentials: true });
  }

  update(payload: PaInputItemParamUpdatePayload): Observable<{ success: boolean; message: string }> {
    return this.http.put<{ success: boolean; message: string }>(`${API_BASE}/update`, payload, { withCredentials: true });
  }

  getDistinctList(): Observable<PaDistinctListItem[]> {
    return this.http.get<PaDistinctListItem[]>(`${API_BASE}/distinctList`, { withCredentials: true });
  }

  deleteList(paramNos: string[]): Observable<{ success: boolean; message: string }> {
    return this.http.request<{ success: boolean; message: string }>('DELETE', `${API_BASE}/deleteList`, {
      body: paramNos,
      withCredentials: true,
    });
  }
}
