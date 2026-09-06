import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArStaItemDto, ArStaItemSavePayload } from './view-summary-item.model';

const API_BASE = '/ar/attendanceSettings/api/arStaItem';

/** Gọi lại nguyên các API JSON đã có sẵn ở ArStaItemController (không đổi backend). */
@Injectable({ providedIn: 'root' })
export class ViewSummaryItemService {
  constructor(private readonly http: HttpClient) {}

  search(searchText: string): Observable<ArStaItemDto[]> {
    let params = new HttpParams();
    if (searchText) params = params.set('searchText', searchText);
    return this.http.get<ArStaItemDto[]>(API_BASE, { params, withCredentials: true });
  }

  getById(itemNo: string): Observable<ArStaItemDto> {
    return this.http.get<ArStaItemDto>(`${API_BASE}/${itemNo}`, { withCredentials: true });
  }

  save(payload: ArStaItemSavePayload): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${API_BASE}/save`, payload, { withCredentials: true });
  }

  delete(itemNo: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${API_BASE}/delete/${itemNo}`, { withCredentials: true });
  }
}
