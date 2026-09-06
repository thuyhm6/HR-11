import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CompanyActionResult, CompanySavePayload, HrCompanyDto } from './view-company.model';

const API_BASE = '/sys/api/company';

/**
 * Gọi lại nguyên API JSON đã có sẵn ở HrCompanyController (không đổi backend) - xem giải thích ở
 * ViewCompanyComponent. delete() gửi cpnyNo qua query string dù là POST vì backend nhận bằng
 * @RequestParam (Spring MVC đọc @RequestParam từ query string bất kể method).
 */
@Injectable({ providedIn: 'root' })
export class ViewCompanyService {
  constructor(private readonly http: HttpClient) {}

  list(keyword: string): Observable<HrCompanyDto[]> {
    let params = new HttpParams();
    if (keyword) params = params.set('keyword', keyword);
    return this.http.get<HrCompanyDto[]>(`${API_BASE}/list`, { params, withCredentials: true });
  }

  save(payload: CompanySavePayload): Observable<CompanyActionResult> {
    return this.http.post<CompanyActionResult>(`${API_BASE}/save`, payload, { withCredentials: true });
  }

  delete(cpnyNo: string): Observable<CompanyActionResult> {
    const params = new HttpParams().set('cpnyNo', cpnyNo);
    return this.http.post<CompanyActionResult>(`${API_BASE}/delete`, null, { params, withCredentials: true });
  }
}
