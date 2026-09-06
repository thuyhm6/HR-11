import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArItemDto, ArItemSavePayload, CodeItem } from './view-ar-item.model';

const API_BASE = '/ar/attendanceSettings/api/arItem';

/** Gọi lại nguyên các API JSON đã có sẵn ở ArItemController (không đổi backend). */
@Injectable({ providedIn: 'root' })
export class ViewArItemService {
  constructor(private readonly http: HttpClient) {}

  search(itemNo: string): Observable<ArItemDto[]> {
    let httpParams = new HttpParams();
    if (itemNo) httpParams = httpParams.set('itemNo', itemNo);
    return this.http.get<ArItemDto[]>(API_BASE, { params: httpParams, withCredentials: true });
  }

  save(payload: ArItemSavePayload): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${API_BASE}/save`, payload, { withCredentials: true });
  }

  delete(itemNo: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${API_BASE}/delete/${itemNo}`, { withCredentials: true });
  }

  /** Combo Mã nhóm hạng mục (parentCodeNo=1429) - dùng chung API code hệ thống (xem AddressInfoService). */
  getCodeList(parentCodeNo: string): Observable<CodeItem[]> {
    return this.http.get<CodeItem[]>('/sys/api/getCode/list', {
      params: new HttpParams().set('parentCodeNo', parentCodeNo),
      withCredentials: true,
    });
  }
}
