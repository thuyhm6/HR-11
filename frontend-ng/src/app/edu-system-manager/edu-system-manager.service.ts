import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  EduCodeItem,
  EduSystemManagerActionResult,
  EduSystemManagerRow,
  EduSystemManagerSavePayload,
} from './edu-system-manager.model';

const API_BASE = '/edu/traineducation/api/systemManager';

/** API của EduSystemManagerController. getCodeList dùng lại endpoint mã dùng chung của hệ thống (lọc theo công ty). */
@Injectable({ providedIn: 'root' })
export class EduSystemManagerService {
  constructor(private readonly http: HttpClient) {}

  getList(trainDiffCode: string | null, trainTypeCode: string | null): Observable<EduSystemManagerRow[]> {
    let params = new HttpParams();
    if (trainDiffCode) params = params.set('trainDiffCode', trainDiffCode);
    if (trainTypeCode) params = params.set('trainTypeCode', trainTypeCode);
    return this.http.get<EduSystemManagerRow[]>(`${API_BASE}/list`, { params, withCredentials: true });
  }

  getOne(sysmanaNo: string): Observable<EduSystemManagerRow> {
    return this.http.get<EduSystemManagerRow>(`${API_BASE}/${encodeURIComponent(sysmanaNo)}`, { withCredentials: true });
  }

  save(payload: EduSystemManagerSavePayload): Observable<EduSystemManagerActionResult> {
    return this.http.post<EduSystemManagerActionResult>(`${API_BASE}/save`, payload, { withCredentials: true });
  }

  delete(sysmanaNo: string): Observable<EduSystemManagerActionResult> {
    return this.http.post<EduSystemManagerActionResult>(`${API_BASE}/delete`, { sysmanaNo }, { withCredentials: true });
  }

  getCodeList(parentCodeNo: string): Observable<EduCodeItem[]> {
    return this.http.get<EduCodeItem[]>('/sys/api/getCode/list', {
      params: new HttpParams().set('parentCodeNo', parentCodeNo),
      withCredentials: true,
    });
  }
}
