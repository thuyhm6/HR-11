import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaPayScheduleDto, PaPayStubDto } from './pa-month-person-info.model';

const API_BASE = '/pa/salary/api/monthPersonInfo';

/**
 * Gọi lại nguyên các API JSON đã có sẵn ở backend mà viewPaMonthPersonInfoEssList.html (Thymeleaf)
 * đang dùng - không đổi backend (PaMonthPersonInfoController).
 */
@Injectable({ providedIn: 'root' })
export class PaMonthPersonInfoService {
  constructor(private readonly http: HttpClient) {}

  getOpenPaySchedules(): Observable<PaPayScheduleDto[]> {
    return this.http.get<PaPayScheduleDto[]>(`${API_BASE}/payScheduleOpen`, { withCredentials: true });
  }

  loadSelfPayStub(payScheduleNo: string, lang: string): Observable<PaPayStubDto[]> {
    const params = new HttpParams().set('payScheduleNo', payScheduleNo).set('lang', lang);
    return this.http.get<PaPayStubDto[]>(`${API_BASE}/payStub/load`, { params, withCredentials: true });
  }
}
