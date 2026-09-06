import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CodeItem, EvsParamRow, EvsResumeOption } from './evs-param-panel.model';

const API_BASE = '/evs/manage/api';

/** Gọi lại nguyên các API JSON đã có sẵn ở EvsManageController (cũng chính là API mà trang Thymeleaf cũ
 *  viewEvsParamPanel.html đang dùng) - không đổi backend. `api` là tiền tố path riêng của từng tab
 *  (evsGrade/evsParam/evsParamObject/evsAffirmRule - xem TAB_META ở component) - cả 4 namespace đều
 *  cùng chung 1 khuôn REST .../list, .../save (POST List), .../delete (POST {seqs}) nên gộp chung được
 *  thành các method generic thay vì viết lặp lại 4 lần. */
@Injectable({ providedIn: 'root' })
export class EvsParamPanelService {
  constructor(private readonly http: HttpClient) {}

  getResumeList(evsType: string): Observable<EvsResumeOption[]> {
    return this.http.get<EvsResumeOption[]>(`${API_BASE}/resume/evsResumeList`, {
      params: new HttpParams().set('evsType', evsType),
      withCredentials: true,
    });
  }

  getList(api: string, resumeSeq: string, evsType: string, paramType: string | null): Observable<EvsParamRow[]> {
    let params = new HttpParams().set('resumeSeq', resumeSeq).set('evsType', evsType);
    if (paramType) params = params.set('paramType', paramType);
    return this.http.get<EvsParamRow[]>(`${API_BASE}/${api}/list`, { params, withCredentials: true });
  }

  saveBatch(api: string, payload: Record<string, unknown>[]): Observable<{ success: boolean }> {
    return this.http.post<{ success: boolean }>(`${API_BASE}/${api}/save`, payload, { withCredentials: true });
  }

  deleteBatch(api: string, seqs: string[]): Observable<{ success: boolean }> {
    return this.http.post<{ success: boolean }>(`${API_BASE}/${api}/delete`, { seqs }, { withCredentials: true });
  }

  /** Combo "Nhóm nhân viên" cho tab Người đánh giá - phụ thuộc resumeSeq đang chọn (chỉ lấy nhóm đã lưu
   *  của đúng đợt đánh giá đó, xem selectGroupOptions trong EvsParamMapper.xml). */
  getGroupOptions(resumeSeq: string): Observable<CodeItem[]> {
    return this.http.get<CodeItem[]>(`${API_BASE}/evsParam/groupOptions`, {
      params: new HttpParams().set('resumeSeq', resumeSeq),
      withCredentials: true,
    });
  }

  /** Combo "Hình thức tiêu chuẩn" dùng chung cho tab Đối tượng đánh giá/Bảng đánh giá/Nhóm nhân viên/
   *  Nhóm chức vụ - load 1 lần, không phụ thuộc resumeSeq. */
  getFormulaOptions(): Observable<CodeItem[]> {
    return this.http.get<CodeItem[]>(`${API_BASE}/evsFormula/formulaOptions`, { withCredentials: true });
  }

  /** Combo mã hệ thống dùng chung (Loại ĐG=14015137, Cấp ĐG=14015161, Bước bắt đầu=14015351,
   *  Giai đoạn=14015060, ID quy tắc=14015172 - đúng giá trị hardcode data-parent-code ở bản gốc). */
  getCodeList(parentCodeNo: string): Observable<CodeItem[]> {
    return this.http.get<CodeItem[]>('/sys/api/getCode/list', {
      params: new HttpParams().set('parentCodeNo', parentCodeNo),
      withCredentials: true,
    });
  }
}
