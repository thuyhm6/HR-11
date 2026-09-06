import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ConfirmResult,
  DataTablesResponse,
  LeaveConfirmRow,
  LeaveConfirmSearchParams,
  LeaveDetailResponse,
  LeaveTypeOption,
} from './leave-confirm.model';

const API_BASE = '/ess/arConfirm/api/leaveConfirm';
const DETAIL_URL = '/ar/attendanceMintenance/api/leaveApply/detail';
/** Mã cha của loại nghỉ phép (LEAVE_TYPE_CODE) - đúng data-parent-code="21" bản gốc. */
const LEAVE_TYPE_PARENT_CODE = '21';

/**
 * Gọi lại nguyên các API JSON đã có sẵn ở EssLeaveConfirmController (không đổi backend) - bản Angular
 * của ess/arConfirm/viewLeaveConfirmList.html (Thymeleaf + DataTables serverSide).
 */
@Injectable({ providedIn: 'root' })
export class LeaveConfirmService {
  constructor(private readonly http: HttpClient) {}

  getPageList(params: LeaveConfirmSearchParams): Observable<DataTablesResponse<LeaveConfirmRow>> {
    let httpParams = new HttpParams();
    for (const [key, value] of Object.entries(params)) {
      httpParams = httpParams.set(key, String(value));
    }
    return this.http.get<DataTablesResponse<LeaveConfirmRow>>(`${API_BASE}/list`, {
      params: httpParams,
      withCredentials: true,
    });
  }

  confirm(applyNo: string, flag: '1' | '2', hrComment: string): Observable<ConfirmResult> {
    return this.http.post<ConfirmResult>(`${API_BASE}/confirm`, { applyNo, flag, hrComment }, { withCredentials: true });
  }

  confirmBatch(applyNos: string[], flag: '1' | '2', hrComment: string): Observable<ConfirmResult> {
    return this.http.post<ConfirmResult>(
      `${API_BASE}/confirmBatch`,
      { applyNos, flag, hrComment },
      { withCredentials: true },
    );
  }

  getDetail(applyNo: string): Observable<LeaveDetailResponse> {
    const params = new HttpParams().set('applyNo', applyNo).set('applyType', '');
    return this.http.get<LeaveDetailResponse>(DETAIL_URL, { params, withCredentials: true });
  }

  getLeaveTypeOptions(): Observable<LeaveTypeOption[]> {
    const params = new HttpParams().set('parentCodeNo', LEAVE_TYPE_PARENT_CODE);
    return this.http.get<LeaveTypeOption[]>('/sys/api/getCode/list', { params, withCredentials: true });
  }
}
