import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  DataTablesResponse,
  DeptTreeNode,
  PaSupervisorActionResponse,
  PaSupervisorDto,
  PaSupervisorSavePayload,
  PaSupervisorSearchParams,
} from './view-pa-supervisor.model';

const API_BASE = '/pa/wagebase/api/supervisor';

/** Gọi lại nguyên các API JSON đã có sẵn ở PaSupervisorController (không đổi backend, kể cả cơ chế
 *  phân trang server-side kiểu DataTables cũ draw/start/length + recordsFiltered). Tìm kiếm/chọn nhân
 *  viên khi thêm mới dùng lại ChangeUserService (searchEmployees/getAuthorizedDepartments/getCodeList)
 *  thay cho EmployeeSearchModal jQuery - xem giải thích ở ViewPaSupervisorComponent. */
@Injectable({ providedIn: 'root' })
export class ViewPaSupervisorService {
  constructor(private readonly http: HttpClient) {}

  getPageList(params: PaSupervisorSearchParams): Observable<DataTablesResponse<PaSupervisorDto>> {
    let httpParams = new HttpParams()
      .set('draw', params.draw)
      .set('start', params.start)
      .set('length', params.length);
    if (params.empSearch) httpParams = httpParams.set('empSearch', params.empSearch);
    if (params.deptNos) httpParams = httpParams.set('deptNos', params.deptNos);
    if (params.empOfficeSearch) httpParams = httpParams.set('empOfficeSearch', params.empOfficeSearch);
    return this.http.get<DataTablesResponse<PaSupervisorDto>>(`${API_BASE}/list`, {
      params: httpParams,
      withCredentials: true,
    });
  }

  getOne(personId: string): Observable<PaSupervisorDto> {
    return this.http.get<PaSupervisorDto>(`${API_BASE}/${personId}`, { withCredentials: true });
  }

  save(payload: PaSupervisorSavePayload): Observable<PaSupervisorActionResponse> {
    return this.http.post<PaSupervisorActionResponse>(`${API_BASE}/save`, payload, { withCredentials: true });
  }

  delete(personId: string): Observable<PaSupervisorActionResponse> {
    return this.http.delete<PaSupervisorActionResponse>(`${API_BASE}/delete/${personId}`, { withCredentials: true });
  }

  /** Toàn bộ cây phòng ban công ty (khác authorized-departments) - dùng để cấu hình phân quyền phòng
   *  ban cho 1 người phụ trách lương. */
  getDepartmentTree(): Observable<DeptTreeNode[]> {
    return this.http.get<DeptTreeNode[]>(`${API_BASE}/departments`, { withCredentials: true });
  }

  getSupervisorDepartments(personId: string): Observable<string[]> {
    return this.http.get<string[]>(`${API_BASE}/${personId}/departments`, { withCredentials: true });
  }

  saveDepartments(personId: string, deptNoList: string[]): Observable<PaSupervisorActionResponse> {
    return this.http.post<PaSupervisorActionResponse>(`${API_BASE}/${personId}/saveDepartments`, deptNoList, {
      withCredentials: true,
    });
  }
}
