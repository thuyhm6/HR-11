import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  PaCodeOption,
  PaMonthDifItem,
  PaMonthPersonSummary,
  PaResultConfirmSummary,
  PaSalaryCheckItem,
  PaSalaryCheckQuery,
  PaSalaryCheckRow,
  PaScheduleOption,
} from './pa-salary-check.model';

const API_BASE = '/pa/workManagement/api/salaryCheck';

/**
 * API của PaSalaryCheckController dùng chung cho nhóm màn hình kiểm tra / đối chiếu lương.
 * Kế hoạch trả lương / mã code gọi lại API sẵn có (PaWorkManagementController, /sys/api/getCode/list).
 */
@Injectable({ providedIn: 'root' })
export class PaSalaryCheckService {
  constructor(private readonly http: HttpClient) {}

  getSchedules(): Observable<PaScheduleOption[]> {
    return this.http.get<PaScheduleOption[]>('/pa/workManagement/api/paySchedule', { withCredentials: true });
  }

  getCodeList(parentCodeNo: string): Observable<PaCodeOption[]> {
    return this.http.get<PaCodeOption[]>('/sys/api/getCode/list', {
      params: new HttpParams().set('parentCodeNo', parentCodeNo),
      withCredentials: true,
    });
  }

  getMonthPerson(q: PaSalaryCheckQuery): Observable<PaMonthPersonSummary> {
    return this.get<PaMonthPersonSummary>('/monthPerson', q);
  }

  getEmployeesByPersonIds(personIds: string[]): Observable<PaSalaryCheckRow[]> {
    return this.http.post<PaSalaryCheckRow[]>(`${API_BASE}/monthPerson/employees`, { personIds }, { withCredentials: true });
  }

  getMonthChain(q: PaSalaryCheckQuery): Observable<PaMonthDifItem[]> {
    return this.get<PaMonthDifItem[]>('/monthChain', q);
  }

  getVerification(q: PaSalaryCheckQuery): Observable<PaSalaryCheckRow[]> {
    return this.get<PaSalaryCheckRow[]>('/verification', q);
  }

  getPersonInfo(q: PaSalaryCheckQuery): Observable<PaSalaryCheckRow> {
    return this.get<PaSalaryCheckRow>('/person/info', q);
  }

  getPersonItems(q: PaSalaryCheckQuery): Observable<PaSalaryCheckItem[]> {
    return this.get<PaSalaryCheckItem[]>('/person/items', q);
  }

  getItemOptions(): Observable<PaSalaryCheckItem[]> {
    return this.get<PaSalaryCheckItem[]>('/items', {});
  }

  getItemCount(q: PaSalaryCheckQuery): Observable<PaSalaryCheckRow[]> {
    return this.get<PaSalaryCheckRow[]>('/itemCount', q);
  }

  getMonthDifGroups(q: PaSalaryCheckQuery): Observable<PaMonthDifItem[]> {
    return this.get<PaMonthDifItem[]>('/monthDif/groups', q);
  }

  getMonthDifDetails(q: PaSalaryCheckQuery, refresh = false): Observable<PaSalaryCheckRow[]> {
    return this.get<PaSalaryCheckRow[]>('/monthDif/details', q, refresh ? { refresh: 'true' } : {});
  }

  getResultConfirmSummary(q: PaSalaryCheckQuery): Observable<PaResultConfirmSummary> {
    return this.get<PaResultConfirmSummary>('/resultConfirm/summary', q);
  }

  getResultConfirmOt(q: PaSalaryCheckQuery): Observable<PaSalaryCheckRow[]> {
    return this.get<PaSalaryCheckRow[]>('/resultConfirm/ot', q);
  }

  getResultConfirmOtDetails(q: PaSalaryCheckQuery): Observable<PaSalaryCheckRow[]> {
    return this.get<PaSalaryCheckRow[]>('/resultConfirm/otDetails', q);
  }

  getResultConfirmInsurance(q: PaSalaryCheckQuery): Observable<PaSalaryCheckRow[]> {
    return this.get<PaSalaryCheckRow[]>('/resultConfirm/insurance', q);
  }

  getResultConfirmTax(q: PaSalaryCheckQuery): Observable<PaSalaryCheckRow[]> {
    return this.get<PaSalaryCheckRow[]>('/resultConfirm/tax', q);
  }

  private get<T>(path: string, q: PaSalaryCheckQuery, extra: Record<string, string> = {}): Observable<T> {
    let params = new HttpParams();
    Object.entries({ ...q, ...extra }).forEach(([k, v]) => {
      if (v !== null && v !== undefined && String(v).trim() !== '') params = params.set(k, String(v).trim());
    });
    return this.http.get<T>(`${API_BASE}${path}`, { params, withCredentials: true });
  }
}
