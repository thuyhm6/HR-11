import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AuthDeptNode,
  CodeItem,
  UseOfAnnualLeaveDto,
  UseOfAnnualLeaveSearchParams,
} from './view-use-of-annual-leave-list.model';

const API_BASE = '/ess/viewDept/api/useOfAnnualLeave';

/**
 * Chuyển đổi từ trang JSP /ess/viewDept/viewUseOfAnnualLeaveList (Hanwha_HTSV) - gọi API JSON mới ở
 * EssViewDeptController (xem UseOfAnnualLeaveMapper.xml). Danh mục + cây phòng ban dùng lại API sẵn có.
 */
@Injectable({ providedIn: 'root' })
export class ViewUseOfAnnualLeaveListService {
  constructor(private readonly http: HttpClient) {}

  getList(params: UseOfAnnualLeaveSearchParams): Observable<UseOfAnnualLeaveDto[]> {
    let httpParams = new HttpParams();
    for (const [key, value] of Object.entries(params)) {
      if (value) httpParams = httpParams.set(key, value);
    }
    return this.http.get<UseOfAnnualLeaveDto[]>(`${API_BASE}/list`, { params: httpParams, withCredentials: true });
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
