import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaWorkFlowDto, PaWorkFlowPayScheduleDto, PaWorkFlowRecordDto, PaWorkFlowTaskType } from './view-pa-work-flow.model';

const API_BASE = '/pa/workManagement/api';

/**
 * Gọi lại nguyên các API JSON đã có sẵn ở backend mà viewPaWorkFlow.html (Thymeleaf) đang dùng -
 * không đổi backend (PaWorkManagementController).
 */
@Injectable({ providedIn: 'root' })
export class ViewPaWorkFlowService {
  constructor(private readonly http: HttpClient) {}

  getPaySchedules(): Observable<PaWorkFlowPayScheduleDto[]> {
    return this.http.get<PaWorkFlowPayScheduleDto[]>(`${API_BASE}/paySchedule`, { withCredentials: true });
  }

  getWorkFlow(payScheduleNo: string): Observable<PaWorkFlowDto | null> {
    const params = new HttpParams().set('payScheduleNo', payScheduleNo);
    return this.http.get<PaWorkFlowDto | null>(`${API_BASE}/workFlow`, { params, withCredentials: true });
  }

  getRecords(payScheduleNo: string, flowStep?: number): Observable<PaWorkFlowRecordDto[]> {
    let params = new HttpParams().set('payScheduleNo', payScheduleNo);
    if (flowStep != null) params = params.set('flowStep', flowStep);
    return this.http.get<PaWorkFlowRecordDto[]>(`${API_BASE}/workFlow/records`, { params, withCredentials: true });
  }

  executeTask(payScheduleNo: string, type: PaWorkFlowTaskType): Observable<{ success: boolean; message: string }> {
    return this.http.post<{ success: boolean; message: string }>(
      `${API_BASE}/workFlow/execute`,
      { payScheduleNo, type },
      { withCredentials: true },
    );
  }
}
