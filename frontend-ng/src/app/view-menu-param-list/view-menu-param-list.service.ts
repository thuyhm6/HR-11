import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SyMenuDto } from '../view-menu-list/view-menu-list.model';
import { CompanyOption, MenuParamActionResult, MenuParamPayload, SyMenuParamDto } from './view-menu-param-list.model';

const API_BASE = '/sys/api/menu_param';

/**
 * Gọi lại nguyên API JSON đã có sẵn ở SyMenuParamController/SyMenuController/HrCompanyController
 * (không đổi backend) - xem giải thích ở ViewMenuParamListComponent.
 */
@Injectable({ providedIn: 'root' })
export class ViewMenuParamListService {
  constructor(private readonly http: HttpClient) {}

  /** Toàn bộ cây menu hệ thống (dùng chung API với ViewMenuListComponent) để dựng cây bên trái. */
  getMenuTree(): Observable<SyMenuDto[]> {
    return this.http.get<SyMenuDto[]>('/sys/api/menu/list', { withCredentials: true });
  }

  getCompanies(): Observable<CompanyOption[]> {
    return this.http.get<CompanyOption[]>('/sys/api/company/list', { withCredentials: true });
  }

  list(parentMenuNo: string, cpnyId: string): Observable<SyMenuParamDto[]> {
    let params = new HttpParams().set('cpnyId', cpnyId);
    if (parentMenuNo) params = params.set('parentMenuNo', parentMenuNo);
    return this.http.get<SyMenuParamDto[]>(`${API_BASE}/list`, { params, withCredentials: true });
  }

  save(payload: MenuParamPayload): Observable<MenuParamActionResult> {
    return this.http.post<MenuParamActionResult>(`${API_BASE}/save`, payload, { withCredentials: true });
  }

  delete(payload: MenuParamPayload): Observable<MenuParamActionResult> {
    return this.http.post<MenuParamActionResult>(`${API_BASE}/delete`, payload, { withCredentials: true });
  }
}
