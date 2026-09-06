import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArItemOption } from '../view-ar-item-param-list/view-ar-item-param-list.model';
import {
  ArShift010Dto,
  ArShift010SavePayload,
  ArShift020Dto,
  ArShift020SavePayload,
} from './view-shift.model';

const SHIFT_BASE = '/ar/attendanceSettings/api/shift';
const SHIFT_DETAIL_BASE = '/ar/attendanceSettings/api/shiftDetail';

/** Gọi lại nguyên các API JSON đã có sẵn ở ArShiftController (không đổi backend, trừ sửa 1 lỗi nhỏ ở
 *  ArShiftServiceImpl khi parse giờ bắt đầu/kết thúc - xem giải thích ở ViewShiftComponent). */
@Injectable({ providedIn: 'root' })
export class ViewShiftService {
  constructor(private readonly http: HttpClient) {}

  // --- AR_SHIFT010 (Ca làm việc) ---

  searchShifts(searchText: string): Observable<ArShift010Dto[]> {
    let params = new HttpParams();
    if (searchText) params = params.set('searchText', searchText);
    return this.http.get<ArShift010Dto[]>(SHIFT_BASE, { params, withCredentials: true });
  }

  getShiftById(shiftNo: string): Observable<ArShift010Dto> {
    return this.http.get<ArShift010Dto>(`${SHIFT_BASE}/${shiftNo}`, { withCredentials: true });
  }

  saveShift(payload: ArShift010SavePayload): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${SHIFT_BASE}/save`, payload, { withCredentials: true });
  }

  deleteShift(shiftNo: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${SHIFT_BASE}/delete/${shiftNo}`, { withCredentials: true });
  }

  // --- AR_SHIFT020 (Chi tiết tham số ca) ---

  searchShiftDetails(shiftNo: string): Observable<ArShift020Dto[]> {
    const params = new HttpParams().set('shiftNo', shiftNo);
    return this.http.get<ArShift020Dto[]>(SHIFT_DETAIL_BASE, { params, withCredentials: true });
  }

  saveShiftDetail(payload: ArShift020SavePayload): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${SHIFT_DETAIL_BASE}/save`, payload, { withCredentials: true });
  }

  deleteShiftDetail(pkNo: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${SHIFT_DETAIL_BASE}/delete/${pkNo}`, { withCredentials: true });
  }

  /** Combo chọn hạng mục cho chi tiết ca - dùng lại nguyên API danh sách hạng mục ở trang viewArItem
   *  (GET /ar/attendanceSettings/api/arItem, xem ViewArItemService/ViewArItemParamListService). */
  getItemOptions(): Observable<ArItemOption[]> {
    return this.http.get<ArItemOption[]>('/ar/attendanceSettings/api/arItem', { withCredentials: true });
  }
}
