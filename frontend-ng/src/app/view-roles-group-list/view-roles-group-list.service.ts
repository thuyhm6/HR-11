import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SyRoleDto } from '../view-roles-group/view-roles-group.model';
import {
  RoleGroupActionResult,
  RoleGroupRelationsPayload,
  RoleGroupSavePayload,
  SyRoleGroupDto,
} from './view-roles-group-list.model';

const API_BASE = '/sys/api/role_group';

/**
 * Gọi lại nguyên API JSON đã có sẵn ở SyRoleGroupController (không đổi backend) - xem giải thích ở
 * ViewRolesGroupListComponent. delete() gửi roleGroupId qua query string dù là POST vì backend nhận
 * bằng @RequestParam.
 */
@Injectable({ providedIn: 'root' })
export class ViewRolesGroupListService {
  constructor(private readonly http: HttpClient) {}

  list(keyword: string): Observable<SyRoleGroupDto[]> {
    let params = new HttpParams();
    if (keyword) params = params.set('keyword', keyword);
    return this.http.get<SyRoleGroupDto[]>(`${API_BASE}/list`, { params, withCredentials: true });
  }

  detail(roleGroupNo: string): Observable<SyRoleGroupDto> {
    const params = new HttpParams().set('roleGroupNo', roleGroupNo);
    return this.http.get<SyRoleGroupDto>(`${API_BASE}/detail`, { params, withCredentials: true });
  }

  save(payload: RoleGroupSavePayload): Observable<RoleGroupActionResult> {
    return this.http.post<RoleGroupActionResult>(`${API_BASE}/save`, payload, { withCredentials: true });
  }

  saveRelations(payload: RoleGroupRelationsPayload): Observable<RoleGroupActionResult> {
    return this.http.post<RoleGroupActionResult>(`${API_BASE}/saveRelations`, payload, { withCredentials: true });
  }

  delete(roleGroupId: string): Observable<RoleGroupActionResult> {
    const params = new HttpParams().set('roleGroupId', roleGroupId);
    return this.http.post<RoleGroupActionResult>(`${API_BASE}/delete`, null, { params, withCredentials: true });
  }

  /** Toàn bộ danh sách Role (dùng chung API với ViewRolesGroupComponent) để render panel tick chọn. */
  getAllRoles(): Observable<SyRoleDto[]> {
    return this.http.get<SyRoleDto[]>('/sys/api/role/list', { withCredentials: true });
  }
}
