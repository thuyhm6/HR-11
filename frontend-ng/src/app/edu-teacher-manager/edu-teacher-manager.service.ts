import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EduActionResult } from '../edu-common/edu-common.model';
import { EduTeacher, EduTeacherSearch } from './edu-teacher-manager.model';

const API_BASE = '/edu/traineducation/api/teacherManager';

/** API của EduTeacherManagerController. Dropdown mã dùng lại EduSystemManagerService.getCodeList. */
@Injectable({ providedIn: 'root' })
export class EduTeacherManagerService {
  constructor(private readonly http: HttpClient) {}

  getList(search: EduTeacherSearch): Observable<EduTeacher[]> {
    let params = new HttpParams();
    if (search.keyword) params = params.set('keyword', search.keyword);
    if (search.teachFieldCode) params = params.set('teachFieldCode', search.teachFieldCode);
    if (search.teachLevelCode) params = params.set('teachLevelCode', search.teachLevelCode);
    if (search.teachStatusCode) params = params.set('teachStatusCode', search.teachStatusCode);
    return this.http.get<EduTeacher[]>(`${API_BASE}/list`, { params, withCredentials: true });
  }

  getOne(teacherNo: string): Observable<EduTeacher> {
    return this.http.get<EduTeacher>(`${API_BASE}/${encodeURIComponent(teacherNo)}`, { withCredentials: true });
  }

  save(payload: EduTeacher): Observable<EduActionResult> {
    return this.http.post<EduActionResult>(`${API_BASE}/save`, payload, { withCredentials: true });
  }

  delete(teacherNo: string): Observable<EduActionResult> {
    return this.http.post<EduActionResult>(`${API_BASE}/delete`, { teacherNo }, { withCredentials: true });
  }
}
