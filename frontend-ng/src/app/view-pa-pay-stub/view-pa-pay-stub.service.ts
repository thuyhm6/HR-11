import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthDeptNode, PaPayScheduleDto, PaPayStubDto, PaPayStubSearchParams } from './view-pa-pay-stub.model';

const API_BASE = '/pa/workManagement/api';

/**
 * Gọi lại nguyên các API JSON đã có sẵn ở PaWorkManagementController (không đổi backend) - trang quản
 * trị/HR tra cứu phiếu lương của nhiều nhân viên theo phòng ban/họ tên/trạng thái làm việc, có tính
 * lại lương. Cây phòng ban gọi thẳng PaSupervisorController (endpoint /pa/wagebase/api/supervisor/
 * authorized-departments) đúng như bản Thymeleaf gốc payStub.html chỉ định, khác endpoint dùng chung
 * ChangeUserService.getAuthorizedDepartments() (/ar/attendanceSettings/...) nên viết service riêng
 * thay vì tái dùng ChangeUserService cho phần này.
 */
@Injectable({ providedIn: 'root' })
export class ViewPaPayStubService {
  constructor(private readonly http: HttpClient) {}

  getPaySchedules(): Observable<PaPayScheduleDto[]> {
    return this.http.get<PaPayScheduleDto[]>(`${API_BASE}/paySchedule`, { withCredentials: true });
  }

  loadPayStubs(params: PaPayStubSearchParams): Observable<PaPayStubDto[]> {
    let httpParams = new HttpParams().set('payScheduleNo', params.payScheduleNo).set('lang', params.lang);
    if (params.deptNos) httpParams = httpParams.set('deptNos', params.deptNos);
    if (params.empSearch) httpParams = httpParams.set('empSearch', params.empSearch);
    if (params.empOffice) httpParams = httpParams.set('empOffice', params.empOffice);
    return this.http.get<PaPayStubDto[]>(`${API_BASE}/payStub/load`, { params: httpParams, withCredentials: true });
  }

  recalculate(payScheduleNo: string, personIds: string[]): Observable<{ success: boolean; message: string }> {
    return this.http.post<{ success: boolean; message: string }>(
      `${API_BASE}/payStub/recalculate`,
      { payScheduleNo, personIds },
      { withCredentials: true },
    );
  }

  getAuthorizedDepartments(): Observable<AuthDeptNode[]> {
    return this.http.get<AuthDeptNode[]>('/pa/wagebase/api/supervisor/authorized-departments', { withCredentials: true });
  }
}
