import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EduActionResult } from '../edu-common/edu-common.model';
import { EduPlan, EduPlanTeacher, EduSyllabus } from './edu-plan-manager.model';

const API_BASE = '/edu/traineducation/api/planManager';

/**
 * API của EduPlanManagerController. Khóa học: EduCourseManagerService; mã: EduSystemManagerService.getCodeList;
 * nhân viên / cây phòng ban / file: EduCommonService.
 */
@Injectable({ providedIn: 'root' })
export class EduPlanManagerService {
  constructor(private readonly http: HttpClient) {}

  getList(trainDiffCode: string | null, trainTypeCode: string | null, courseNameCode: string): Observable<EduPlan[]> {
    let params = new HttpParams();
    if (trainDiffCode) params = params.set('trainDiffCode', trainDiffCode);
    if (trainTypeCode) params = params.set('trainTypeCode', trainTypeCode);
    if (courseNameCode) params = params.set('courseNameCode', courseNameCode);
    return this.http.get<EduPlan[]>(`${API_BASE}/list`, { params, withCredentials: true });
  }

  getOne(planNo: string): Observable<EduPlan> {
    return this.http.get<EduPlan>(`${API_BASE}/${encodeURIComponent(planNo)}`, { withCredentials: true });
  }

  save(payload: EduPlan): Observable<EduActionResult> {
    return this.http.post<EduActionResult>(`${API_BASE}/save`, payload, { withCredentials: true });
  }

  delete(planNo: string): Observable<EduActionResult> {
    return this.http.post<EduActionResult>(`${API_BASE}/delete`, { planNo }, { withCredentials: true });
  }

  getTeachers(keyword: string): Observable<EduPlanTeacher[]> {
    let params = new HttpParams();
    if (keyword) params = params.set('keyword', keyword);
    return this.http.get<EduPlanTeacher[]>(`${API_BASE}/teachers`, { params, withCredentials: true });
  }

  getSyllabus(planNo: string): Observable<EduSyllabus[]> {
    return this.http.get<EduSyllabus[]>(`${API_BASE}/${encodeURIComponent(planNo)}/syllabus`, { withCredentials: true });
  }

  importSyllabus(planNo: string, rows: EduSyllabus[]): Observable<EduActionResult> {
    return this.http.post<EduActionResult>(`${API_BASE}/${encodeURIComponent(planNo)}/syllabus/import`, rows, { withCredentials: true });
  }

  deleteSyllabus(planNo: string, syllNo: string): Observable<EduActionResult> {
    return this.http.post<EduActionResult>(`${API_BASE}/${encodeURIComponent(planNo)}/syllabus/delete`, { syllNo }, { withCredentials: true });
  }
}
