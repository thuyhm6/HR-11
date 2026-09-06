import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { timeout } from 'rxjs/operators';
import {
  AddObjectPayload,
  AffirmorSavePayload,
  ApiResult,
  AuthDeptNode,
  EmployeeSearchResult,
  EvsAffirmorSetupDto,
  EvsResumeOption,
} from './evs-affirmor-setup.model';

const API_BASE = '/evs/manage/api';

/** Gọi lại nguyên các API JSON đã có sẵn ở EvsManageController (cũng chính là API mà trang Thymeleaf cũ
 *  viewEvsAffirmorSetup.html đang dùng) - không đổi backend. */
@Injectable({ providedIn: 'root' })
export class EvsAffirmorSetupService {
  constructor(private readonly http: HttpClient) {}

  getResumeList(evsType: string): Observable<EvsResumeOption[]> {
    return this.http.get<EvsResumeOption[]>(`${API_BASE}/resume/evsResumeList`, {
      params: new HttpParams().set('evsType', evsType),
      withCredentials: true,
    });
  }

  getList(resumeSeq: string, deptNos: string, affirmorKeyword: string, evsType: string): Observable<EvsAffirmorSetupDto[]> {
    let params = new HttpParams().set('resumeSeq', resumeSeq).set('evsType', evsType);
    if (deptNos) params = params.set('deptNos', deptNos);
    if (affirmorKeyword) params = params.set('affirmorKeyword', affirmorKeyword);
    return this.http.get<EvsAffirmorSetupDto[]>(`${API_BASE}/affirmorSetup/list`, { params, withCredentials: true });
  }

  searchEmployee(keyword: string, resumeSeq: string): Observable<EmployeeSearchResult[]> {
    return this.http.get<EmployeeSearchResult[]>(`${API_BASE}/affirmorSetup/searchEmployee`, {
      params: new HttpParams().set('keyword', keyword).set('resumeSeq', resumeSeq),
      withCredentials: true,
    });
  }

  save(list: AffirmorSavePayload[]): Observable<ApiResult> {
    return this.http.post<ApiResult>(`${API_BASE}/affirmorSetup/save`, list, { withCredentials: true });
  }

  addObject(payload: AddObjectPayload): Observable<ApiResult> {
    return this.http.post<ApiResult>(`${API_BASE}/affirmorSetup/addObject`, payload, { withCredentials: true });
  }

  /** PR_CREATE_EVS_TARGET có thể chạy lâu (bản gốc đặt timeout ajax 300s) - timeout tương ứng phía
   *  client để phân biệt lỗi "quá thời gian chờ" với lỗi khác (xem createTarget() ở component). */
  createTarget(resumeSeq: string): Observable<ApiResult> {
    return this.http
      .post<ApiResult>(`${API_BASE}/affirmorSetup/createTarget`, { resumeSeq }, { withCredentials: true })
      .pipe(timeout(300000));
  }

  evsStart(resumeSeq: string): Observable<ApiResult> {
    return this.http.post<ApiResult>(`${API_BASE}/affirmorSetup/evsStart`, { resumeSeq }, { withCredentials: true });
  }

  delete(seqList: string[]): Observable<ApiResult> {
    return this.http.post<ApiResult>(`${API_BASE}/affirmorSetup/delete`, seqList, { withCredentials: true });
  }

  /** Cây phòng ban dùng chung endpoint mặc định của widget DeptTree.js ở bản gốc (không override
   *  option `api`, xem assets/js/components/deptTree.js) - tham khảo ManageEvsResultEmpComponent. */
  getAuthorizedDepartments(): Observable<AuthDeptNode[]> {
    return this.http.get<AuthDeptNode[]>('/ar/attendanceSettings/api/arSupervisor/authorized-departments', {
      withCredentials: true,
    });
  }
}
