import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApproverInfo, EssBasicInfoDto, OtDateInfoMap, OtDurationMap, SaveResult } from './sst-ot-apply-info.model';

/** applyTypeNo cố định = '31' (loại đơn tăng ca) - giữ đúng hardcode của bản gốc. */
const OT_APPLY_TYPE_NO = '31';

/**
 * Gọi lại nguyên các API JSON đã có sẵn (không đổi backend) - bản Angular của
 * ess/infoApply/viewSSTOtApplyInfo.html (Thymeleaf + jQuery). getBasicInfo dùng chung endpoint
 * /api/personalInfo/myInfo mà fragments/essEmpInfoCard.html gốc gọi qua loadEssEmpInfoCard().
 * getApprovers/save gọi thẳng sang EssLeaveApplyController/ArOvertimeManagentController - đúng 2
 * endpoint mà trang gốc dùng (POST form-urlencoded cho approvers - dùng chung API với đơn nghỉ phép
 * chỉ khác applyTypeNo='31', JSON cho save).
 */
@Injectable({ providedIn: 'root' })
export class SstOtApplyInfoService {
  constructor(private readonly http: HttpClient) {}

  getBasicInfo(): Observable<EssBasicInfoDto> {
    return this.http.get<EssBasicInfoDto>('/ess/empinfo/api/personalInfo/myInfo', { withCredentials: true });
  }

  getOtDateInfo(applyDate: string): Observable<OtDateInfoMap> {
    return this.http.get<OtDateInfoMap>('/ess/infoApply/api/otDateInfo', {
      params: new HttpParams().set('applyDate', applyDate),
      withCredentials: true,
    });
  }

  getOtDuration(applyOtDate: string, otFromTime: string, otToTime: string, deductYn: string): Observable<OtDurationMap> {
    const params = new HttpParams()
      .set('applyOtDate', applyOtDate)
      .set('otFromTime', otFromTime)
      .set('otToTime', otToTime)
      .set('deductYn', deductYn);
    return this.http.get<OtDurationMap>('/ess/infoApply/api/otDuration', { params, withCredentials: true });
  }

  /** Endpoint gốc nhận @RequestParam (không phải @RequestBody JSON) nên phải gửi dạng
   *  application/x-www-form-urlencoded - đúng cách $.post() của jQuery bản gốc gửi lên. */
  getApprovers(personId: string, otTypeCode: string, applyLength: string): Observable<ApproverInfo[]> {
    const body = new HttpParams()
      .set('applyTypeNo', OT_APPLY_TYPE_NO)
      .set('personId', personId)
      .set('applyTypeCode', otTypeCode || '')
      .set('applyLength', applyLength || '0');
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post<ApproverInfo[]>('/ar/attendanceMintenance/api/leaveApply/approvers', body.toString(), {
      headers,
      withCredentials: true,
    });
  }

  save(payload: Record<string, unknown>): Observable<SaveResult> {
    return this.http.post<SaveResult>('/ar/attendanceMintenance/api/overtime/save', payload, { withCredentials: true });
  }
}
