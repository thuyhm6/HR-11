import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CodeItem } from '../manage-emp-position-info/manage-emp-position-info.model';
import { ArAffirmPostActionResult, ArAffirmPostPayload, ArAffirmPostRow } from './view-ar-affirm-post-list.model';

const API_BASE = '/sys/api/arAffirmPost';

/** Mã cha danh mục vai trò (bản gốc: <ait:SelectSyCodeByCpnyID parentNo="14014036">). */
const DUTY_PARENT_CODE = '14014036';

/**
 * API của ArAffirmPostController. getDutyOptions dùng lại endpoint danh mục mã sẵn có của toàn hệ thống
 * (/sys/api/getCode/list - cùng cách ManageEmpPositionInfoService đang gọi).
 */
@Injectable({ providedIn: 'root' })
export class ViewArAffirmPostListService {
  constructor(private readonly http: HttpClient) {}

  getList(): Observable<ArAffirmPostRow[]> {
    return this.http.get<ArAffirmPostRow[]>(`${API_BASE}/list`, { withCredentials: true });
  }

  add(payload: ArAffirmPostPayload): Observable<ArAffirmPostActionResult> {
    return this.http.post<ArAffirmPostActionResult>(`${API_BASE}/add`, payload, { withCredentials: true });
  }

  update(payload: ArAffirmPostPayload): Observable<ArAffirmPostActionResult> {
    return this.http.post<ArAffirmPostActionResult>(`${API_BASE}/update`, payload, { withCredentials: true });
  }

  delete(duty: string): Observable<ArAffirmPostActionResult> {
    const params = new HttpParams().set('duty', duty);
    return this.http.post<ArAffirmPostActionResult>(`${API_BASE}/delete`, null, { params, withCredentials: true });
  }

  getDutyOptions(): Observable<CodeItem[]> {
    return this.http.get<CodeItem[]>('/sys/api/getCode/list', {
      params: new HttpParams().set('parentCodeNo', DUTY_PARENT_CODE),
      withCredentials: true,
    });
  }
}
