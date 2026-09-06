import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ArCardRecordDto,
  ArCardRecordSearchParams,
  AuthDeptNode,
  DataTablesResponse,
  EmployeeOption,
  ImportDeviceResult,
  SaveResult,
  ShiftOption,
  UploadExcelResult,
} from './view-ar-card-record.model';

const API_BASE = '/ar/attendanceMintenance/api/cardRecord';
const EXCEL_TEMPLATE_NAME = 'Card_Template';

/**
 * Gọi lại nguyên các API JSON đã có sẵn ở ArAttendanceSearchController (xem viewArCardRecord.html
 * bản Thymeleaf gốc) - không đổi backend. /api/cardRecord/list vẫn trả DataTablesResponse phân trang
 * server-side (không đổi sang trả toàn bộ danh sách như ManageEmpPositionInfoService vì dữ liệu quẹt
 * thẻ có thể rất lớn).
 */
@Injectable({ providedIn: 'root' })
export class ViewArCardRecordService {
  constructor(private readonly http: HttpClient) {}

  getPageList(params: ArCardRecordSearchParams): Observable<DataTablesResponse<ArCardRecordDto>> {
    let httpParams = new HttpParams();
    for (const [key, value] of Object.entries(params)) {
      httpParams = httpParams.set(key, String(value));
    }
    return this.http.get<DataTablesResponse<ArCardRecordDto>>(`${API_BASE}/list`, { params: httpParams, withCredentials: true });
  }

  getDetail(recordNo: number): Observable<{ success: boolean; message?: string; data?: ArCardRecordDto }> {
    return this.http.get<{ success: boolean; message?: string; data?: ArCardRecordDto }>(`${API_BASE}/detail`, {
      params: new HttpParams().set('recordNo', recordNo),
      withCredentials: true,
    });
  }

  insert(dto: Partial<ArCardRecordDto>): Observable<SaveResult> {
    return this.http.post<SaveResult>(`${API_BASE}/insert`, dto, { withCredentials: true });
  }

  update(dto: Partial<ArCardRecordDto>): Observable<SaveResult> {
    return this.http.post<SaveResult>(`${API_BASE}/update`, dto, { withCredentials: true });
  }

  delete(recordNo: number): Observable<SaveResult> {
    return this.http.post<SaveResult>(`${API_BASE}/delete`, { recordNo }, { withCredentials: true });
  }

  importFromDevice(fromDate: string, toDate: string): Observable<ImportDeviceResult> {
    const body = new HttpParams().set('fromDate', fromDate).set('toDate', toDate);
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post<ImportDeviceResult>(`${API_BASE}/importFromDevice`, body.toString(), { headers, withCredentials: true });
  }

  uploadExcel(file: File): Observable<UploadExcelResult> {
    const fd = new FormData();
    fd.append('file', file);
    return this.http.post<UploadExcelResult>('/ar/attendanceMintenance/api/macRecordTemp/uploadExcel', fd, { withCredentials: true });
  }

  downloadTemplateUrl(): string {
    return `/sy/excel/api/downloadTemplate?templateName=${EXCEL_TEMPLATE_NAME}`;
  }

  getShiftList(): Observable<ShiftOption[]> {
    return this.http.get<ShiftOption[]>('/ar/attendanceSettings/api/shift', { withCredentials: true });
  }

  searchEmployees(keyword: string): Observable<EmployeeOption[]> {
    return this.http.get<EmployeeOption[]>('/hrm/empinfo/api/employee/search', {
      params: new HttpParams().set('keyword', keyword),
      withCredentials: true,
    });
  }

  getAuthorizedDepartments(): Observable<AuthDeptNode[]> {
    return this.http.get<AuthDeptNode[]>('/ar/attendanceSettings/api/arSupervisor/authorized-departments', {
      withCredentials: true,
    });
  }
}
