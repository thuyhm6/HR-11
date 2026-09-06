import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ArPersonalSelfDetailDto,
  ArPersonalSelfDto,
  ArPersonalSelfItem,
  ArPersonalSelfSearchParams,
} from './view-ar-personal-self-list.model';

const API_BASE = '/ess/viewDept/api/arPersonalSelf';

/**
 * Gọi lại nguyên các API JSON đã có sẵn (không đổi backend) - bản Angular của
 * ess/viewDept/viewArPersonalSelfList.html (Thymeleaf + jQuery, tự build bảng pivot + phân trang bằng
 * tay). Backend luôn lọc theo PERSON_ID = người dùng đang đăng nhập (adminID, tự động qua
 * interceptor) nên KHÔNG có tham số personId/deptNos/keyword ở summary - khác với API của trang
 * view-ar-personal-list (arPersonalList/**, có phạm vi phòng ban).
 */
@Injectable({ providedIn: 'root' })
export class ViewArPersonalSelfListService {
  constructor(private readonly http: HttpClient) {}

  getItems(): Observable<ArPersonalSelfItem[]> {
    return this.http.get<ArPersonalSelfItem[]>(`${API_BASE}/items`, { withCredentials: true });
  }

  getSummary(params: ArPersonalSelfSearchParams): Observable<ArPersonalSelfDto[]> {
    let httpParams = new HttpParams();
    if (params.startDate) httpParams = httpParams.set('startDate', params.startDate);
    if (params.endDate) httpParams = httpParams.set('endDate', params.endDate);
    return this.http.get<ArPersonalSelfDto[]>(`${API_BASE}/summary`, { params: httpParams, withCredentials: true });
  }

  getDetail(personId: string, itemNo: string, startDate: string, endDate: string): Observable<ArPersonalSelfDetailDto[]> {
    let httpParams = new HttpParams().set('personId', personId).set('itemNo', itemNo);
    if (startDate) httpParams = httpParams.set('startDate', startDate);
    if (endDate) httpParams = httpParams.set('endDate', endDate);
    return this.http.get<ArPersonalSelfDetailDto[]>(`${API_BASE}/detail`, { params: httpParams, withCredentials: true });
  }
}
