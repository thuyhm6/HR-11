import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  OtApplyPersonalSelfDetailDto,
  OtApplyPersonalSelfDto,
  OtApplyPersonalSelfItem,
  OtApplyPersonalSelfSearchParams,
} from './view-ot-apply-personal-self-list.model';

const API_BASE = '/ess/viewDept/api/otApplyPersonalSelf';

/**
 * Gọi lại nguyên các API JSON đã có sẵn (không đổi backend) - bản Angular của
 * ess/viewDept/viewOtApplyPersonalSelfList.html (Thymeleaf + jQuery, tự build bảng pivot + phân trang
 * bằng tay). Backend luôn lọc theo PERSON_ID = người dùng đang đăng nhập (adminID, tự động qua
 * interceptor) nên KHÔNG có tham số personId/deptNos/keyword ở summary - cấu trúc y hệt
 * ViewArPersonalSelfListService, chỉ khác domain dữ liệu (tăng ca thay vì chấm công).
 */
@Injectable({ providedIn: 'root' })
export class ViewOtApplyPersonalSelfListService {
  constructor(private readonly http: HttpClient) {}

  getItems(): Observable<OtApplyPersonalSelfItem[]> {
    return this.http.get<OtApplyPersonalSelfItem[]>(`${API_BASE}/items`, { withCredentials: true });
  }

  getSummary(params: OtApplyPersonalSelfSearchParams): Observable<OtApplyPersonalSelfDto[]> {
    let httpParams = new HttpParams();
    if (params.startDate) httpParams = httpParams.set('startDate', params.startDate);
    if (params.endDate) httpParams = httpParams.set('endDate', params.endDate);
    return this.http.get<OtApplyPersonalSelfDto[]>(`${API_BASE}/summary`, { params: httpParams, withCredentials: true });
  }

  getDetail(personId: string, itemNo: string, startDate: string, endDate: string): Observable<OtApplyPersonalSelfDetailDto[]> {
    let httpParams = new HttpParams().set('personId', personId).set('itemNo', itemNo);
    if (startDate) httpParams = httpParams.set('startDate', startDate);
    if (endDate) httpParams = httpParams.set('endDate', endDate);
    return this.http.get<OtApplyPersonalSelfDetailDto[]>(`${API_BASE}/detail`, { params: httpParams, withCredentials: true });
  }
}
