import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ApplyResult,
  ApproverInfo,
  AttendanceExApplyItem,
  CwaAbnormalSearchParams,
  EssBasicInfoDto,
  EssCwaAbnormalDto,
} from './cwa-abnormal-apply.model';

const CWA_API_BASE = '/ess/infoApply/api/myCwaAbnormal';
const LEAVE_APPLY_API_BASE = '/ar/attendanceMintenance/api/leaveApply';
const ATTENDANCE_EX_APPLY_URL = '/ess/infoApplyAttendance/api/attendanceEx/apply';

/** applyTypeNo/applyTypeCode cố định (loại đơn "xin phép chấm công bất thường") - giữ đúng hardcode
 *  của scaLoadApprovers() bản gốc. */
const CWA_APPLY_TYPE_NO = '218197';
const CWA_APPLY_TYPE_CODE = '141443';

/**
 * Gọi lại nguyên các API JSON đã có sẵn (không đổi backend) - bản Angular của
 * ess/infoApply/viewShowCwaAbnormalApply.html (Thymeleaf + jQuery, tự build bảng + phân trang bằng
 * tay). getBasicInfo dùng chung endpoint /api/personalInfo/myInfo mà fragments/essEmpInfoCard.html
 * gốc gọi qua loadEssEmpInfoCard(). getApprovers gọi thẳng sang EssLeaveApplyController (giống hệt
 * getApprovers() ở sst-apply-attendance.service.ts, chỉ khác applyTypeCode cố định). submit gọi
 * EssInfoApplyAttendanceController#applyAttendanceExForBatch - đúng API mà scaSubmit() bản gốc dùng.
 */
@Injectable({ providedIn: 'root' })
export class CwaAbnormalApplyService {
  constructor(private readonly http: HttpClient) {}

  getBasicInfo(): Observable<EssBasicInfoDto> {
    return this.http.get<EssBasicInfoDto>('/ess/empinfo/api/personalInfo/myInfo', { withCredentials: true });
  }

  getList(params: CwaAbnormalSearchParams): Observable<EssCwaAbnormalDto[]> {
    let httpParams = new HttpParams();
    if (params.startDate) httpParams = httpParams.set('startDate', params.startDate);
    if (params.endDate) httpParams = httpParams.set('endDate', params.endDate);
    return this.http.get<EssCwaAbnormalDto[]>(`${CWA_API_BASE}/list`, { params: httpParams, withCredentials: true });
  }

  /** Endpoint gốc nhận @RequestParam (không phải @RequestBody JSON) nên phải gửi dạng
   *  application/x-www-form-urlencoded - đúng cách $.post() của jQuery bản gốc gửi lên. */
  getApprovers(personId: string): Observable<ApproverInfo[]> {
    const body = new HttpParams()
      .set('applyTypeNo', CWA_APPLY_TYPE_NO)
      .set('personId', personId)
      .set('applyTypeCode', CWA_APPLY_TYPE_CODE)
      .set('applyLength', '0');
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post<ApproverInfo[]>(`${LEAVE_APPLY_API_BASE}/approvers`, body.toString(), {
      headers,
      withCredentials: true,
    });
  }

  submit(items: AttendanceExApplyItem[]): Observable<ApplyResult> {
    return this.http.post<ApplyResult>(ATTENDANCE_EX_APPLY_URL, items, { withCredentials: true });
  }
}
