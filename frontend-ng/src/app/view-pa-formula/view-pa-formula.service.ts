import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  PaFormulaActionResponse,
  PaFormulaDto,
  PaFormulaListResponse,
  PaFormulaSavePayload,
  PaFormulaToolItem,
  PaFormulaToolItems,
} from './view-pa-formula.model';

const API_BASE = '/pa/salary/formula/api';

/** Không phân trang server-side nữa (bản gốc dùng DataTables serverSide) - gọi 1 lần với length lớn
 *  để lấy trọn danh sách công thức của 1 hạng mục rồi phân trang client-side bằng nz-table, cùng
 *  pattern với ViewSummaryFormulaComponent. Số công thức của 1 hạng mục trong thực tế luôn nhỏ. */
const FETCH_ALL_LENGTH = 100000;

/**
 * Gọi lại nguyên các API JSON đã có sẵn ở PaFormulaController (xem viewPaFormula.html bản Thymeleaf
 * gốc) - không đổi backend.
 */
@Injectable({ providedIn: 'root' })
export class ViewPaFormulaService {
  constructor(private readonly http: HttpClient) {}

  getItemList(): Observable<PaFormulaDto[]> {
    return this.http.get<PaFormulaDto[]>(`${API_BASE}/itemList`, { withCredentials: true });
  }

  getToolItems(): Observable<PaFormulaToolItems> {
    return this.http.get<PaFormulaToolItems>(`${API_BASE}/toolItems`, { withCredentials: true });
  }

  getAllItemNames(): Observable<PaFormulaToolItem[]> {
    return this.http.get<PaFormulaToolItem[]>(`${API_BASE}/allItemNames`, { withCredentials: true });
  }

  search(itemNo: string): Observable<PaFormulaDto[]> {
    const params = new HttpParams()
      .set('itemNo', itemNo)
      .set('start', 0)
      .set('length', FETCH_ALL_LENGTH);
    return this.http
      .get<PaFormulaListResponse>(`${API_BASE}/list`, { params, withCredentials: true })
      .pipe(map((res) => res.data ?? []));
  }

  getById(formularNo: number): Observable<PaFormulaDto> {
    return this.http.get<PaFormulaDto>(`${API_BASE}/${formularNo}`, { withCredentials: true });
  }

  insert(payload: PaFormulaSavePayload): Observable<PaFormulaActionResponse> {
    return this.http.post<PaFormulaActionResponse>(`${API_BASE}/insert`, payload, { withCredentials: true });
  }

  update(payload: PaFormulaSavePayload): Observable<PaFormulaActionResponse> {
    return this.http.put<PaFormulaActionResponse>(`${API_BASE}/update`, payload, { withCredentials: true });
  }

  delete(formularNo: number): Observable<PaFormulaActionResponse> {
    return this.http.delete<PaFormulaActionResponse>(`${API_BASE}/delete/${formularNo}`, { withCredentials: true });
  }

  swapSeq(formularNo: number, itemNo: string, direction: 'up' | 'down'): Observable<PaFormulaActionResponse> {
    return this.http.put<PaFormulaActionResponse>(
      `${API_BASE}/swapSeq`,
      { formularNo: String(formularNo), itemNo, direction },
      { withCredentials: true },
    );
  }
}
