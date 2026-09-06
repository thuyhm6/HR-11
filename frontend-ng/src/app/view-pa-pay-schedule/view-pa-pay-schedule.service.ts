import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CodeItem, PaPayScheduleDto, PaPayScheduleSavePayload, PaPayScheduleSearchParams } from './view-pa-pay-schedule.model';

const API_BASE = '/pa/workManagement/api/paySchedule';

/** Gọi lại nguyên các API JSON đã có sẵn ở PaWorkManagementController (không đổi backend). */
@Injectable({ providedIn: 'root' })
export class ViewPaPayScheduleService {
  constructor(private readonly http: HttpClient) {}

  search(params: PaPayScheduleSearchParams): Observable<PaPayScheduleDto[]> {
    let httpParams = new HttpParams();
    if (params.fromDate) httpParams = httpParams.set('fromDate', params.fromDate);
    if (params.toDate) httpParams = httpParams.set('toDate', params.toDate);
    if (params.salaryDistinNo) httpParams = httpParams.set('salaryDistinNo', params.salaryDistinNo);
    return this.http.get<PaPayScheduleDto[]>(API_BASE, { params: httpParams, withCredentials: true });
  }

  getOne(payScheduleNo: string): Observable<PaPayScheduleDto> {
    return this.http.get<PaPayScheduleDto>(`${API_BASE}/${payScheduleNo}`, { withCredentials: true });
  }

  save(payload: PaPayScheduleSavePayload): Observable<{ success: boolean; message: string }> {
    return this.http.post<{ success: boolean; message: string }>(`${API_BASE}/save`, payload, { withCredentials: true });
  }

  delete(payScheduleNo: string): Observable<{ success: boolean; message: string }> {
    return this.http.delete<{ success: boolean; message: string }>(`${API_BASE}/delete/${payScheduleNo}`, { withCredentials: true });
  }

  getCodeList(parentCodeNo: string): Observable<CodeItem[]> {
    return this.http.get<CodeItem[]>('/sys/api/getCode/list', {
      params: new HttpParams().set('parentCodeNo', parentCodeNo),
      withCredentials: true,
    });
  }
}
