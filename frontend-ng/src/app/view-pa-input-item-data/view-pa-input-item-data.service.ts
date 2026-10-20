import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthDeptNode } from '../change-user/change-user.model';
import {
  DataTablesResponse,
  PaDistinctValuesResponse,
  PaInputItemDataActionResponse,
  PaInputItemDataDto,
  PaInputItemDataImportResponse,
  PaInputItemDataListParams,
  PaInputItemDataSavePayload,
  PaInputItemListItem,
} from './view-pa-input-item-data.model';

const API_BASE = '/pa/salary/inputItemData/api';

/** Gọi lại nguyên API JSON đã có sẵn ở PaInputItemDataController (không đổi backend, kể cả cơ chế
 *  phân trang server-side kiểu DataTables cũ draw/start/length + recordsFiltered). */
@Injectable({ providedIn: 'root' })
export class ViewPaInputItemDataService {
  constructor(private readonly http: HttpClient) {}

  getItemList(itemType: string): Observable<PaInputItemListItem[]> {
    let httpParams = new HttpParams();
    if (itemType) httpParams = httpParams.set('itemType', itemType);
    return this.http.get<PaInputItemListItem[]>(`${API_BASE}/itemList`, { params: httpParams, withCredentials: true });
  }

  getList(params: PaInputItemDataListParams): Observable<DataTablesResponse<PaInputItemDataDto>> {
    let httpParams = new HttpParams()
      .set('draw', params.draw)
      .set('start', params.start)
      .set('length', params.length);
    if (params.paramNo) httpParams = httpParams.set('paramNo', params.paramNo);
    if (params.payMonth) httpParams = httpParams.set('payMonth', params.payMonth);
    if (params.empOfficeSearch) httpParams = httpParams.set('empOfficeSearch', params.empOfficeSearch);
    if (params.deptNos) httpParams = httpParams.set('deptNos', params.deptNos);
    if (params.empSearch) httpParams = httpParams.set('empSearch', params.empSearch);
    if (params.field1Search) httpParams = httpParams.set('field1Search', params.field1Search);
    return this.http.get<DataTablesResponse<PaInputItemDataDto>>(`${API_BASE}/list`, {
      params: httpParams,
      withCredentials: true,
    });
  }

  /** paramNo để BE chọn đúng bảng PA_PARAM_DATA / PA_PARAM_DATA_OTHER theo DISTINCT_FIELD của hạng mục. */
  getOne(paramDataNo: number, paramNo: string): Observable<PaInputItemDataDto> {
    return this.http.get<PaInputItemDataDto>(`${API_BASE}/${paramDataNo}`, {
      params: new HttpParams().set('paramNo', paramNo),
      withCredentials: true,
    });
  }

  /** Giá trị chọn cho hạng mục phân biệt 1/2 - BE gọi PA_PARAM_LIST_P rồi đọc PA_PARAM_DATA_LIST (đúng bản gốc). */
  getDistinctValues(paramNo: string): Observable<PaDistinctValuesResponse> {
    return this.http.get<PaDistinctValuesResponse>(`${API_BASE}/distinctValues`, {
      params: new HttpParams().set('paramNo', paramNo),
      withCredentials: true,
    });
  }

  insert(payload: PaInputItemDataSavePayload): Observable<PaInputItemDataActionResponse> {
    return this.http.post<PaInputItemDataActionResponse>(`${API_BASE}/insert`, payload, { withCredentials: true });
  }

  update(payload: PaInputItemDataSavePayload): Observable<PaInputItemDataActionResponse> {
    return this.http.put<PaInputItemDataActionResponse>(`${API_BASE}/update`, payload, { withCredentials: true });
  }

  delete(paramDataNo: number, paramNo: string): Observable<PaInputItemDataActionResponse> {
    return this.http.delete<PaInputItemDataActionResponse>(`${API_BASE}/delete/${paramDataNo}`, {
      params: new HttpParams().set('paramNo', paramNo),
      withCredentials: true,
    });
  }

  /** Upload trực tiếp qua multipart (paramNo + file) - đúng PaInputItemDataController#importExcel. */
  importExcel(paramNo: string, file: File): Observable<PaInputItemDataImportResponse> {
    const formData = new FormData();
    formData.append('paramNo', paramNo);
    formData.append('file', file);
    return this.http.post<PaInputItemDataImportResponse>(`${API_BASE}/importExcel`, formData, { withCredentials: true });
  }

  downloadTemplateUrl(): string {
    return '/sy/excel/api/downloadTemplate?templateName=Payroll_Input_Template';
  }

  importResultTabUrl(paramNo: string): string {
    return `/pa/salary/viewImportExcelTempPaParamList?paramNo=${encodeURIComponent(paramNo)}`;
  }

  /** Phòng ban được phân quyền PA (khác /ar/attendanceSettings/api/arSupervisor/authorized-departments
   *  dùng chung toàn hệ thống) - đúng DeptTree.init({ api: '/pa/wagebase/api/supervisor/authorized-departments' })
   *  ở bản gốc, giới hạn đúng phạm vi phòng ban người phụ trách lương hiện tại được quản lý. */
  getAuthorizedDepartments(): Observable<AuthDeptNode[]> {
    return this.http.get<AuthDeptNode[]>('/pa/wagebase/api/supervisor/authorized-departments', {
      withCredentials: true,
    });
  }
}
