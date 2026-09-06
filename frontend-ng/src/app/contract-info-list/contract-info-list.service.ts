import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ContractSavePayload,
  DataTablesRequestPayload,
  DataTablesResponse,
  EmployeeSearchDto,
  HrContractDto,
} from './contract-info-list.model';

const API_BASE = '/hrm/contractInfo';

/**
 * Gọi lại nguyên các API JSON đã có sẵn ở HrContractController (không đổi backend). /contracts vẫn
 * dùng đúng cơ chế DataTables server-side processing cũ (POST + DataTablesRequest/Response) - chỉ đổi
 * phía client sang nz-table (nzFrontPagination=false) thay cho jQuery DataTables.
 */
@Injectable({ providedIn: 'root' })
export class ContractInfoListService {
  constructor(private readonly http: HttpClient) {}

  getPageList(payload: DataTablesRequestPayload): Observable<DataTablesResponse<HrContractDto>> {
    return this.http.post<DataTablesResponse<HrContractDto>>(`${API_BASE}/contracts`, payload, {
      withCredentials: true,
    });
  }

  getContract(contractNo: string): Observable<HrContractDto> {
    return this.http.get<HrContractDto>(`${API_BASE}/api/contract/${encodeURIComponent(contractNo)}`, {
      withCredentials: true,
    });
  }

  addContract(payload: ContractSavePayload): Observable<unknown> {
    return this.http.post(`${API_BASE}/api/contract/add`, payload, { withCredentials: true });
  }

  updateContract(payload: ContractSavePayload): Observable<unknown> {
    return this.http.post(`${API_BASE}/api/contract/update`, payload, { withCredentials: true });
  }

  deleteContract(contractNo: string): Observable<unknown> {
    return this.http.delete(`${API_BASE}/api/contract/delete/${encodeURIComponent(contractNo)}`, {
      withCredentials: true,
    });
  }

  /** Dùng chung endpoint tìm kiếm nhân viên mà changeUser.html (bản gốc) và ChangeUserComponent/
   *  ViewTempEmpInfoListComponent đang dùng - cho modal chọn nhân viên khi thêm mới hợp đồng. */
  searchEmployees(keyword: string): Observable<EmployeeSearchDto[]> {
    let params = new HttpParams();
    if (keyword) params = params.set('keyword', keyword);
    return this.http.get<EmployeeSearchDto[]>('/hrm/empinfo/api/employee/search', {
      params,
      withCredentials: true,
    });
  }
}
