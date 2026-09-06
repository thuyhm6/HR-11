import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  DataTablesRequestPayload,
  DataTablesResponse,
  OrgResumeInfoDto,
  OrgResumeSavePayload,
} from './view-resume-list.model';

const API_BASE = '/org';

/** Gọi lại nguyên các API JSON đã có sẵn ở OrgResumeInfoController (không đổi backend). /api/resumes
 *  vẫn dùng đúng cơ chế DataTables server-side processing cũ (POST + DataTablesRequest/Response). */
@Injectable({ providedIn: 'root' })
export class ViewResumeListService {
  constructor(private readonly http: HttpClient) {}

  getPageList(payload: DataTablesRequestPayload): Observable<DataTablesResponse<OrgResumeInfoDto>> {
    return this.http.post<DataTablesResponse<OrgResumeInfoDto>>(`${API_BASE}/api/resumes`, payload, {
      withCredentials: true,
    });
  }

  getByNo(no: string): Observable<OrgResumeInfoDto> {
    return this.http.get<OrgResumeInfoDto>(`${API_BASE}/api/resume/${encodeURIComponent(no)}`, {
      withCredentials: true,
    });
  }

  add(payload: OrgResumeSavePayload): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${API_BASE}/api/resume/add`, payload, { withCredentials: true });
  }

  update(payload: OrgResumeSavePayload): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${API_BASE}/api/resume/update`, payload, { withCredentials: true });
  }

  delete(no: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${API_BASE}/api/resume/delete/${encodeURIComponent(no)}`, {
      withCredentials: true,
    });
  }
}
