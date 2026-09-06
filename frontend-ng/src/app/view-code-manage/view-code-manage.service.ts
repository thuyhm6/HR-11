import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CodeActionResult, CodeSavePayload, SyCodeDto } from './view-code-manage.model';

const API_BASE = '/sys/api/code';

/**
 * Gọi lại nguyên API JSON đã có sẵn ở SyCodeController (không đổi backend) - xem giải thích ở
 * ViewCodeManageComponent. delete() gửi codeNo qua query string dù là POST vì backend nhận bằng
 * @RequestParam (Spring MVC đọc @RequestParam từ query string bất kể method).
 */
@Injectable({ providedIn: 'root' })
export class ViewCodeManageService {
  constructor(private readonly http: HttpClient) {}

  /** Toàn bộ cây code (đã lọc theo công ty đăng nhập ở backend qua SY_CODE_PARAM) để dựng cây bên trái. */
  getTree(): Observable<SyCodeDto[]> {
    return this.http.get<SyCodeDto[]>(`${API_BASE}/tree`, { withCredentials: true });
  }

  /** Danh sách mã con của 1 node - parentCodeNo rỗng nghĩa là lấy các mã gốc (BE tự hiểu thành 'ROOT'). */
  list(parentCodeNo: string): Observable<SyCodeDto[]> {
    let params = new HttpParams();
    if (parentCodeNo) params = params.set('parentCodeNo', parentCodeNo);
    return this.http.get<SyCodeDto[]>(`${API_BASE}/list`, { params, withCredentials: true });
  }

  save(payload: CodeSavePayload): Observable<CodeActionResult> {
    return this.http.post<CodeActionResult>(`${API_BASE}/save`, payload, { withCredentials: true });
  }

  delete(codeNo: string): Observable<CodeActionResult> {
    const params = new HttpParams().set('codeNo', codeNo);
    return this.http.post<CodeActionResult>(`${API_BASE}/delete`, null, { params, withCredentials: true });
  }
}
