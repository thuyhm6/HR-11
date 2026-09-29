import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EduActionResult } from '../edu-common/edu-common.model';
import { EduTrainOrgan } from './edu-train-organ.model';

const API_BASE = '/edu/traineducation/api/trainOrgan';

/** API của EduTrainOrganController. File đính kèm: EduCommonService / EduFileAttachComponent. */
@Injectable({ providedIn: 'root' })
export class EduTrainOrganService {
  constructor(private readonly http: HttpClient) {}

  getList(organName: string, address: string): Observable<EduTrainOrgan[]> {
    let params = new HttpParams();
    if (organName) params = params.set('organName', organName);
    if (address) params = params.set('address', address);
    return this.http.get<EduTrainOrgan[]>(`${API_BASE}/list`, { params, withCredentials: true });
  }

  getOne(organNo: string): Observable<EduTrainOrgan> {
    return this.http.get<EduTrainOrgan>(`${API_BASE}/${encodeURIComponent(organNo)}`, { withCredentials: true });
  }

  save(payload: EduTrainOrgan): Observable<EduActionResult> {
    return this.http.post<EduActionResult>(`${API_BASE}/save`, payload, { withCredentials: true });
  }

  delete(organNo: string): Observable<EduActionResult> {
    return this.http.post<EduActionResult>(`${API_BASE}/delete`, { organNo }, { withCredentials: true });
  }
}
