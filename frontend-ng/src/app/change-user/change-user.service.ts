import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthDeptNode, CodeItem, EmployeeSearchDto, EmployeeSearchParams } from './change-user.model';

/**
 * Gọi lại nguyên các API JSON đã có sẵn ở backend (EssChangeUserController, HrEmpinfoController,
 * ArSupervisorController, SyCodeController) - không đổi backend. searchEmployees thay cho
 * EmployeeSearchModal (jQuery + DataTables, xem employeeSearchModal.js) chỉ cho trang changeUser
 * này - bản jQuery gốc vẫn giữ nguyên cho các trang Thymeleaf khác chưa migrate.
 */
@Injectable({ providedIn: 'root' })
export class ChangeUserService {
  constructor(private readonly http: HttpClient) {}

  searchEmployees(params: EmployeeSearchParams): Observable<EmployeeSearchDto[]> {
    let httpParams = new HttpParams();
    if (params.keyword) httpParams = httpParams.set('keyword', params.keyword);
    if (params.empOffice) httpParams = httpParams.set('empOffice', params.empOffice);
    for (const code of params.deptCodes) {
      httpParams = httpParams.append('deptCodes', code);
    }
    return this.http.get<EmployeeSearchDto[]>('/hrm/empinfo/api/employee/search', {
      params: httpParams,
      withCredentials: true,
    });
  }

  getAuthorizedDepartments(): Observable<AuthDeptNode[]> {
    return this.http.get<AuthDeptNode[]>('/ar/attendanceSettings/api/arSupervisor/authorized-departments', {
      withCredentials: true,
    });
  }

  getCodeList(parentCodeNo: string): Observable<CodeItem[]> {
    return this.http.get<CodeItem[]>('/sys/api/getCode/list', {
      params: new HttpParams().set('parentCodeNo', parentCodeNo),
      withCredentials: true,
    });
  }

  /** Gọi lại nguyên POST /ess/change/api/changeUser (form-urlencoded, giống ajax jQuery bản gốc). */
  changeUser(personId: string): Observable<{ message: string }> {
    const body = new URLSearchParams();
    body.set('personId', personId);
    return this.http.post<{ message: string }>('/ess/change/api/changeUser', body.toString(), {
      withCredentials: true,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
  }
}
