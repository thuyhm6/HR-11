import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EduPlan } from '../edu-plan-manager/edu-plan-manager.model';
import { EduActionResult } from './edu-common.model';
import {
  EduEvaluateImportRow,
  EduEvaluateListResponse,
  EduScoreDistribution,
  EduStudentScore,
  EduTeacherCheck,
  EduTrainBasic,
  EduTrainBasicSearch,
  EduTrainResult,
} from './edu-train.model';

const BASIC_API = '/edu/traineducation/api/trainBasic';
const EVALUATE_API = '/edu/traineducation/api/evaluate';

export type EduEvaluateType = 'student' | 'teacher' | 'result';

/**
 * API của EduTrainBasicController + EduTrainEvaluateController - dùng chung cho các trang Thông tin cơ bản, Đánh giá học
 * viên, Đánh giá giảng viên, Kết quả đào tạo.
 */
@Injectable({ providedIn: 'root' })
export class EduTrainService {
  constructor(private readonly http: HttpClient) {}

  // ==================== Thông tin cơ bản ====================

  getBasicList(search: EduTrainBasicSearch): Observable<EduTrainBasic[]> {
    return this.http.get<EduTrainBasic[]>(`${BASIC_API}/list`, { params: searchParams(search), withCredentials: true });
  }

  getBasic(basicNo: string): Observable<EduTrainBasic> {
    return this.http.get<EduTrainBasic>(`${BASIC_API}/${encodeURIComponent(basicNo)}`, { withCredentials: true });
  }

  getAvailablePlans(): Observable<EduPlan[]> {
    return this.http.get<EduPlan[]>(`${BASIC_API}/plans`, { withCredentials: true });
  }

  getPlanDefaults(planNo: string): Observable<EduTrainBasic> {
    return this.http.get<EduTrainBasic>(`${BASIC_API}/plans/${encodeURIComponent(planNo)}/defaults`, { withCredentials: true });
  }

  saveBasic(payload: EduTrainBasic): Observable<EduActionResult> {
    return this.http.post<EduActionResult>(`${BASIC_API}/save`, payload, { withCredentials: true });
  }

  deleteBasic(basicNo: string): Observable<EduActionResult> {
    return this.http.post<EduActionResult>(`${BASIC_API}/delete`, { basicNo }, { withCredentials: true });
  }

  // ==================== Đánh giá ====================

  getEvaluateList(type: EduEvaluateType, search: EduTrainBasicSearch): Observable<EduEvaluateListResponse> {
    return this.http.get<EduEvaluateListResponse>(`${EVALUATE_API}/${type}/list`, { params: searchParams(search), withCredentials: true });
  }

  getStudents(basicNo: string): Observable<EduStudentScore[]> {
    return this.http.get<EduStudentScore[]>(`${EVALUATE_API}/student/${encodeURIComponent(basicNo)}`, { withCredentials: true });
  }

  saveStudentScores(basicNo: string, rows: { freeNo: string; evaResult: string }[]): Observable<EduActionResult> {
    return this.http.post<EduActionResult>(`${EVALUATE_API}/student/${encodeURIComponent(basicNo)}/save`, rows, { withCredentials: true });
  }

  importStudentScores(basicNo: string, rows: EduEvaluateImportRow[]): Observable<EduActionResult> {
    return this.http.post<EduActionResult>(`${EVALUATE_API}/student/${encodeURIComponent(basicNo)}/import`, rows, { withCredentials: true });
  }

  getTeacherSummary(basicNo: string): Observable<EduScoreDistribution[]> {
    return this.http.get<EduScoreDistribution[]>(`${EVALUATE_API}/teacher/${encodeURIComponent(basicNo)}`, { withCredentials: true });
  }

  getTeacherScores(basicNo: string, teaEmpId: string): Observable<EduTeacherCheck[]> {
    return this.http.get<EduTeacherCheck[]>(
      `${EVALUATE_API}/teacher/${encodeURIComponent(basicNo)}/${encodeURIComponent(teaEmpId)}`, { withCredentials: true });
  }

  importTeacherScores(basicNo: string, teaEmpId: string, rows: EduEvaluateImportRow[]): Observable<EduActionResult> {
    return this.http.post<EduActionResult>(
      `${EVALUATE_API}/teacher/${encodeURIComponent(basicNo)}/${encodeURIComponent(teaEmpId)}/import`, rows, { withCredentials: true });
  }

  getResultSummary(basicNo: string): Observable<EduScoreDistribution[]> {
    return this.http.get<EduScoreDistribution[]>(`${EVALUATE_API}/result/${encodeURIComponent(basicNo)}`, { withCredentials: true });
  }

  getResultDetails(basicNo: string): Observable<EduTrainResult[]> {
    return this.http.get<EduTrainResult[]>(`${EVALUATE_API}/result/${encodeURIComponent(basicNo)}/details`, { withCredentials: true });
  }

  importResults(basicNo: string, rows: EduEvaluateImportRow[]): Observable<EduActionResult> {
    return this.http.post<EduActionResult>(`${EVALUATE_API}/result/${encodeURIComponent(basicNo)}/import`, rows, { withCredentials: true });
  }
}

function searchParams(search: EduTrainBasicSearch): HttpParams {
  let params = new HttpParams();
  if (search.courseName) params = params.set('courseName', search.courseName);
  if (search.startDate) params = params.set('startDate', search.startDate);
  if (search.endDate) params = params.set('endDate', search.endDate);
  return params;
}
