import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AuthDeptNode,
  CodeItem,
  ItemOption,
  SearchApplyOtParams,
  SearchApplyOtRow,
  ShiftOption,
} from './search-apply-ot-info-list.model';

const API_BASE = '/ar/attendanceMintenance/api';

/**
 * Gọi lại nguyên các API JSON đã có sẵn ở ArAttendanceSearchController (không đổi backend) - bản
 * Angular của ar/attendanceMintenance/viewSearchApplyOtInfoList.html (Thymeleaf + DataTables).
 */
@Injectable({ providedIn: 'root' })
export class SearchApplyOtInfoListService {
  constructor(private readonly http: HttpClient) {}

  getList(params: SearchApplyOtParams): Observable<SearchApplyOtRow[]> {
    let httpParams = new HttpParams();
    for (const [key, value] of Object.entries(params)) {
      if (value) httpParams = httpParams.set(key, value);
    }
    return this.http.get<SearchApplyOtRow[]>(`${API_BASE}/attendanceSearch/otList`, {
      params: httpParams,
      withCredentials: true,
    });
  }

  getShiftOptions(): Observable<ShiftOption[]> {
    return this.http.get<ShiftOption[]>('/ar/attendanceSettings/api/shift', { withCredentials: true });
  }

  getItemOptions(): Observable<ItemOption[]> {
    return this.http.get<ItemOption[]>('/ar/attendanceSettings/api/arItemParam/options', {
      params: new HttpParams().set('type', 'overtime'),
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
