import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArShiftGroupManagementDto, ArShiftGroupSavePayload, CodeItem } from './view-ar-shift-group-list.model';

const API_BASE = '/ess/deptEmpAtt/api/shiftGroup';

/** Gọi lại nguyên các API JSON đã có sẵn ở EssDeptEmpAttController (không đổi backend). */
@Injectable({ providedIn: 'root' })
export class ViewArShiftGroupListService {
  constructor(private readonly http: HttpClient) {}

  list(empId: string, empName: string): Observable<ArShiftGroupManagementDto[]> {
    let httpParams = new HttpParams();
    if (empId) httpParams = httpParams.set('empId', empId);
    if (empName) httpParams = httpParams.set('empName', empName);
    return this.http.get<ArShiftGroupManagementDto[]>(`${API_BASE}/list`, { params: httpParams, withCredentials: true });
  }

  save(payload: ArShiftGroupSavePayload): Observable<{ success: boolean; message?: string; error?: string }> {
    return this.http.post<{ success: boolean; message?: string; error?: string }>(`${API_BASE}/save`, payload, {
      withCredentials: true,
    });
  }

  getCodeList(parentCodeNo: string): Observable<CodeItem[]> {
    return this.http.get<CodeItem[]>('/sys/api/getCode/list', {
      params: new HttpParams().set('parentCodeNo', parentCodeNo),
      withCredentials: true,
    });
  }
}
