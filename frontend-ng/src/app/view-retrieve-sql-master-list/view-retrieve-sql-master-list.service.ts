import { HttpClient, HttpErrorResponse, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, from, map, of } from 'rxjs';
import { CodeItem } from '../manage-emp-position-info/manage-emp-position-info.model';
import {
  AutoExcelActionResult,
  AutoExcelExportOutcome,
  AutoExcelMaster,
  AutoExcelParam,
  AutoExcelSavePayload,
  AutoExcelSearchParams,
} from './view-retrieve-sql-master-list.model';

/** Xem danh sách + chạy báo cáo: mọi người dùng đã đăng nhập. */
const READ_API = '/disc/autoExcel/api';
/** Thêm/sửa/xóa câu SQL + tham số: chỉ ADMIN/SYS (SecurityConfig - /sys/api/**). */
const WRITE_API = '/sys/api/autoExcel';
/** Danh mục loại tham số (bản gốc: SelectSyCodeByCpnyIDForExcel parentNo="211026"). */
const PARAM_TYPE_PARENT_CODE = '211026';

/** API của AutoExcelController + danh mục mã dùng chung /sys/api/getCode/list. */
@Injectable({ providedIn: 'root' })
export class ViewRetrieveSqlMasterListService {
  constructor(private readonly http: HttpClient) {}

  getPermission(): Observable<{ canEdit: boolean }> {
    return this.http.get<{ canEdit: boolean }>(`${READ_API}/permission`, { withCredentials: true });
  }

  getList(search: AutoExcelSearchParams): Observable<AutoExcelMaster[]> {
    let params = new HttpParams();
    for (const [key, value] of Object.entries(search)) {
      if (value) params = params.set(key, value);
    }
    return this.http.get<AutoExcelMaster[]>(`${READ_API}/list`, { params, withCredentials: true });
  }

  getDetail(sqlSeq: string): Observable<AutoExcelMaster> {
    return this.http.get<AutoExcelMaster>(`${READ_API}/detail`, {
      params: new HttpParams().set('sqlSeq', sqlSeq),
      withCredentials: true,
    });
  }

  save(payload: AutoExcelSavePayload): Observable<AutoExcelActionResult> {
    return this.http.post<AutoExcelActionResult>(`${WRITE_API}/save`, payload, { withCredentials: true });
  }

  delete(sqlSeq: string): Observable<AutoExcelActionResult> {
    return this.http.post<AutoExcelActionResult>(`${WRITE_API}/delete`, null, {
      params: new HttpParams().set('sqlSeq', sqlSeq),
      withCredentials: true,
    });
  }

  updateParams(sqlSeq: string, params: AutoExcelParam[]): Observable<AutoExcelActionResult> {
    return this.http.post<AutoExcelActionResult>(`${WRITE_API}/params`, { sqlSeq, params }, { withCredentials: true });
  }

  getParamTypes(): Observable<CodeItem[]> {
    return this.http.get<CodeItem[]>('/sys/api/getCode/list', {
      params: new HttpParams().set('parentCodeNo', PARAM_TYPE_PARENT_CODE),
      withCredentials: true,
    });
  }

  /**
   * Chạy báo cáo. Dùng HttpClient blob (không dùng window.location.href như các trang export khác) vì cần phân biệt
   * 200 = file, 204 = không có dữ liệu, 400 = lỗi kèm message JSON để hiển thị cho người dùng.
   */
  export(sqlSeq: string, params: Record<string, string>): Observable<AutoExcelExportOutcome> {
    return this.http
      .post(`${READ_API}/export`, { sqlSeq, params }, { observe: 'response', responseType: 'blob', withCredentials: true })
      .pipe(
        map((res: HttpResponse<Blob>): AutoExcelExportOutcome =>
          res.status === 204 || !res.body
            ? { kind: 'empty' }
            : { kind: 'file', blob: res.body, fileName: this.fileNameOf(res) ?? `${sqlSeq}.xlsx` },
        ),
        catchError((err: HttpErrorResponse) => this.readErrorMessage(err)),
      );
  }

  /** Lỗi của request blob có body là Blob - đọc ra JSON {success, message}. */
  private readErrorMessage(err: HttpErrorResponse): Observable<AutoExcelExportOutcome> {
    if (!(err.error instanceof Blob)) return of({ kind: 'error', message: null });
    return from(err.error.text()).pipe(
      map((text): AutoExcelExportOutcome => {
        try {
          return { kind: 'error', message: JSON.parse(text)?.message ?? null };
        } catch {
          return { kind: 'error', message: null };
        }
      }),
      catchError(() => of<AutoExcelExportOutcome>({ kind: 'error', message: null })),
    );
  }

  /** filename*=UTF-8''... (RFC 5987) do ContentDisposition của Spring sinh ra, fallback filename="...". */
  private fileNameOf(res: HttpResponse<Blob>): string | null {
    const header = res.headers.get('Content-Disposition');
    if (!header) return null;
    const encoded = /filename\*=UTF-8''([^;]+)/i.exec(header);
    if (encoded) return decodeURIComponent(encoded[1]);
    const plain = /filename="?([^";]+)"?/i.exec(header);
    return plain ? plain[1] : null;
  }
}
