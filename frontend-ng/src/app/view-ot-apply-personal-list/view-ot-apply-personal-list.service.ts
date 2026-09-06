import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AuthDeptNode,
  CodeItem,
  OtApplyPersonalListDetailRow,
  OtApplyPersonalListItem,
  OtApplyPersonalListSearchParams,
  OtApplyPersonalListSummaryRow,
} from './view-ot-apply-personal-list.model';

const API_BASE = '/ess/viewDept/api/arPersonalList';

/**
 * Gọi lại nguyên các API JSON đã có sẵn ở backend mà viewOtApplyPersonalList.html (Thymeleaf) đang
 * dùng - không đổi backend (xem EssViewDeptController#getArPersonalListItems/Summary/Detail). Cùng bộ
 * API với ViewArPersonalListService, chỉ khác itemGroup truyền lên ('1433' - nhóm tăng ca thay vì
 * '!1433' - loại trừ nhóm tăng ca).
 */
@Injectable({ providedIn: 'root' })
export class ViewOtApplyPersonalListService {
  constructor(private readonly http: HttpClient) {}

  getItems(itemGroup: string): Observable<OtApplyPersonalListItem[]> {
    return this.http.get<OtApplyPersonalListItem[]>(`${API_BASE}/items`, {
      params: new HttpParams().set('itemGroup', itemGroup),
      withCredentials: true,
    });
  }

  getSummary(params: OtApplyPersonalListSearchParams): Observable<OtApplyPersonalListSummaryRow[]> {
    let httpParams = new HttpParams();
    for (const [key, value] of Object.entries(params)) {
      if (value) httpParams = httpParams.set(key, value);
    }
    return this.http.get<OtApplyPersonalListSummaryRow[]>(`${API_BASE}/summary`, {
      params: httpParams,
      withCredentials: true,
    });
  }

  getDetail(personId: string, itemId: string, startDate: string, endDate: string): Observable<OtApplyPersonalListDetailRow[]> {
    let httpParams = new HttpParams().set('personId', personId).set('itemId', itemId);
    if (startDate) httpParams = httpParams.set('startDate', startDate);
    if (endDate) httpParams = httpParams.set('endDate', endDate);
    return this.http.get<OtApplyPersonalListDetailRow[]>(`${API_BASE}/detail`, {
      params: httpParams,
      withCredentials: true,
    });
  }

  getCodeList(parentCodeNo: string): Observable<CodeItem[]> {
    return this.http.get<CodeItem[]>('/sys/api/getCode/list', {
      params: new HttpParams().set('parentCodeNo', parentCodeNo),
      withCredentials: true,
    });
  }

  getAuthorizedDepartments(): Observable<AuthDeptNode[]> {
    return this.http.get<AuthDeptNode[]>('/ar/attendanceSettings/api/arSupervisor/authorized-departments', {
      withCredentials: true,
    });
  }
}
