import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AuthDeptNode,
  CardApplyDetail,
  CheckAttendanceExRow,
  CheckAttendanceExSearchParams,
  CodeItem,
  ShiftOption,
} from './check-attendance-ex-for-batch.model';

const API_BASE = '/ess/infoApplyAttendance/api/checkAttendanceEx';

/**
 * Gọi lại nguyên các API JSON đã có sẵn ở EssInfoApplyAttendanceController (không đổi backend) - bản
 * Angular của ess/infoApplyAttendance/viewCheckAttencetanceExForBatchList.html (Thymeleaf + DataTables + jQuery).
 */
@Injectable({ providedIn: 'root' })
export class CheckAttendanceExForBatchService {
  constructor(private readonly http: HttpClient) {}

  getList(params: CheckAttendanceExSearchParams): Observable<CheckAttendanceExRow[]> {
    let httpParams = new HttpParams();
    for (const [key, value] of Object.entries(params)) {
      if (value) httpParams = httpParams.set(key, value);
    }
    return this.http.get<CheckAttendanceExRow[]>(`${API_BASE}/list`, { params: httpParams, withCredentials: true });
  }

  getDetail(applyNo: string, applyType: string): Observable<CardApplyDetail> {
    let httpParams = new HttpParams().set('applyNo', applyNo);
    if (applyType) httpParams = httpParams.set('applyType', applyType);
    return this.http.get<CardApplyDetail>(`${API_BASE}/detail`, { params: httpParams, withCredentials: true });
  }

  getShiftOptions(): Observable<ShiftOption[]> {
    return this.http.get<ShiftOption[]>('/ar/attendanceSettings/api/shift', { withCredentials: true });
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
