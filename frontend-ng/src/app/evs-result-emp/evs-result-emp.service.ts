import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EvsResultEmpDto } from './evs-result-emp.model';

const API_BASE = '/evs/manage/api/evsResultEmp';

/**
 * Gọi lại nguyên API JSON đã có sẵn ở backend mà viewEvsResultEmp.html (Thymeleaf) đang dùng -
 * không đổi backend. Endpoint không nhận tham số vì mapper lọc sẵn theo #{adminID} (nhân viên đang
 * đăng nhập, do interceptor inject).
 */
@Injectable({ providedIn: 'root' })
export class EvsResultEmpService {
  constructor(private readonly http: HttpClient) {}

  getList(): Observable<EvsResultEmpDto[]> {
    return this.http.get<EvsResultEmpDto[]>(`${API_BASE}/list`, { withCredentials: true });
  }
}
