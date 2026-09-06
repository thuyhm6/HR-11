import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AuthDeptNode,
  CodeItem,
  HrCardDetailDto,
  HrCardListRowDto,
  HrCardSearchParams,
} from './hr-card-info.model';

const LIST_API = '/ess/viewDept/api/manageEmpPositionInfo/list';
const CARD_API = '/hrm/empinfo/api/hrCard/detail';

/**
 * Gọi lại nguyên các API JSON đã có sẵn ở backend mà viewHTSVCardInfoList.html (Thymeleaf) đang dùng
 * - không đổi backend. Danh sách nhân viên dùng chung endpoint manageEmpPositionInfo/list (đúng như
 * bản gốc), chi tiết thẻ nhân sự gọi /hrm/empinfo/api/hrCard/detail (HrEmpinfoController.getHrCardDetail).
 */
@Injectable({ providedIn: 'root' })
export class HrCardInfoService {
  constructor(private readonly http: HttpClient) {}

  getList(params: HrCardSearchParams): Observable<HrCardListRowDto[]> {
    let httpParams = new HttpParams();
    for (const [key, value] of Object.entries(params)) {
      if (value) httpParams = httpParams.set(key, value);
    }
    return this.http.get<HrCardListRowDto[]>(LIST_API, { params: httpParams, withCredentials: true });
  }

  getCardDetail(empId: string): Observable<HrCardDetailDto> {
    return this.http.get<HrCardDetailDto>(CARD_API, {
      params: new HttpParams().set('empId', empId),
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
