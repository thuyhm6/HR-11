import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ArCountInfoLeaveDetailRow,
  ArCountInfoLeaveItem,
  ArCountInfoLeaveSummaryRow,
  ArCountInfoOtRow,
  AuthDeptNode,
  CodeItem,
  ShiftOption,
} from './ar-count-info-list.model';

/** Tab "Nghỉ phép" gọi lại nguyên API sẵn có của ArPersonalListService (xem EssViewDeptController). */
const LEAVE_API_BASE = '/ess/viewDept/api/arPersonalList';
/** Tab "Tăng ca" dùng API riêng (xem ArCountInfoListController) vì SQL tổng hợp theo tháng khác ArPersonalList. */
const OT_API_BASE = '/ar/countAttendance/api/arCountInfoList';

@Injectable({ providedIn: 'root' })
export class ArCountInfoListService {
  constructor(private readonly http: HttpClient) {}

  getLeaveItems(itemGroup: string): Observable<ArCountInfoLeaveItem[]> {
    return this.http.get<ArCountInfoLeaveItem[]>(`${LEAVE_API_BASE}/items`, {
      params: new HttpParams().set('itemGroup', itemGroup),
      withCredentials: true,
    });
  }

  getLeaveSummary(params: {
    keyword: string;
    deptNos: string;
    empTypeCode: string;
    startDate: string;
    endDate: string;
    itemGroup: string;
  }): Observable<ArCountInfoLeaveSummaryRow[]> {
    let httpParams = new HttpParams();
    for (const [key, value] of Object.entries(params)) {
      if (value) httpParams = httpParams.set(key, value);
    }
    return this.http.get<ArCountInfoLeaveSummaryRow[]>(`${LEAVE_API_BASE}/summary`, {
      params: httpParams,
      withCredentials: true,
    });
  }

  getLeaveDetail(personId: string, itemId: string, startDate: string, endDate: string): Observable<ArCountInfoLeaveDetailRow[]> {
    let httpParams = new HttpParams().set('personId', personId).set('itemId', itemId);
    if (startDate) httpParams = httpParams.set('startDate', startDate);
    if (endDate) httpParams = httpParams.set('endDate', endDate);
    return this.http.get<ArCountInfoLeaveDetailRow[]>(`${LEAVE_API_BASE}/detail`, {
      params: httpParams,
      withCredentials: true,
    });
  }

  getOtSummary(params: {
    keyword: string;
    deptNos: string;
    empTypeCode: string;
    shiftNo: string;
    startTime: string;
  }): Observable<ArCountInfoOtRow[]> {
    let httpParams = new HttpParams().set('startTime', params.startTime);
    if (params.keyword) httpParams = httpParams.set('keyword', params.keyword);
    if (params.deptNos) httpParams = httpParams.set('deptNos', params.deptNos);
    if (params.empTypeCode) httpParams = httpParams.set('empTypeCode', params.empTypeCode);
    if (params.shiftNo) httpParams = httpParams.set('shiftNo', params.shiftNo);
    return this.http.get<ArCountInfoOtRow[]>(`${OT_API_BASE}/otSummary`, {
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

  getShiftOptions(): Observable<ShiftOption[]> {
    return this.http.get<ShiftOption[]>('/ar/attendanceSettings/api/shift', { withCredentials: true });
  }

  getAuthorizedDepartments(): Observable<AuthDeptNode[]> {
    return this.http.get<AuthDeptNode[]>('/ar/attendanceSettings/api/arSupervisor/authorized-departments', {
      withCredentials: true,
    });
  }
}
