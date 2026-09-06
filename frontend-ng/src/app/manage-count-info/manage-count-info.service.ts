import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AuthDeptNode,
  CodeItem,
  ManageCountInfoEmpDto,
  ManageCountInfoSearchParams,
  ManageCountInfoSummaryDto,
} from './manage-count-info.model';

const API_BASE = '/ess/viewDept/api/manageCountInfo';

/**
 * Gọi lại nguyên các API JSON đã có sẵn ở backend mà ManageCountInfoList.html (Thymeleaf) đang dùng
 * - không đổi endpoint URL. Endpoint /list trước đây trả DataTablesResponse (phân trang server-side
 * cho DataTables) đã được đổi sang trả List<ManageCountInfoEmpDto> (không phân trang) để đồng nhất
 * với ManageEmpPositionInfoService - phân trang chuyển sang client-side bằng nz-table (xem
 * EssViewDeptController.getManageCountInfoList / ManageCountInfoServiceImpl.getList).
 * getCodeList/getAuthorizedDepartments dùng chung 2 endpoint sẵn có của toàn hệ thống.
 */
@Injectable({ providedIn: 'root' })
export class ManageCountInfoService {
  constructor(private readonly http: HttpClient) {}

  getSummary(params: ManageCountInfoSearchParams): Observable<ManageCountInfoSummaryDto> {
    return this.http.get<ManageCountInfoSummaryDto>(`${API_BASE}/summary`, {
      params: this.toHttpParams(params),
      withCredentials: true,
    });
  }

  getList(params: ManageCountInfoSearchParams): Observable<ManageCountInfoEmpDto[]> {
    return this.http.get<ManageCountInfoEmpDto[]>(`${API_BASE}/list`, {
      params: this.toHttpParams(params),
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

  private toHttpParams(params: ManageCountInfoSearchParams): HttpParams {
    let httpParams = new HttpParams();
    for (const [key, value] of Object.entries(params)) {
      if (value) httpParams = httpParams.set(key, value);
    }
    return httpParams;
  }
}
