import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SyRoleGroupDto } from '../view-roles-group-list/view-roles-group-list.model';
import { SyUserDto, UserActionResult, UserRelationsPayload } from './view-login-user.model';

const API_BASE = '/sys/api/user';

/**
 * Gọi lại nguyên API JSON đã có sẵn ở SyUserController (không đổi backend) - xem giải thích ở
 * ViewLoginUserComponent. Toàn bộ API này backend đã tự kiểm tra quyền ADMIN/SYS/HRM qua session
 * (isAdmin trong SyUserController), không cần Angular tự kiểm tra thêm.
 */
@Injectable({ providedIn: 'root' })
export class ViewLoginUserService {
  constructor(private readonly http: HttpClient) {}

  list(keyword: string): Observable<SyUserDto[]> {
    let params = new HttpParams();
    if (keyword) params = params.set('keyword', keyword);
    return this.http.get<SyUserDto[]>(`${API_BASE}/list`, { params, withCredentials: true });
  }

  detail(userNo: string): Observable<SyUserDto> {
    const params = new HttpParams().set('userNo', userNo);
    return this.http.get<SyUserDto>(`${API_BASE}/detail`, { params, withCredentials: true });
  }

  saveRelations(payload: UserRelationsPayload): Observable<UserActionResult> {
    return this.http.post<UserActionResult>(`${API_BASE}/saveRelations`, payload, { withCredentials: true });
  }

  resetPassword(userNo: string, newPassword: string): Observable<UserActionResult> {
    const params = new HttpParams().set('userNo', userNo).set('newPassword', newPassword);
    return this.http.post<UserActionResult>(`${API_BASE}/resetPassword`, null, { params, withCredentials: true });
  }

  /** Toàn bộ danh sách Nhóm quyền (dùng chung API với ViewRolesGroupListComponent) để render panel tick chọn. */
  getAllRoleGroups(): Observable<SyRoleGroupDto[]> {
    return this.http.get<SyRoleGroupDto[]>('/sys/api/role_group/list', { withCredentials: true });
  }
}
