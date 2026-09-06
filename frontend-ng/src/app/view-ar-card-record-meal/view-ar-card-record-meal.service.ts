import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ArMacRecordEatDto,
  ArMacRecordEatSearchParams,
  AuthDeptNode,
  DataTablesResponse,
  ImportDeviceResult,
} from './view-ar-card-record-meal.model';

const API_BASE = '/ar/attendanceMintenance/api/macRecordEat';

/**
 * Gọi lại nguyên API JSON/servlet đã có sẵn ở ArAttendanceSearchController (xem viewArCardRecordMeal.html
 * bản Thymeleaf gốc) - không đổi backend. /list vẫn trả DataTablesResponse phân trang server-side như
 * ViewArCardRecordDayService (trang chị em cùng controller). /exportExcel khác các trang chị em ở chỗ
 * backend tự sinh file .xlsx trên TOÀN BỘ dữ liệu theo điều kiện lọc (arMacRecordEatService.getExportList)
 * chứ không phải xuất client-side theo trang đang tải - giữ nguyên hành vi bằng cách điều hướng trình
 * duyệt tới URL kèm query params (xem exportExcelUrl() + cách dùng ở component).
 */
@Injectable({ providedIn: 'root' })
export class ViewArCardRecordMealService {
  constructor(private readonly http: HttpClient) {}

  getPageList(params: ArMacRecordEatSearchParams): Observable<DataTablesResponse<ArMacRecordEatDto>> {
    let httpParams = new HttpParams();
    for (const [key, value] of Object.entries(params)) {
      httpParams = httpParams.set(key, String(value));
    }
    return this.http.get<DataTablesResponse<ArMacRecordEatDto>>(`${API_BASE}/list`, { params: httpParams, withCredentials: true });
  }

  exportExcelUrl(params: Omit<ArMacRecordEatSearchParams, 'draw' | 'start' | 'length'>): string {
    const httpParams = new HttpParams({ fromObject: { ...params } });
    return `${API_BASE}/exportExcel?${httpParams.toString()}`;
  }

  importFromDevice(fromDate: string, toDate: string): Observable<ImportDeviceResult> {
    const body = new HttpParams().set('fromDate', fromDate).set('toDate', toDate);
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post<ImportDeviceResult>(`${API_BASE}/importFromDevice`, body.toString(), { headers, withCredentials: true });
  }

  getAuthorizedDepartments(): Observable<AuthDeptNode[]> {
    return this.http.get<AuthDeptNode[]>('/ar/attendanceSettings/api/arSupervisor/authorized-departments', {
      withCredentials: true,
    });
  }
}
