import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaResultSummaryDto } from './view-pa-result-list.model';

const API_BASE = '/pa/workManagement/api/salaryResult';

/**
 * API tổng lương của PaSalaryResultController - dùng chung cho /view-pa-result-list (cá nhân) và
 * /view-dept-pa-result-list (phòng ban). Kế hoạch trả lương / cây phòng ban dùng lại ViewPaPayStubService.
 */
@Injectable({ providedIn: 'root' })
export class PaResultListService {
  constructor(private readonly http: HttpClient) {}

  getEmpList(payScheduleNo: string, deptNos: string[], empSearch: string): Observable<PaResultSummaryDto[]> {
    let params = this.baseParams(payScheduleNo, deptNos);
    if (empSearch.trim()) params = params.set('empSearch', empSearch.trim());
    return this.http.get<PaResultSummaryDto[]>(`${API_BASE}/emp`, { params, withCredentials: true });
  }

  getDeptList(payScheduleNo: string, deptNos: string[]): Observable<PaResultSummaryDto[]> {
    return this.http.get<PaResultSummaryDto[]>(`${API_BASE}/dept`, {
      params: this.baseParams(payScheduleNo, deptNos),
      withCredentials: true,
    });
  }

  private baseParams(payScheduleNo: string, deptNos: string[]): HttpParams {
    let params = new HttpParams().set('payScheduleNo', payScheduleNo);
    deptNos.forEach((d) => (params = params.append('deptNos', d)));
    return params;
  }
}
