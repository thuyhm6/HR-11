import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  CodeItem,
  EmpDefaultInfoMap,
  EmployeeOption,
  LeaveApplyApiRow,
  LeaveApplyDetailResponse,
  LeaveApplySearchParams,
  SaveResult,
} from './apply-attendance-batch-info.model';

const API_BASE = '/ar/attendanceMintenance/api/leaveApply';
const EXCEL_TEMPLATE_NAME = 'AttendanceApply_add_Template';

/**
 * Gọi lại nguyên các API JSON đã có sẵn ở EssLeaveApplyController (không đổi backend) - bản Angular
 * của ess/infoApplyAttendance/viewApplyAttenanceBatchInfoList.html (Thymeleaf + DataTables + jQuery).
 */
@Injectable({ providedIn: 'root' })
export class ApplyAttendanceBatchInfoService {
  constructor(private readonly http: HttpClient) {}

  getList(params: LeaveApplySearchParams): Observable<LeaveApplyApiRow[]> {
    let httpParams = new HttpParams();
    for (const [key, value] of Object.entries(params)) {
      if (value) httpParams = httpParams.set(key, value);
    }
    return this.http.get<LeaveApplyApiRow[]>(`${API_BASE}/list`, { params: httpParams, withCredentials: true });
  }

  getDetail(applyNo: string, applyType: string): Observable<LeaveApplyDetailResponse> {
    let httpParams = new HttpParams().set('applyNo', applyNo);
    if (applyType) httpParams = httpParams.set('applyType', applyType);
    return this.http.get<LeaveApplyDetailResponse>(`${API_BASE}/detail`, { params: httpParams, withCredentials: true });
  }

  getEmpDefaultInfo(personId: string): Observable<EmpDefaultInfoMap> {
    return this.http.get<EmpDefaultInfoMap>(`${API_BASE}/empDefaultInfo`, {
      params: new HttpParams().set('personId', personId),
      withCredentials: true,
    });
  }

  getAffirmorsPreview(personId: string, leaveTypeCode: string): Observable<{ affirmStr: string }> {
    let httpParams = new HttpParams().set('personId', personId);
    if (leaveTypeCode) httpParams = httpParams.set('leaveTypeCode', leaveTypeCode);
    return this.http.get<{ affirmStr: string }>(`${API_BASE}/affirmorsPreview`, { params: httpParams, withCredentials: true });
  }

  calcLeaveLength(personId: string, fromTime: string, toTime: string, leaveTypeCode: string): Observable<{ LEAVE_LENGTH?: string }> {
    let httpParams = new HttpParams().set('personId', personId).set('fromTime', fromTime).set('toTime', toTime);
    if (leaveTypeCode) httpParams = httpParams.set('leaveTypeCode', leaveTypeCode);
    return this.http.get<{ LEAVE_LENGTH?: string }>(`${API_BASE}/calcLeaveLength`, { params: httpParams, withCredentials: true });
  }

  save(payload: Record<string, unknown>): Observable<SaveResult> {
    return this.http.post<SaveResult>(`${API_BASE}/save`, payload, { withCredentials: true });
  }

  resubmit(payload: Record<string, unknown>): Observable<SaveResult> {
    return this.http.post<SaveResult>(`${API_BASE}/resubmit`, payload, { withCredentials: true });
  }

  cancel(applyNo: string): Observable<SaveResult> {
    return this.http.post<SaveResult>(`${API_BASE}/cancel`, { applyNo }, { withCredentials: true });
  }

  searchEmployees(keyword: string, empOffice: string): Observable<EmployeeOption[]> {
    let httpParams = new HttpParams().set('keyword', keyword);
    if (empOffice) httpParams = httpParams.set('empOffice', empOffice);
    return this.http.get<EmployeeOption[]>('/hrm/empinfo/api/employee/search', { params: httpParams, withCredentials: true });
  }

  getCodeList(parentCodeNo: string): Observable<CodeItem[]> {
    return this.http.get<CodeItem[]>('/sys/api/getCode/list', {
      params: new HttpParams().set('parentCodeNo', parentCodeNo),
      withCredentials: true,
    });
  }

  downloadTemplateUrl(): string {
    return `/sy/excel/api/downloadTemplate?templateName=${EXCEL_TEMPLATE_NAME}`;
  }

  importExcel(file: File): Observable<SaveResult & { errors?: string[] }> {
    const fd = new FormData();
    fd.append('templateName', EXCEL_TEMPLATE_NAME);
    fd.append('file', file);
    return this.http.post<SaveResult & { errors?: string[] }>('/sy/excel/api/importTemplate', fd, { withCredentials: true });
  }
}
