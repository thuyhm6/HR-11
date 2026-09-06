import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ArPersonalListDetailRow,
  ArPersonalListItem,
  ArPersonalListSearchParams,
  ArPersonalListSummaryRow,
  AuthDeptNode,
  CodeItem,
} from './view-ar-personal-list.model';

const API_BASE = '/ess/viewDept/api/arPersonalList';

/**
 * Gọi lại nguyên các API JSON đã có sẵn ở backend mà viewArPersonalList.html (Thymeleaf) đang dùng -
 * không đổi backend (xem EssViewDeptController#getArPersonalListItems/Summary/Detail).
 * getCodeList/getAuthorizedDepartments dùng chung 2 endpoint sẵn có của toàn hệ thống, giống
 * ManageEmpPositionInfoService.
 */
@Injectable({ providedIn: 'root' })
export class ViewArPersonalListService {
  constructor(private readonly http: HttpClient) {}

  getItems(itemGroup: string): Observable<ArPersonalListItem[]> {
    return this.http.get<ArPersonalListItem[]>(`${API_BASE}/items`, {
      params: new HttpParams().set('itemGroup', itemGroup),
      withCredentials: true,
    });
  }

  getSummary(params: ArPersonalListSearchParams): Observable<ArPersonalListSummaryRow[]> {
    let httpParams = new HttpParams();
    for (const [key, value] of Object.entries(params)) {
      if (value) httpParams = httpParams.set(key, value);
    }
    return this.http.get<ArPersonalListSummaryRow[]>(`${API_BASE}/summary`, {
      params: httpParams,
      withCredentials: true,
    });
  }

  getDetail(personId: string, itemId: string, startDate: string, endDate: string): Observable<ArPersonalListDetailRow[]> {
    let httpParams = new HttpParams().set('personId', personId).set('itemId', itemId);
    if (startDate) httpParams = httpParams.set('startDate', startDate);
    if (endDate) httpParams = httpParams.set('endDate', endDate);
    return this.http.get<ArPersonalListDetailRow[]>(`${API_BASE}/detail`, {
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
