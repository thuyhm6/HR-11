import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AuthDeptNode,
  CodeItem,
  OtApplyPersonalListDetailRow,
  OtApplyPersonalListRow,
  OtApplyPersonalListSearchParams,
  OtType,
} from './view-ot-apply-personal-list.model';

const API_BASE = '/ess/viewDept/api/otApplyPersonalList';

/**
 * Chuyển đổi từ trang JSP /ess/viewDept/viewOtApplyPersonalList (Hanwha_HTSV) - gọi API JSON ở
 * EssViewDeptController (xem OtApplyPersonalListMapper.xml). Danh mục + cây phòng ban dùng lại API sẵn có.
 */
@Injectable({ providedIn: 'root' })
export class ViewOtApplyPersonalListService {
  constructor(private readonly http: HttpClient) {}

  getSummary(params: OtApplyPersonalListSearchParams): Observable<OtApplyPersonalListRow[]> {
    let httpParams = new HttpParams();
    for (const [key, value] of Object.entries(params)) {
      if (value) httpParams = httpParams.set(key, value);
    }
    return this.http.get<OtApplyPersonalListRow[]>(`${API_BASE}/summary`, { params: httpParams, withCredentials: true });
  }

  getDetail(personId: string, otType: OtType, startDate: string, endDate: string): Observable<OtApplyPersonalListDetailRow[]> {
    let httpParams = new HttpParams().set('personId', personId).set('otType', otType);
    if (startDate) httpParams = httpParams.set('startDate', startDate);
    if (endDate) httpParams = httpParams.set('endDate', endDate);
    return this.http.get<OtApplyPersonalListDetailRow[]>(`${API_BASE}/detail`, { params: httpParams, withCredentials: true });
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
