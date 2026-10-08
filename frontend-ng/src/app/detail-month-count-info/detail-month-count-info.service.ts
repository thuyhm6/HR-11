import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaSalaryDetailDto, PaSalaryDetailItemDto, PaSalaryDetailItemsQuery } from './detail-month-count-info.model';

const API_BASE = '/pa/workManagement/api/salaryResult';

/**
 * API của PaSalaryResultController dùng chung cho 2 trang Lương tháng chi tiết / Lương năm chi tiết và panel chi tiết
 * hạng mục (PaSalaryDetailItemsComponent). Kế hoạch trả lương / cây phòng ban dùng lại ViewPaPayStubService.
 */
@Injectable({ providedIn: 'root' })
export class PaSalaryDetailService {
  constructor(private readonly http: HttpClient) {}

  getMonthList(payScheduleNo: string, empSearch: string, deptNo: string | null): Observable<PaSalaryDetailDto[]> {
    let params = new HttpParams().set('payScheduleNo', payScheduleNo);
    if (empSearch.trim()) params = params.set('empSearch', empSearch.trim());
    if (deptNo) params = params.set('deptNo', deptNo);
    return this.http.get<PaSalaryDetailDto[]>(`${API_BASE}/month`, { params, withCredentials: true });
  }

  getYearList(personId: string, startMonth: string, endMonth: string): Observable<PaSalaryDetailDto[]> {
    const params = new HttpParams().set('personId', personId).set('startMonth', startMonth).set('endMonth', endMonth);
    return this.http.get<PaSalaryDetailDto[]>(`${API_BASE}/year`, { params, withCredentials: true });
  }

  getDetailItems(query: PaSalaryDetailItemsQuery): Observable<PaSalaryDetailItemDto[]> {
    let params = new HttpParams();
    Object.entries(query).forEach(([k, v]) => {
      if (v !== null && v !== undefined && String(v) !== '') params = params.set(k, String(v));
    });
    return this.http.get<PaSalaryDetailItemDto[]>(`${API_BASE}/detailItems`, { params, withCredentials: true });
  }
}
