import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CodeItem } from '../manage-emp-position-info/manage-emp-position-info.model';
import { AffirmLineItem, AffirmLineQuery } from './view-affirm-search-list.model';

/** Mã cha của "Loại thông tin đăng ký" (bản gốc: sys.arAffirm.getApplyTypeNoList - PARENT_CODE_NO = 16413). */
const APPLY_TYPE_NO_PARENT_CODE = '16413';

/**
 * Trang này không có backend riêng - dùng lại toàn bộ API sẵn có:
 * - getAffirmLine: endpoint approvers của EssLeaveApplyController (SyAffirmEmailService.findAffirmorList ->
 *   PKG_AFFIRM_EMAIL.GET_AFFIRMOR_LIST_IMPROVE) - chính là hàm các trang đăng ký đơn dùng để dựng tuyến duyệt thật, nên
 *   kết quả tra cứu luôn khớp tuyến duyệt khi nhân viên nộp đơn. Endpoint nhận @RequestParam nên gửi dạng form-urlencoded
 *   (giống CwaAbnormalApplyService.getApprovers).
 * - getCodeList: /sys/api/getCode/list - cùng điều kiện (công ty + ACTIVITY) với getApplyTypeNoList/getApplyTypeCodeList
 *   bản gốc.
 * Tìm nhân viên dùng lại ViewAffirmSpecialListService.searchEmployees (thay popup lookup viewEmpCalendarList bản gốc).
 */
@Injectable({ providedIn: 'root' })
export class ViewAffirmSearchListService {
  constructor(private readonly http: HttpClient) {}

  getAffirmLine(query: AffirmLineQuery): Observable<AffirmLineItem[]> {
    const body = new HttpParams()
      .set('applyTypeNo', query.applyTypeNo)
      .set('personId', query.personId)
      .set('applyTypeCode', query.applyTypeCode)
      .set('applyLength', query.applyLength);
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post<AffirmLineItem[]>('/ar/attendanceMintenance/api/leaveApply/approvers', body.toString(), {
      headers,
      withCredentials: true,
    });
  }

  getApplyTypeNoList(): Observable<CodeItem[]> {
    return this.getCodeList(APPLY_TYPE_NO_PARENT_CODE);
  }

  /** Loại đơn thuộc 1 loại thông tin đăng ký (thay ajax getApplyTypeCodeList bản gốc). */
  getCodeList(parentCodeNo: string): Observable<CodeItem[]> {
    return this.http.get<CodeItem[]>('/sys/api/getCode/list', {
      params: new HttpParams().set('parentCodeNo', parentCodeNo),
      withCredentials: true,
    });
  }
}
