import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  CodeItem,
  DataTablesResponse,
  EmployeeSearchDto,
  PaPayObjAddPayload,
  PaPayObjDeleteKey,
  PaPayObjDto,
  PaPayObjSearchParams,
  PaPayObjUpdatePayload,
  PaPayScheduleOption,
} from './view-pa-pay-obj.model';

const API_BASE = '/pa/workManagement/api/payObj';

/** Gọi lại nguyên các API JSON đã có sẵn ở PaWorkManagementController (không đổi backend). */
@Injectable({ providedIn: 'root' })
export class ViewPaPayObjService {
  constructor(private readonly http: HttpClient) {}

  getPageList(params: PaPayObjSearchParams): Observable<DataTablesResponse<PaPayObjDto>> {
    let httpParams = new HttpParams()
      .set('draw', params.draw)
      .set('start', params.start)
      .set('length', params.length);
    if (params.empSearch) httpParams = httpParams.set('empSearch', params.empSearch);
    if (params.payScheduleNo) httpParams = httpParams.set('payScheduleNo', params.payScheduleNo);
    if (params.includeType) httpParams = httpParams.set('includeType', params.includeType);
    if (params.empOffice) httpParams = httpParams.set('empOffice', params.empOffice);
    return this.http.get<DataTablesResponse<PaPayObjDto>>(API_BASE, { params: httpParams, withCredentials: true });
  }

  save(payload: PaPayObjAddPayload): Observable<{ success: boolean; message: string }> {
    return this.http.post<{ success: boolean; message: string }>(`${API_BASE}/save`, payload, { withCredentials: true });
  }

  saveList(items: PaPayObjUpdatePayload[]): Observable<{ success: boolean; message: string }> {
    return this.http.post<{ success: boolean; message: string }>(`${API_BASE}/saveList`, items, { withCredentials: true });
  }

  deleteList(keys: PaPayObjDeleteKey[]): Observable<{ success: boolean; message: string }> {
    return this.http.request<{ success: boolean; message: string }>('DELETE', `${API_BASE}/deleteList`, {
      body: keys,
      withCredentials: true,
    });
  }

  /** Dùng lại đúng API danh sách kế hoạch trả lương của ViewPaPayScheduleService cho combo chọn. */
  getPayScheduleOptions(): Observable<PaPayScheduleOption[]> {
    return this.http.get<PaPayScheduleOption[]>('/pa/workManagement/api/paySchedule', { withCredentials: true });
  }

  getCodeList(parentCodeNo: string): Observable<CodeItem[]> {
    return this.http.get<CodeItem[]>('/sys/api/getCode/list', {
      params: new HttpParams().set('parentCodeNo', parentCodeNo),
      withCredentials: true,
    });
  }

  /** Dùng chung endpoint tìm kiếm nhân viên mà ChangeUserComponent/ContractInfoListComponent đang dùng
   *  cho modal chọn nhân viên khi thêm mới - thay cho EmployeeSearchModal (jQuery) bản gốc. */
  searchEmployees(keyword: string): Observable<EmployeeSearchDto[]> {
    let params = new HttpParams();
    if (keyword) params = params.set('keyword', keyword);
    return this.http.get<EmployeeSearchDto[]>('/hrm/empinfo/api/employee/search', { params, withCredentials: true });
  }
}
