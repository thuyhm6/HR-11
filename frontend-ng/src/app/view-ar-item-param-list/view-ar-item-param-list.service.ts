import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArItemOption, ArItemParamDto, ArItemParamSavePayload } from './view-ar-item-param-list.model';

const API_BASE = '/ar/attendanceSettings/api/arItemParam';

/** Gọi lại nguyên các API JSON đã có sẵn ở ArItemParamController (không đổi backend). */
@Injectable({ providedIn: 'root' })
export class ViewArItemParamListService {
  constructor(private readonly http: HttpClient) {}

  search(itemNo: string): Observable<ArItemParamDto[]> {
    let httpParams = new HttpParams();
    if (itemNo) httpParams = httpParams.set('itemNo', itemNo);
    return this.http.get<ArItemParamDto[]>(API_BASE, { params: httpParams, withCredentials: true });
  }

  save(payload: ArItemParamSavePayload): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${API_BASE}/save`, payload, { withCredentials: true });
  }

  delete(arParamNo: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${API_BASE}/delete/${arParamNo}`, { withCredentials: true });
  }

  /** Combo chọn hạng mục - dùng lại nguyên API danh sách hạng mục ở trang viewArItem
   *  (GET /ar/attendanceSettings/api/arItem, xem ViewArItemService). */
  getItemOptions(): Observable<ArItemOption[]> {
    return this.http.get<ArItemOption[]>('/ar/attendanceSettings/api/arItem', { withCredentials: true });
  }
}
