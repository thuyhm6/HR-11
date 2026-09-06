import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  DataTablesResponse,
  PaSalaryCodeDeleteKey,
  PaSalaryCodeDto,
  PaSalaryCodeListParams,
  PaSalaryCodeSavePayload,
} from './view-salary-code.model';

const API_BASE = '/pa/salarycode/api';

/** Gọi lại nguyên API JSON đã có sẵn ở PaSalaryCodeController (không đổi backend). */
@Injectable({ providedIn: 'root' })
export class ViewSalaryCodeService {
  constructor(private readonly http: HttpClient) {}

  getList(params: PaSalaryCodeListParams): Observable<DataTablesResponse<PaSalaryCodeDto>> {
    let httpParams = new HttpParams()
      .set('draw', params.draw)
      .set('start', params.start)
      .set('length', params.length);
    if (params.itemNameSearch) httpParams = httpParams.set('itemNameSearch', params.itemNameSearch);
    if (params.itemTypeSearch != null) httpParams = httpParams.set('itemTypeSearch', params.itemTypeSearch);
    return this.http.get<DataTablesResponse<PaSalaryCodeDto>>(`${API_BASE}/list`, {
      params: httpParams,
      withCredentials: true,
    });
  }

  getOne(itemType: number, itemNo: string): Observable<PaSalaryCodeDto> {
    return this.http.get<PaSalaryCodeDto>(`${API_BASE}/${itemType}/${itemNo}`, { withCredentials: true });
  }

  save(payload: PaSalaryCodeSavePayload): Observable<{ success: boolean; message: string }> {
    return this.http.post<{ success: boolean; message: string }>(`${API_BASE}/save`, payload, { withCredentials: true });
  }

  deleteList(keys: PaSalaryCodeDeleteKey[]): Observable<{ success: boolean; message: string }> {
    return this.http.request<{ success: boolean; message: string }>('DELETE', `${API_BASE}/deleteList`, {
      body: keys,
      withCredentials: true,
    });
  }
}
