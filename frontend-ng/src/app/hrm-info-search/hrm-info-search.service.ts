import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, map, of } from 'rxjs';
import { AuthDeptNode } from '../manage-emp-position-info/manage-emp-position-info.model';
import { ApiResponse, CodeItem, HrInfoSearchCriteria, HrInfoSearchResult, HrmInfoSearchMode } from './hrm-info-search.model';

const API_BASE = '/hrm/empinfo/api/infoSearch';

/**
 * API cho 4 trang tra cứu (HrInfoSearchController) + 2 endpoint dùng chung toàn hệ thống: danh mục
 * SY_CODE (/sys/api/getCode/list) và cây phòng ban được phân quyền (authorized-departments).
 * ViewExperienceListComponent cũng dùng lại getCodeList/getCodeListMulti/getAuthorizedDepartments ở đây.
 */
@Injectable({ providedIn: 'root' })
export class HrmInfoSearchService {
  constructor(private readonly http: HttpClient) {}

  search(mode: HrmInfoSearchMode, criteria: HrInfoSearchCriteria): Observable<ApiResponse<HrInfoSearchResult[]>> {
    return this.http.post<ApiResponse<HrInfoSearchResult[]>>(`${API_BASE}/${mode}`, criteria, { withCredentials: true });
  }

  getCodeList(parentCodeNo: string): Observable<CodeItem[]> {
    return this.http.get<CodeItem[]>('/sys/api/getCode/list', {
      params: new HttpParams().set('parentCodeNo', parentCodeNo),
      withCredentials: true,
    });
  }

  /** Gộp danh mục con của nhiều mã cha (VD: chức cấp của nhiều nhóm chức) - bỏ trùng theo codeNo. */
  getCodeListMulti(parentCodeNos: string[]): Observable<CodeItem[]> {
    if (!parentCodeNos.length) return of([]);
    return forkJoin(parentCodeNos.map((p) => this.getCodeList(p))).pipe(
      map((lists) => {
        const seen = new Map<string, CodeItem>();
        lists.flat().forEach((c) => c && !seen.has(c.codeNo) && seen.set(c.codeNo, c));
        return Array.from(seen.values());
      }),
    );
  }

  getAuthorizedDepartments(): Observable<AuthDeptNode[]> {
    return this.http.get<AuthDeptNode[]>('/ar/attendanceSettings/api/arSupervisor/authorized-departments', {
      withCredentials: true,
    });
  }
}
