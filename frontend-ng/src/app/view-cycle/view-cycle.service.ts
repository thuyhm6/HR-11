import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArStatisticDateDto, CycleSavePayload } from './view-cycle.model';

const API_BASE = '/ar/attendanceSettings/api/cycle';

/** Gọi lại nguyên các API JSON đã có sẵn ở ArStatisticDateController (không đổi backend). */
@Injectable({ providedIn: 'root' })
export class ViewCycleService {
  constructor(private readonly http: HttpClient) {}

  search(statNo: string): Observable<ArStatisticDateDto[]> {
    let httpParams = new HttpParams();
    if (statNo) httpParams = httpParams.set('statNo', statNo);
    return this.http.get<ArStatisticDateDto[]>(API_BASE, { params: httpParams, withCredentials: true });
  }

  save(payload: CycleSavePayload): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${API_BASE}/save`, payload, { withCredentials: true });
  }

  delete(statNo: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${API_BASE}/delete/${statNo}`, { withCredentials: true });
  }
}
