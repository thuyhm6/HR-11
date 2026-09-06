import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ArStaFormulaActionResponse,
  ArStaFormulaAttItem,
  ArStaFormulaBasicInfo,
  ArStaFormulaDto,
  ArStaFormulaSavePayload,
  ArStaFormulaStaItem,
  ArStaFormulaTreeItem,
} from './view-summary-formula.model';

const API_BASE = '/ar/attendanceSettings/api/arStaFormula';

/**
 * Gọi lại nguyên các API JSON đã có sẵn ở ArStaFormulaController (xem viewSummaryFormula.html bản
 * Thymeleaf gốc) - không đổi backend.
 */
@Injectable({ providedIn: 'root' })
export class ViewSummaryFormulaService {
  constructor(private readonly http: HttpClient) {}

  getTreeItems(): Observable<ArStaFormulaTreeItem[]> {
    return this.http.get<ArStaFormulaTreeItem[]>(`${API_BASE}/treeItems`, { withCredentials: true });
  }

  search(itemNo: string): Observable<ArStaFormulaDto[]> {
    return this.http.get<ArStaFormulaDto[]>(API_BASE, {
      params: new HttpParams().set('itemNo', itemNo),
      withCredentials: true,
    });
  }

  getById(formularNo: number): Observable<ArStaFormulaDto> {
    return this.http.get<ArStaFormulaDto>(`${API_BASE}/${formularNo}`, { withCredentials: true });
  }

  getAttItems(): Observable<ArStaFormulaAttItem[]> {
    return this.http.get<ArStaFormulaAttItem[]>(`${API_BASE}/tools/attItems`, { withCredentials: true });
  }

  getStaItems(): Observable<ArStaFormulaStaItem[]> {
    return this.http.get<ArStaFormulaStaItem[]>(`${API_BASE}/tools/staItems`, { withCredentials: true });
  }

  getBasicInfos(): Observable<ArStaFormulaBasicInfo[]> {
    return this.http.get<ArStaFormulaBasicInfo[]>(`${API_BASE}/tools/basicInfos`, { withCredentials: true });
  }

  save(payload: ArStaFormulaSavePayload): Observable<ArStaFormulaActionResponse> {
    return this.http.post<ArStaFormulaActionResponse>(`${API_BASE}/save`, payload, { withCredentials: true });
  }

  delete(formularNo: number): Observable<ArStaFormulaActionResponse> {
    return this.http.delete<ArStaFormulaActionResponse>(`${API_BASE}/delete/${formularNo}`, {
      withCredentials: true,
    });
  }
}
