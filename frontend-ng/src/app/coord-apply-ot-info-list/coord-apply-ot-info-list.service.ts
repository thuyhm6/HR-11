import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AuthDeptNode,
  CodeItem,
  CoordApplyOtInfoRow,
  CoordApplyOtInfoSearchParams,
  DataTablesResponse,
  OtItemOption,
  ShiftOption,
} from './coord-apply-ot-info-list.model';

const API_BASE = '/ess/infoApply/api/coordOt';

/**
 * Gọi lại nguyên các API JSON đã có sẵn ở EssInfoApplyController (không đổi backend) - bản Angular của
 * ess/infoApply/viewCoordApplyOtInfoList.html (Thymeleaf + DataTables).
 */
@Injectable({ providedIn: 'root' })
export class CoordApplyOtInfoListService {
  constructor(private readonly http: HttpClient) {}

  getPageList(params: CoordApplyOtInfoSearchParams): Observable<DataTablesResponse<CoordApplyOtInfoRow>> {
    let httpParams = new HttpParams();
    for (const [key, value] of Object.entries(params)) {
      httpParams = httpParams.set(key, String(value));
    }
    return this.http.get<DataTablesResponse<CoordApplyOtInfoRow>>(`${API_BASE}/list`, {
      params: httpParams,
      withCredentials: true,
    });
  }

  getOtItemList(): Observable<OtItemOption[]> {
    return this.http.get<OtItemOption[]>(`${API_BASE}/items`, { withCredentials: true });
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
