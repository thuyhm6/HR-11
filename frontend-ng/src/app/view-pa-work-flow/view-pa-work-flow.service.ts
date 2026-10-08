import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaWorkFlowDto, PaWorkFlowPayScheduleDto, PaWorkFlowRecordDto, PaWorkFlowTaskType } from './view-pa-work-flow.model';

const API_BASE = '/pa/workManagement/api';

/** Gọi các API JSON quy trình tính lương ở PaWorkManagementController. */
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

  /** flowSteps: lọc theo nhiều bước cùng lúc (vd [4, 6] = Chốt lương + Hủy chốt lương, giống
   *  FLOW_STEP=4,6 ở bản gốc) - rỗng/không truyền = lấy toàn bộ lịch sử. */
  getRecords(payScheduleNo: string, flowSteps?: number[]): Observable<PaWorkFlowRecordDto[]> {
    let params = new HttpParams().set('payScheduleNo', payScheduleNo);
    if (flowSteps?.length) params = params.set('flowStep', flowSteps.join(','));
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
