import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArStaItemParamDto, ArStaItemParamSavePayload, AvailableItemOption } from './view-summary-param-item.model';

const API_BASE = '/ar/attendanceSettings/api/arStaItemParam';

/** Gọi lại nguyên các API JSON đã có sẵn ở ArStaItemParamController (không đổi backend). */
@Injectable({ providedIn: 'root' })
export class ViewSummaryParamItemService {
  constructor(private readonly http: HttpClient) {}

  search(searchText: string): Observable<ArStaItemParamDto[]> {
    let params = new HttpParams();
    if (searchText) params = params.set('searchText', searchText);
    return this.http.get<ArStaItemParamDto[]>(API_BASE, { params, withCredentials: true });
  }

  getById(paramNo: string): Observable<ArStaItemParamDto> {
    return this.http.get<ArStaItemParamDto>(`${API_BASE}/${paramNo}`, { withCredentials: true });
  }

  getAvailableItems(): Observable<AvailableItemOption[]> {
    return this.http.get<AvailableItemOption[]>(`${API_BASE}/availableItems`, { withCredentials: true });
  }

  save(payload: ArStaItemParamSavePayload): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${API_BASE}/save`, payload, { withCredentials: true });
  }

  delete(paramNo: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${API_BASE}/delete/${paramNo}`, { withCredentials: true });
  }
}
