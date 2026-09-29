import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CodeItem } from '../manage-emp-position-info/manage-emp-position-info.model';
import { AffirmKind, HrmAffirmActionResult, HrmAffirmPayload, HrmAffirmRow } from './view-hrm-affirm-list.model';

/** 'pa' -> HrmAffirmController, 'ar' -> ArAffirmController (cùng hợp đồng list/add/update/delete). */
const API_BASE: Record<AffirmKind, string> = {
  pa: '/sys/api/hrmAffirm',
  ar: '/sys/api/arAffirm',
};

/** Loại đơn của 'pa': mã con của 16413 trừ các mã bị loại (giống getApplyListNew bản gốc). */
const PA_APPLY_TYPE_PARENT_CODE = '16413';
const PA_EXCLUDED_APPLY_TYPES = new Set(['21', '31', '218107']);

/**
 * API của HrmAffirmController / ArAffirmController. Loại đơn 'pa' dùng lại endpoint danh mục mã sẵn có
 * /sys/api/getCode/list; loại đơn 'ar' là mã cấp cháu của 16413 nên lấy từ /sys/api/arAffirm/applyTypes.
 * Danh sách vai trò/cấp duyệt dùng lại ViewArAffirmPostListService.
 */
@Injectable({ providedIn: 'root' })
export class ViewHrmAffirmListService {
  constructor(private readonly http: HttpClient) {}

  getList(kind: AffirmKind, applyType: string | null): Observable<HrmAffirmRow[]> {
    let params = new HttpParams();
    if (applyType) params = params.set('applyType', applyType);
    return this.http.get<HrmAffirmRow[]>(`${API_BASE[kind]}/list`, { params, withCredentials: true });
  }

  add(kind: AffirmKind, payload: HrmAffirmPayload): Observable<HrmAffirmActionResult> {
    return this.http.post<HrmAffirmActionResult>(`${API_BASE[kind]}/add`, payload, { withCredentials: true });
  }

  update(kind: AffirmKind, payload: HrmAffirmPayload): Observable<HrmAffirmActionResult> {
    return this.http.post<HrmAffirmActionResult>(`${API_BASE[kind]}/update`, payload, { withCredentials: true });
  }

  delete(kind: AffirmKind, applyParamNo: number): Observable<HrmAffirmActionResult> {
    const params = new HttpParams().set('applyParamNo', applyParamNo);
    return this.http.post<HrmAffirmActionResult>(`${API_BASE[kind]}/delete`, null, { params, withCredentials: true });
  }

  getApplyTypes(kind: AffirmKind): Observable<CodeItem[]> {
    if (kind === 'ar') {
      return this.http
        .get<{ codeNo: string; content: string }[]>(`${API_BASE.ar}/applyTypes`, { withCredentials: true })
        .pipe(map((list) => (list ?? []).map((t) => ({ codeNo: t.codeNo, codeName: t.content, description: '', codeId: '' }))));
    }
    return this.http
      .get<CodeItem[]>('/sys/api/getCode/list', {
        params: new HttpParams().set('parentCodeNo', PA_APPLY_TYPE_PARENT_CODE),
        withCredentials: true,
      })
      .pipe(map((list) => (list ?? []).filter((c) => !PA_EXCLUDED_APPLY_TYPES.has(String(c.codeNo)))));
  }
}
