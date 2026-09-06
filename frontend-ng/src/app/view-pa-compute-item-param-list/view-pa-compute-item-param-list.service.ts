import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  DataTablesResponse,
  PaApplyTypeOption,
  PaComputeItemParamDto,
  PaComputeItemParamInsertPayload,
  PaComputeItemParamListParams,
  PaComputeItemParamUpdatePayload,
  PaItemOption,
} from './view-pa-compute-item-param-list.model';

const API_BASE = '/pa/salary/computeitemparam/api';

/** Gọi lại nguyên API JSON đã có sẵn ở PaComputeItemParamController (không đổi backend). */
@Injectable({ providedIn: 'root' })
export class ViewPaComputeItemParamListService {
  constructor(private readonly http: HttpClient) {}

  getList(params: PaComputeItemParamListParams): Observable<DataTablesResponse<PaComputeItemParamDto>> {
    let httpParams = new HttpParams()
      .set('draw', params.draw)
      .set('start', params.start)
      .set('length', params.length);
    if (params.aliasNameSearch) httpParams = httpParams.set('aliasNameSearch', params.aliasNameSearch);
    return this.http.get<DataTablesResponse<PaComputeItemParamDto>>(`${API_BASE}/list`, {
      params: httpParams,
      withCredentials: true,
    });
  }

  getOne(paramNo: string): Observable<PaComputeItemParamDto> {
    return this.http.get<PaComputeItemParamDto>(`${API_BASE}/${paramNo}`, { withCredentials: true });
  }

  insert(payload: PaComputeItemParamInsertPayload): Observable<{ success: boolean; message: string }> {
    return this.http.post<{ success: boolean; message: string }>(`${API_BASE}/insert`, payload, { withCredentials: true });
  }

  update(payload: PaComputeItemParamUpdatePayload): Observable<{ success: boolean; message: string }> {
    return this.http.put<{ success: boolean; message: string }>(`${API_BASE}/update`, payload, { withCredentials: true });
  }

  deleteList(paramNos: string[]): Observable<{ success: boolean; message: string }> {
    return this.http.request<{ success: boolean; message: string }>('DELETE', `${API_BASE}/deleteList`, {
      body: paramNos,
      withCredentials: true,
    });
  }

  getItemOptions(): Observable<PaItemOption[]> {
    return this.http.get<PaItemOption[]>(`${API_BASE}/itemList`, { withCredentials: true });
  }

  getApplyTypeOptions(): Observable<PaApplyTypeOption[]> {
    return this.http.get<PaApplyTypeOption[]>(`${API_BASE}/applyTypeList`, { withCredentials: true });
  }

  swapOrder(paramNo: string, direction: 'up' | 'down'): Observable<{ success: boolean }> {
    return this.http.put<{ success: boolean }>(`${API_BASE}/swapOrder`, { paramNo, direction }, { withCredentials: true });
  }
}
