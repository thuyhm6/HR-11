import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrgResumeInfoDto } from '../view-resume-list/view-resume-list.model';
import { ProcessExecutePayload } from './view-resume-process.model';

const API_BASE = '/org/api';

/** Gọi lại nguyên các API JSON đã có sẵn ở OrgResumeInfoController (không đổi backend) - cùng
 *  controller với ViewResumeListService (xem view-resume-list), nên dùng lại OrgResumeInfoDto cho
 *  danh sách phiên bản thay đổi tổ chức thay vì khai báo lại. */
@Injectable({ providedIn: 'root' })
export class ViewResumeProcessService {
  constructor(private readonly http: HttpClient) {}

  getResumeDropdown(): Observable<OrgResumeInfoDto[]> {
    return this.http.get<OrgResumeInfoDto[]>(`${API_BASE}/resume/dropdown`, { withCredentials: true });
  }

  executeProcess(payload: ProcessExecutePayload): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${API_BASE}/process/execute`, payload, { withCredentials: true });
  }
}
