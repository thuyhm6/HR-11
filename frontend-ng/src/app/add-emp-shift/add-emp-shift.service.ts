import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArScheduleHtsvDto, ArScheduleHtsvSavePayload, ShiftOption } from './add-emp-shift.model';

const API_BASE = '/ar/attendanceMintenance/api/scheduleHtsv';
const EXCEL_TEMPLATE_NAME = 'AR_SCHEDULE_HTSV_Template';

/** Gọi lại nguyên các API JSON đã có sẵn ở ArScheduleHtsvController (không đổi backend). Ca làm việc
 *  tái dùng GET /ar/attendanceSettings/api/shift (giống ViewArCardRecordService.getShiftList) -
 *  import/xuất template tái dùng API dùng chung /sy/excel/api/* (ExcelController). */
@Injectable({ providedIn: 'root' })
export class AddEmpShiftService {
  constructor(private readonly http: HttpClient) {}

  list(empId: string, month: string): Observable<ArScheduleHtsvDto[]> {
    let httpParams = new HttpParams();
    if (empId) httpParams = httpParams.set('empId', empId);
    if (month) httpParams = httpParams.set('month', month);
    return this.http.get<ArScheduleHtsvDto[]>(`${API_BASE}/list`, { params: httpParams, withCredentials: true });
  }

  getByPkNo(pkNo: number): Observable<ArScheduleHtsvDto> {
    return this.http.get<ArScheduleHtsvDto>(`${API_BASE}/${pkNo}`, { withCredentials: true });
  }

  save(payload: ArScheduleHtsvSavePayload): Observable<{ success: boolean; message?: string; error?: string }> {
    return this.http.post<{ success: boolean; message?: string; error?: string }>(`${API_BASE}/save`, payload, {
      withCredentials: true,
    });
  }

  delete(pkNo: number): Observable<{ success: boolean; message?: string; error?: string }> {
    return this.http.delete<{ success: boolean; message?: string; error?: string }>(`${API_BASE}/delete/${pkNo}`, {
      withCredentials: true,
    });
  }

  getShiftList(): Observable<ShiftOption[]> {
    return this.http.get<ShiftOption[]>('/ar/attendanceSettings/api/shift', { withCredentials: true });
  }

  downloadTemplateUrl(): string {
    return `/sy/excel/api/downloadTemplate?templateName=${EXCEL_TEMPLATE_NAME}`;
  }

  uploadExcel(file: File): Observable<{ success: boolean; message?: string; errors?: string[] }> {
    const fd = new FormData();
    fd.append('templateName', EXCEL_TEMPLATE_NAME);
    fd.append('file', file);
    return this.http.post<{ success: boolean; message?: string; errors?: string[] }>(
      '/sy/excel/api/importTemplate',
      fd,
      { withCredentials: true },
    );
  }
}
