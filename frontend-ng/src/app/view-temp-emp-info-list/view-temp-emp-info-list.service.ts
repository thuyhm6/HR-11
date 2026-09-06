import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  DataTablesRequestPayload,
  DataTablesResponse,
  EmployeeSearchDto,
  HrSpecialMatterDto,
  HrSpecialMatterSavePayload,
} from './view-temp-emp-info-list.model';

const API_BASE = '/hrm/empinfo';

/**
 * Gọi lại nguyên các API JSON đã có sẵn ở HrEmpinfoController (không đổi backend). female-employees
 * vẫn dùng đúng cơ chế DataTables server-side processing cũ (POST + DataTablesRequest/Response) -
 * chỉ đổi phía client sang nz-table (nzFrontPagination=false) thay cho jQuery DataTables. Các API
 * specialMatter/add|update|delete trả về text thuần (không phải JSON) nên phải khai báo
 * responseType: 'text', nếu không Angular sẽ báo lỗi parse dù request thành công (status 200).
 */
@Injectable({ providedIn: 'root' })
export class ViewTempEmpInfoListService {
  constructor(private readonly http: HttpClient) {}

  getPageList(payload: DataTablesRequestPayload): Observable<DataTablesResponse<HrSpecialMatterDto>> {
    return this.http.post<DataTablesResponse<HrSpecialMatterDto>>(`${API_BASE}/female-employees`, payload, {
      withCredentials: true,
    });
  }

  addEmployee(payload: HrSpecialMatterSavePayload): Observable<string> {
    return this.http.post(`${API_BASE}/specialMatter/add`, payload, {
      withCredentials: true,
      responseType: 'text',
    });
  }

  updateEmployee(payload: HrSpecialMatterSavePayload): Observable<string> {
    return this.http.post(`${API_BASE}/specialMatter/update`, payload, {
      withCredentials: true,
      responseType: 'text',
    });
  }

  deleteEmployee(specialNo: string): Observable<string> {
    return this.http.delete(`${API_BASE}/specialMatter/delete/${encodeURIComponent(specialNo)}`, {
      withCredentials: true,
      responseType: 'text',
    });
  }

  /** Dùng chung endpoint tìm kiếm nhân viên mà changeUser.html (bản gốc) và ChangeUserComponent đang
   *  dùng - cho modal chọn nhân viên khi thêm mới. */
  searchEmployees(keyword: string): Observable<EmployeeSearchDto[]> {
    let params = new HttpParams();
    if (keyword) params = params.set('keyword', keyword);
    return this.http.get<EmployeeSearchDto[]>(`${API_BASE}/api/employee/search`, {
      params,
      withCredentials: true,
    });
  }
}
