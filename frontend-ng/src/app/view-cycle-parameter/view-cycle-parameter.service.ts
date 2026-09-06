import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ArStatisticDateParamDto,
  CycleParameterSavePayload,
  CycleParameterSearchParams,
} from './view-cycle-parameter.model';

const API_BASE = '/ar/attendanceSettings/api/cycleParameter';

/** Gọi lại nguyên các API JSON đã có sẵn ở ArStatisticDateParamController (không đổi backend). */
@Injectable({ providedIn: 'root' })
export class ViewCycleParameterService {
  constructor(private readonly http: HttpClient) {}

  search(params: CycleParameterSearchParams): Observable<ArStatisticDateParamDto[]> {
    let httpParams = new HttpParams();
    if (params.cpnyId) httpParams = httpParams.set('cpnyId', params.cpnyId);
    if (params.statNo) httpParams = httpParams.set('statNo', params.statNo);
    return this.http.get<ArStatisticDateParamDto[]>(API_BASE, { params: httpParams, withCredentials: true });
  }

  save(payload: CycleParameterSavePayload): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${API_BASE}/save`, payload, { withCredentials: true });
  }

  delete(paramNo: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${API_BASE}/delete/${paramNo}`, { withCredentials: true });
  }
}
