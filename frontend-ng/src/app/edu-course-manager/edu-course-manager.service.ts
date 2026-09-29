import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  EduCourseManagerActionResult,
  EduCourseManagerRow,
  EduCourseManagerSavePayload,
} from './edu-course-manager.model';

const API_BASE = '/edu/traineducation/api/courseManager';

/** API của EduCourseManagerController. Dropdown mã / hệ thống đào tạo dùng lại EduSystemManagerService. */
@Injectable({ providedIn: 'root' })
export class EduCourseManagerService {
  constructor(private readonly http: HttpClient) {}

  getList(trainDiffCode: string | null, trainTypeCode: string | null, courseNameCode: string): Observable<EduCourseManagerRow[]> {
    let params = new HttpParams();
    if (trainDiffCode) params = params.set('trainDiffCode', trainDiffCode);
    if (trainTypeCode) params = params.set('trainTypeCode', trainTypeCode);
    if (courseNameCode) params = params.set('courseNameCode', courseNameCode);
    return this.http.get<EduCourseManagerRow[]>(`${API_BASE}/list`, { params, withCredentials: true });
  }

  getOne(courseNo: string): Observable<EduCourseManagerRow> {
    return this.http.get<EduCourseManagerRow>(`${API_BASE}/${encodeURIComponent(courseNo)}`, { withCredentials: true });
  }

  save(payload: EduCourseManagerSavePayload): Observable<EduCourseManagerActionResult> {
    return this.http.post<EduCourseManagerActionResult>(`${API_BASE}/save`, payload, { withCredentials: true });
  }
}
