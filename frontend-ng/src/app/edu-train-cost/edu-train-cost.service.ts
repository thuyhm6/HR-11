import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EduActionResult } from '../edu-common/edu-common.model';
import { EduTrainBasicSearch } from '../edu-common/edu-train.model';
import { EduTrainCost } from './edu-train-cost.model';

const API_BASE = '/edu/traineducation/api/trainCost';

/** API của EduTrainCostController. File đính kèm: EduCommonService / EduFileAttachComponent (eduCostManager). */
@Injectable({ providedIn: 'root' })
export class EduTrainCostService {
  constructor(private readonly http: HttpClient) {}

  getList(search: EduTrainBasicSearch): Observable<EduTrainCost[]> {
    let params = new HttpParams();
    if (search.courseName) params = params.set('courseName', search.courseName);
    if (search.startDate) params = params.set('startDate', search.startDate);
    if (search.endDate) params = params.set('endDate', search.endDate);
    return this.http.get<EduTrainCost[]>(`${API_BASE}/list`, { params, withCredentials: true });
  }

  getOne(costNo: string): Observable<EduTrainCost> {
    return this.http.get<EduTrainCost>(`${API_BASE}/${encodeURIComponent(costNo)}`, { withCredentials: true });
  }

  save(payload: EduTrainCost): Observable<EduActionResult> {
    return this.http.post<EduActionResult>(`${API_BASE}/save`, payload, { withCredentials: true });
  }
}
