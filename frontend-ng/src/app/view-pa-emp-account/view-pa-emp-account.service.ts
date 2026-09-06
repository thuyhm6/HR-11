import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  DataTablesResponse,
  PaEmpAccountDto,
  PaEmpAccountSavePayload,
  PaEmpAccountSearchParams,
} from './view-pa-emp-account.model';

const API_BASE = '/pa/workManagement/api/empAccount';

/** Gọi lại nguyên các API JSON đã có sẵn ở PaWorkManagementController (không đổi backend, kể cả cơ chế
 *  phân trang server-side kiểu DataTables cũ draw/start/length + recordsFiltered). Dept tree / combo mã /
 *  tìm kiếm nhân viên dùng lại ChangeUserService (xem ViewPaEmpAccountComponent). */
@Injectable({ providedIn: 'root' })
export class ViewPaEmpAccountService {
  constructor(private readonly http: HttpClient) {}

  getPageList(params: PaEmpAccountSearchParams): Observable<DataTablesResponse<PaEmpAccountDto>> {
    let httpParams = new HttpParams()
      .set('draw', params.draw)
      .set('start', params.start)
      .set('length', params.length);
    if (params.empSearch) httpParams = httpParams.set('empSearch', params.empSearch);
    if (params.deptNos) httpParams = httpParams.set('deptNos', params.deptNos);
    if (params.empOfficeSearch) httpParams = httpParams.set('empOfficeSearch', params.empOfficeSearch);
    if (params.bankSearch) httpParams = httpParams.set('bankSearch', params.bankSearch);
    if (params.fromDateStarted) httpParams = httpParams.set('fromDateStarted', params.fromDateStarted);
    if (params.toDateStarted) httpParams = httpParams.set('toDateStarted', params.toDateStarted);
    return this.http.get<DataTablesResponse<PaEmpAccountDto>>(`${API_BASE}/list`, {
      params: httpParams,
      withCredentials: true,
    });
  }

  getOne(paEmpAccountNo: number): Observable<PaEmpAccountDto> {
    return this.http.get<PaEmpAccountDto>(`${API_BASE}/${paEmpAccountNo}`, { withCredentials: true });
  }

  save(payload: PaEmpAccountSavePayload): Observable<{ success: boolean; message: string }> {
    return this.http.post<{ success: boolean; message: string }>(`${API_BASE}/save`, payload, { withCredentials: true });
  }

  deleteList(ids: number[]): Observable<{ success: boolean; message: string }> {
    return this.http.request<{ success: boolean; message: string }>('DELETE', `${API_BASE}/deleteList`, {
      body: ids,
      withCredentials: true,
    });
  }
}
