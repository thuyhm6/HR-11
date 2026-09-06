import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CodeItem, EvsResumeDto, EvsResumeSavePayload } from './evs-resume-list.model';

const API_BASE = '/evs/manage/api';

/** Gọi lại nguyên các API JSON đã có sẵn ở EvsManageController (cũng chính là API mà trang Thymeleaf cũ
 *  viewResumeList.html đang dùng) - không đổi backend. */
@Injectable({ providedIn: 'root' })
export class EvsResumeListService {
  constructor(private readonly http: HttpClient) {}

  getList(evsType: string, yearSearch: string, cycleSearch: string): Observable<EvsResumeDto[]> {
    let params = new HttpParams().set('evsType', evsType);
    if (yearSearch) params = params.set('yearSearch', yearSearch);
    if (cycleSearch) params = params.set('cycleSearch', cycleSearch);
    return this.http.get<EvsResumeDto[]>(`${API_BASE}/resume/list`, { params, withCredentials: true });
  }

  getOne(seq: string): Observable<EvsResumeDto> {
    return this.http.get<EvsResumeDto>(`${API_BASE}/resume/${encodeURIComponent(seq)}`, { withCredentials: true });
  }

  /** Danh sách đợt đánh giá để chọn "Sao chép đối tượng" khi thêm mới/sửa. */
  getCopyOptions(evsType: string): Observable<EvsResumeDto[]> {
    return this.http.get<EvsResumeDto[]>(`${API_BASE}/resume/evsResumeList`, {
      params: new HttpParams().set('evsType', evsType),
      withCredentials: true,
    });
  }

  save(payload: EvsResumeSavePayload): Observable<{ success: boolean }> {
    return this.http.post<{ success: boolean }>(`${API_BASE}/resume/save`, payload, { withCredentials: true });
  }

  delete(seq: string, evsType: string): Observable<{ success: boolean }> {
    return this.http.post<{ success: boolean }>(`${API_BASE}/resume/delete`, { seq, evsType }, { withCredentials: true });
  }

  /** Combo mã hệ thống dùng chung (Chu kỳ=14015038, Số lần đánh giá=14015060, Tháng đánh giá=mã chu kỳ
   *  đã chọn - cascading, xem reloadCodeSelect ở layout/master.html bản Thymeleaf gốc). */
  getCodeList(parentCodeNo: string): Observable<CodeItem[]> {
    return this.http.get<CodeItem[]>('/sys/api/getCode/list', {
      params: new HttpParams().set('parentCodeNo', parentCodeNo),
      withCredentials: true,
    });
  }
}
