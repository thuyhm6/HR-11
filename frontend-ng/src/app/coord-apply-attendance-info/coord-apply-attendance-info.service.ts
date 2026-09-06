import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AttendanceItemOption,
  AuthDeptNode,
  CodeItem,
  CoordApplyAttendanceRow,
  CoordApplyAttendanceSearchParams,
  DataTablesResponse,
  ShiftOption,
} from './coord-apply-attendance-info.model';

const API_BASE = '/ess/infoApplyAttendance/api';

/**
 * Gọi lại nguyên các API JSON đã có sẵn ở EssInfoApplyAttendanceController (không đổi backend) - bản
 * Angular của ess/infoApplyAttendance/viewCoordApplyAttendanceInfoList.html (Thymeleaf + DataTables).
 */
@Injectable({ providedIn: 'root' })
export class CoordApplyAttendanceInfoService {
  constructor(private readonly http: HttpClient) {}

  getPageList(params: CoordApplyAttendanceSearchParams): Observable<DataTablesResponse<CoordApplyAttendanceRow>> {
    let httpParams = new HttpParams();
    for (const [key, value] of Object.entries(params)) {
      httpParams = httpParams.set(key, String(value));
    }
    return this.http.get<DataTablesResponse<CoordApplyAttendanceRow>>(`${API_BASE}/coordApply/list`, {
      params: httpParams,
      withCredentials: true,
    });
  }

  getAttendanceItems(): Observable<AttendanceItemOption[]> {
    return this.http.get<AttendanceItemOption[]>(`${API_BASE}/attendancePersonal/items`, { withCredentials: true });
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
