import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EvsFormulaDto, EvsFormulaSavePayload } from './evs-formula-list.model';

const API_BASE = '/evs/manage/api/evsFormula';

/** Gọi lại nguyên các API JSON đã có sẵn ở EvsManageController (cũng chính là API mà trang Thymeleaf cũ
 *  viewEvsFormulaList.html đang dùng) - không đổi backend. */
@Injectable({ providedIn: 'root' })
export class EvsFormulaListService {
  constructor(private readonly http: HttpClient) {}

  getList(codeNo: string, codeName: string, activity: string): Observable<EvsFormulaDto[]> {
    let params = new HttpParams();
    if (codeNo) params = params.set('codeNo', codeNo);
    if (codeName) params = params.set('codeName', codeName);
    if (activity) params = params.set('activity', activity);
    return this.http.get<EvsFormulaDto[]>(`${API_BASE}/list`, { params, withCredentials: true });
  }

  getOne(seq: string): Observable<EvsFormulaDto> {
    return this.http.get<EvsFormulaDto>(`${API_BASE}/${encodeURIComponent(seq)}`, { withCredentials: true });
  }

  save(payload: EvsFormulaSavePayload): Observable<{ success: boolean }> {
    return this.http.post<{ success: boolean }>(`${API_BASE}/save`, payload, { withCredentials: true });
  }

  delete(seq: string): Observable<{ success: boolean }> {
    return this.http.post<{ success: boolean }>(`${API_BASE}/delete`, { seq }, { withCredentials: true });
  }
}
