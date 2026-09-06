import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ArSupervisorActionResponse,
  ArSupervisorDto,
  ArSupervisorSavePayload,
  DeptTreeNode,
} from './view-attendance-keeper.model';

const API_BASE = '/ar/attendanceSettings/api/arSupervisor';

/**
 * Gọi lại nguyên các API JSON đã có sẵn ở ArSupervisorController (xem viewAttendanceKeeper.html bản
 * Thymeleaf gốc) - không đổi backend. Tìm kiếm/chọn nhân viên khi thêm mới dùng lại ChangeUserService
 * (searchEmployees/getAuthorizedDepartments/getCodeList) thay cho fragment EmployeeSearchModal jQuery
 * - xem giải thích ở ViewAttendanceKeeperComponent.
 */
@Injectable({ providedIn: 'root' })
export class ViewAttendanceKeeperService {
  constructor(private readonly http: HttpClient) {}

  getSupervisors(): Observable<ArSupervisorDto[]> {
    return this.http.get<ArSupervisorDto[]>(API_BASE, { withCredentials: true });
  }

  /** Toàn bộ cây phòng ban công ty (khác authorized-departments) - dùng để cấu hình phòng ban 1 người
   *  chấm công được phân quyền quản lý. */
  getDepartmentTree(): Observable<DeptTreeNode[]> {
    return this.http.get<DeptTreeNode[]>(`${API_BASE}/departments`, { withCredentials: true });
  }

  getSupervisorDepartments(personId: string): Observable<string[]> {
    return this.http.get<string[]>(`${API_BASE}/${personId}/departments`, { withCredentials: true });
  }

  save(payload: ArSupervisorSavePayload): Observable<ArSupervisorActionResponse> {
    return this.http.post<ArSupervisorActionResponse>(`${API_BASE}/save`, payload, { withCredentials: true });
  }

  delete(personId: string): Observable<ArSupervisorActionResponse> {
    return this.http.delete<ArSupervisorActionResponse>(`${API_BASE}/delete/${personId}`, {
      withCredentials: true,
    });
  }

  saveDepartments(personId: string, deptNoList: string[]): Observable<ArSupervisorActionResponse> {
    return this.http.post<ArSupervisorActionResponse>(`${API_BASE}/${personId}/saveDepartments`, deptNoList, {
      withCredentials: true,
    });
  }
}
