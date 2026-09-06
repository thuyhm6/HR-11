import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArEmpGroupDto, ArEmpGroupSavePayload } from './view-dynamic-group.model';

const API_BASE = '/ar/attendanceSettings/api/dynamicGroup';

/** Gọi lại nguyên các API JSON đã có sẵn ở ArEmpGroupController (không đổi backend). */
@Injectable({ providedIn: 'root' })
export class ViewDynamicGroupService {
  constructor(private readonly http: HttpClient) {}

  list(empId: string): Observable<ArEmpGroupDto[]> {
    let httpParams = new HttpParams();
    if (empId) httpParams = httpParams.set('empId', empId);
    return this.http.get<ArEmpGroupDto[]>(`${API_BASE}/list`, { params: httpParams, withCredentials: true });
  }

  save(payload: ArEmpGroupSavePayload): Observable<{ success: boolean; message?: string; error?: string }> {
    return this.http.post<{ success: boolean; message?: string; error?: string }>(`${API_BASE}/save`, payload, {
      withCredentials: true,
    });
  }

  delete(personId: string): Observable<{ success: boolean; message?: string; error?: string }> {
    return this.http.delete<{ success: boolean; message?: string; error?: string }>(
      `${API_BASE}/delete/${personId}`,
      { withCredentials: true },
    );
  }
}
