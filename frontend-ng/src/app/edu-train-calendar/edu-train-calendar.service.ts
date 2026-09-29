import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EduCalendarItem } from './edu-train-calendar.model';

const API_BASE = '/edu/traineducation/api/trainCalendar';

/** API của EduTrainCalendarController. Chi tiết kế hoạch / lịch học dùng lại EduPlanManagerService. */
@Injectable({ providedIn: 'root' })
export class EduTrainCalendarService {
  constructor(private readonly http: HttpClient) {}

  getMonth(year: number, month: number): Observable<EduCalendarItem[]> {
    const params = new HttpParams().set('year', year).set('month', month);
    return this.http.get<EduCalendarItem[]>(`${API_BASE}/month`, { params, withCredentials: true });
  }
}
