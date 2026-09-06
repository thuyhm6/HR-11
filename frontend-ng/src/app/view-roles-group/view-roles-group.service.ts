import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SyMenuDto } from '../view-menu-list/view-menu-list.model';
import { RoleActionResult, RoleRelationsPayload, RoleSavePayload, SyRoleDto } from './view-roles-group.model';

const API_BASE = '/sys/api/role';

/**
 * Gọi lại nguyên API JSON đã có sẵn ở SyRoleController (không đổi backend) - xem giải thích ở
 * ViewRolesGroupComponent. delete() gửi roleNo qua query string dù là POST vì backend nhận bằng
 * @RequestParam (Spring MVC đọc @RequestParam từ query string bất kể method).
 */
@Injectable({ providedIn: 'root' })
export class ViewRolesGroupService {
  constructor(private readonly http: HttpClient) {}

  list(keyword: string): Observable<SyRoleDto[]> {
    let params = new HttpParams();
    if (keyword) params = params.set('keyword', keyword);
    return this.http.get<SyRoleDto[]>(`${API_BASE}/list`, { params, withCredentials: true });
  }

  detail(roleNo: string): Observable<SyRoleDto> {
    const params = new HttpParams().set('roleNo', roleNo);
    return this.http.get<SyRoleDto>(`${API_BASE}/detail`, { params, withCredentials: true });
  }

  save(payload: RoleSavePayload): Observable<RoleActionResult> {
    return this.http.post<RoleActionResult>(`${API_BASE}/save`, payload, { withCredentials: true });
  }

  saveRelations(payload: RoleRelationsPayload): Observable<RoleActionResult> {
    return this.http.post<RoleActionResult>(`${API_BASE}/saveRelations`, payload, { withCredentials: true });
  }

  delete(roleNo: string): Observable<RoleActionResult> {
    const params = new HttpParams().set('roleNo', roleNo);
    return this.http.post<RoleActionResult>(`${API_BASE}/delete`, null, { params, withCredentials: true });
  }

  /** Toàn bộ cây menu hệ thống (dùng chung API với ViewMenuListComponent) để dựng cây phân quyền. */
  getMenuTree(): Observable<SyMenuDto[]> {
    return this.http.get<SyMenuDto[]>('/sys/api/menu/list', { withCredentials: true });
  }
}
