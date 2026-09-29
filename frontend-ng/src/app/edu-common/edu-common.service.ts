import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuthDeptNode } from '../manage-emp-position-info/manage-emp-position-info.model';
import { EduActionResult, EduEmployee, EduFile, EduFileApplyType } from './edu-common.model';

const API_BASE = '/edu/traineducation/api/common';

/**
 * API dùng chung của module Đào tạo (EduCommonController): tìm nhân viên + file đính kèm. Cây phòng ban dùng lại API
 * authorized-departments sẵn có (cùng cách ViewAffirmSpecialListService đang gọi).
 */
@Injectable({ providedIn: 'root' })
export class EduCommonService {
  constructor(private readonly http: HttpClient) {}

  searchEmployees(keyword: string, deptNos: string[] = []): Observable<EduEmployee[]> {
    let params = new HttpParams();
    if (keyword) params = params.set('keyword', keyword);
    deptNos.forEach((d) => (params = params.append('deptNos', d)));
    return this.http.get<EduEmployee[]>(`${API_BASE}/employees`, { params, withCredentials: true });
  }

  getFiles(applyType: EduFileApplyType, applyNo: string): Observable<EduFile[]> {
    return this.http.get<EduFile[]>(`${API_BASE}/files/${applyType}/${encodeURIComponent(applyNo)}`, { withCredentials: true });
  }

  uploadFiles(applyType: EduFileApplyType, applyNo: string, files: File[]): Observable<EduActionResult> {
    if (files.length === 0) return of({ success: true, message: '' });
    const fd = new FormData();
    fd.append('applyType', applyType);
    fd.append('applyNo', applyNo);
    files.forEach((f) => fd.append('files', f, f.name));
    return this.http.post<EduActionResult>(`${API_BASE}/files/upload`, fd, { withCredentials: true });
  }

  deleteFiles(applyType: EduFileApplyType, applyNo: string, fileNos: string[]): Observable<EduActionResult> {
    if (fileNos.length === 0) return of({ success: true, message: '' });
    return this.http.post<EduActionResult>(`${API_BASE}/files/delete`, { applyType, applyNo, fileNos }, { withCredentials: true });
  }

  /** Link tải file - dùng lại API /ess/empinfo/api/files/download/{fileNo}. */
  downloadUrl(fileNo: string): string {
    return `/ess/empinfo/api/files/download/${encodeURIComponent(fileNo)}`;
  }

  getAuthorizedDepartments(): Observable<AuthDeptNode[]> {
    return this.http.get<AuthDeptNode[]>('/ar/attendanceSettings/api/arSupervisor/authorized-departments', {
      withCredentials: true,
    });
  }
}
