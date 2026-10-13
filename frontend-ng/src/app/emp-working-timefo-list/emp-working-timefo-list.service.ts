import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AuthDeptNode,
  DataTablesResponse,
  EmpWorkingTimefoDayDto,
  EmpWorkingTimefoDto,
  EmpWorkingTimefoSearchParams,
} from './emp-working-timefo-list.model';

const API_BASE = '/ar/countAttendance/api/empWorkingTimefoList';

@Injectable({ providedIn: 'root' })
export class EmpWorkingTimefoListService {
  constructor(private readonly http: HttpClient) {}

  getPageList(params: EmpWorkingTimefoSearchParams): Observable<DataTablesResponse<EmpWorkingTimefoDto>> {
    let httpParams = new HttpParams();
    for (const [key, value] of Object.entries(params)) {
      httpParams = httpParams.set(key, String(value));
    }
    return this.http.get<DataTablesResponse<EmpWorkingTimefoDto>>(`${API_BASE}/list`, {
      params: httpParams,
      withCredentials: true,
    });
  }

  getStreakDays(personId: string, streakFrom: string, streakTo: string): Observable<EmpWorkingTimefoDayDto[]> {
    const params = new HttpParams().set('personId', personId).set('streakFrom', streakFrom).set('streakTo', streakTo);
    return this.http.get<EmpWorkingTimefoDayDto[]>(`${API_BASE}/days`, { params, withCredentials: true });
  }

  /** Dùng lại API cây phòng ban được phân quyền (giống ViewArCardRecordService). */
  getAuthorizedDepartments(): Observable<AuthDeptNode[]> {
    return this.http.get<AuthDeptNode[]>('/ar/attendanceSettings/api/arSupervisor/authorized-departments', {
      withCredentials: true,
    });
  }
}
