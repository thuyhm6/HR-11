import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EduActionResult } from '../edu-common/edu-common.model';
import { EduTrainAgreement, EduTrainAgreementSearch } from './edu-train-agreement.model';

const API_BASE = '/edu/traineducation/api/trainAgreement';

/** API của EduTrainAgreementController. File đính kèm / tìm nhân viên / cây phòng ban: EduCommonService. */
@Injectable({ providedIn: 'root' })
export class EduTrainAgreementService {
  constructor(private readonly http: HttpClient) {}

  getList(search: EduTrainAgreementSearch): Observable<EduTrainAgreement[]> {
    let params = new HttpParams();
    if (search.deptNo) params = params.set('deptNo', search.deptNo);
    if (search.keyword) params = params.set('keyword', search.keyword);
    if (search.conStartDate) params = params.set('conStartDate', search.conStartDate);
    if (search.conEndDate) params = params.set('conEndDate', search.conEndDate);
    return this.http.get<EduTrainAgreement[]>(`${API_BASE}/list`, { params, withCredentials: true });
  }

  getOne(agreeNo: string): Observable<EduTrainAgreement> {
    return this.http.get<EduTrainAgreement>(`${API_BASE}/${encodeURIComponent(agreeNo)}`, { withCredentials: true });
  }

  save(payload: EduTrainAgreement): Observable<EduActionResult> {
    return this.http.post<EduActionResult>(`${API_BASE}/save`, payload, { withCredentials: true });
  }

  delete(agreeNo: string): Observable<EduActionResult> {
    return this.http.post<EduActionResult>(`${API_BASE}/delete`, { agreeNo }, { withCredentials: true });
  }

  importRows(rows: Partial<EduTrainAgreement>[]): Observable<EduActionResult> {
    return this.http.post<EduActionResult>(`${API_BASE}/import`, rows, { withCredentials: true });
  }
}
