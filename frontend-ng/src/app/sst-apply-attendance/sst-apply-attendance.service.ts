import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ApproverInfo,
  CodeItem,
  EssBasicInfoDto,
  LeaveLengthMap,
  SaveResult,
  VacationInfoMap,
} from './sst-apply-attendance.model';

const LEAVE_APPLY_API_BASE = '/ar/attendanceMintenance/api/leaveApply';

/** applyTypeNo cố định = '21' (loại đơn nghỉ phép) - giữ đúng hardcode của bản gốc. */
const LEAVE_APPLY_TYPE_NO = '21';

/**
 * Bản Angular của ess/infoApplyAttendance/viewSSTApplyAttendance.jsp (Hanwha_HTSV). getBasicInfo dùng chung
 * endpoint /api/personalInfo/myInfo mà fragments/essEmpInfoCard.html gốc gọi qua loadEssEmpInfoCard().
 * getApprovers/save gọi thẳng sang EssLeaveApplyController (/ar/attendanceMintenance/api/leaveApply/**)
 * - đúng 2 endpoint mà trang gốc dùng (POST form-urlencoded cho approvers, JSON cho save).
 */
@Injectable({ providedIn: 'root' })
export class SstApplyAttendanceService {
  constructor(private readonly http: HttpClient) {}

  getBasicInfo(): Observable<EssBasicInfoDto> {
    return this.http.get<EssBasicInfoDto>('/ess/empinfo/api/personalInfo/myInfo', { withCredentials: true });
  }

  getCodeList(parentCodeNo: string): Observable<CodeItem[]> {
    return this.http.get<CodeItem[]>('/sys/api/getCode/list', {
      params: new HttpParams().set('parentCodeNo', parentCodeNo),
      withCredentials: true,
    });
  }

  getVacationInfo(): Observable<VacationInfoMap> {
    return this.http.get<VacationInfoMap>('/ess/infoApplyAttendance/api/vacationInfo', { withCredentials: true });
  }

  getLeaveLength(fromDateTime: string, toDateTime: string, leaveTypeCode: string): Observable<LeaveLengthMap> {
    let httpParams = new HttpParams().set('fromDateTime', fromDateTime).set('toDateTime', toDateTime);
    if (leaveTypeCode) httpParams = httpParams.set('leaveTypeCode', leaveTypeCode);
    return this.http.get<LeaveLengthMap>('/ess/infoApplyAttendance/api/leaveLength', {
      params: httpParams,
      withCredentials: true,
    });
  }

  /** Endpoint gốc nhận @RequestParam (không phải @RequestBody JSON) nên phải gửi dạng
   *  application/x-www-form-urlencoded - đúng cách $.post() của jQuery bản gốc gửi lên. */
  getApprovers(personId: string, leaveTypeCode: string, applyLength: string): Observable<ApproverInfo[]> {
    const body = new HttpParams()
      .set('applyTypeNo', LEAVE_APPLY_TYPE_NO)
      .set('personId', personId)
      .set('applyTypeCode', leaveTypeCode || '')
      .set('applyLength', applyLength || '0');
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post<ApproverInfo[]>(`${LEAVE_APPLY_API_BASE}/approvers`, body.toString(), {
      headers,
      withCredentials: true,
    });
  }

  /** Loại nghỉ chỉ dành cho nam / nữ (getLeaveDateSST bản gốc). */
  checkLeaveType(applyType: string): Observable<SaveResult> {
    return this.http.get<SaveResult>('/ess/infoApplyAttendance/api/sstApply/check-leave-type', {
      params: new HttpParams().set('applyType', applyType),
      withCredentials: true,
    });
  }

  /** Lưu đơn + file đính kèm (multipart) - EssInfoApplyAttendanceController /api/sstApply/save. */
  save(payload: Record<string, unknown>, files: File[]): Observable<SaveResult> {
    const fd = new FormData();
    fd.append('data', JSON.stringify(payload));
    files.forEach((f) => fd.append('attachFiles', f));
    return this.http.post<SaveResult>('/ess/infoApplyAttendance/api/sstApply/save', fd, { withCredentials: true });
  }
}
