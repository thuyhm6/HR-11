import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArReportItemDto } from './view-ar-reports-list.model';

/** API của ArReportController. */
@Injectable({ providedIn: 'root' })
export class ViewArReportsListService {
  constructor(private readonly http: HttpClient) {}

  getReportList(menuNo: string | null): Observable<ArReportItemDto[]> {
    let params = new HttpParams();
    if (menuNo) params = params.set('menuNo', menuNo);
    return this.http.get<ArReportItemDto[]>('/report/ar/api/reportList', { params, withCredentials: true });
  }
}
