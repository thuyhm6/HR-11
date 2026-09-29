import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EduTrainReportRow, EduTrainReportSearch, EduTrainReportType } from './edu-train-report.model';

const API_BASE = '/edu/traineducation/api/trainReport';

/** API của EduTrainReportController. */
@Injectable({ providedIn: 'root' })
export class EduTrainReportService {
  constructor(private readonly http: HttpClient) {}

  getReportTypes(): Observable<EduTrainReportType[]> {
    return this.http.get<EduTrainReportType[]>(`${API_BASE}/types`, { withCredentials: true });
  }

  getReport(search: EduTrainReportSearch): Observable<EduTrainReportRow[]> {
    let params = new HttpParams();
    Object.entries(search).forEach(([k, v]) => {
      if (v !== null && v !== undefined && String(v).trim() !== '') params = params.set(k, String(v).trim());
    });
    return this.http.get<EduTrainReportRow[]>(`${API_BASE}/data`, { params, withCredentials: true });
  }
}
