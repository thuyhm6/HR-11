import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetailCalculatePayload, DetailCalculateResult } from './view-ar-detail-calculate.model';

const API_BASE = '/ar/attendanceMintenance/api';

/**
 * Gọi lại nguyên API JSON đã có sẵn ở ArDetailCalculateController (không đổi backend) - bản Angular
 * của ar/attendanceMintenance/viewArDetailCalculate.html (Thymeleaf). Popup tìm nhân viên + cây phòng
 * ban dùng lại ChangeUserService (xem ViewArDetailCalculateComponent) - không khai báo lại ở đây.
 */
@Injectable({ providedIn: 'root' })
export class ViewArDetailCalculateService {
  constructor(private readonly http: HttpClient) {}

  runCalculate(payload: DetailCalculatePayload): Observable<DetailCalculateResult> {
    return this.http.post<DetailCalculateResult>(`${API_BASE}/detailCalculate/run`, payload, { withCredentials: true });
  }
}
