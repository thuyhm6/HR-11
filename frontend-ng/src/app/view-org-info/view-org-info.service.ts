import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrgNodeDto } from './view-org-info.model';

/** Gọi lại nguyên API JSON đã có sẵn ở CurrentOrgController#getVisualTree (xem viewOrgInfo.html bản
 *  Thymeleaf gốc) - không đổi backend. */
@Injectable({ providedIn: 'root' })
export class ViewOrgInfoService {
  constructor(private readonly http: HttpClient) {}

  getVisualTree(): Observable<OrgNodeDto[]> {
    return this.http.get<OrgNodeDto[]>('/org/api/visual/tree', { withCredentials: true });
  }
}
