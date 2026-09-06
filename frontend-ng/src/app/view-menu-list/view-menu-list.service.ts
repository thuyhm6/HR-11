import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuActionResult, MenuSavePayload, SyMenuDto } from './view-menu-list.model';

const API_BASE = '/sys/api/menu';

/**
 * Gọi lại nguyên API JSON đã có sẵn ở SyMenuController (không đổi backend) - xem giải thích ở
 * ViewMenuListComponent. delete() gửi menuNo qua query string dù là POST vì backend nhận bằng
 * @RequestParam (Spring MVC đọc @RequestParam từ query string bất kể method) - tránh phải đổi
 * backend sang @RequestBody.
 */
@Injectable({ providedIn: 'root' })
export class ViewMenuListService {
  constructor(private readonly http: HttpClient) {}

  list(keyword: string): Observable<SyMenuDto[]> {
    let params = new HttpParams();
    if (keyword) params = params.set('keyword', keyword);
    return this.http.get<SyMenuDto[]>(`${API_BASE}/list`, { params, withCredentials: true });
  }

  save(payload: MenuSavePayload): Observable<MenuActionResult> {
    return this.http.post<MenuActionResult>(`${API_BASE}/save`, payload, { withCredentials: true });
  }

  delete(menuNo: string): Observable<MenuActionResult> {
    const params = new HttpParams().set('menuNo', menuNo);
    return this.http.post<MenuActionResult>(`${API_BASE}/delete`, null, { params, withCredentials: true });
  }
}
