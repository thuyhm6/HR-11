import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AuthDeptNode,
  PaItemInputDto,
  PaItemInputSaveReqDto,
  PaPayScheduleDto,
  PaResultExportExcelParams,
  PaSectionItemsDto,
} from './view-pa-result.model';

const API_BASE = '/pa/salary/result/api';

/**
 * Gọi lại nguyên API JSON đã có sẵn ở PaItemInputController (không đổi backend) - trang cấu hình hạng
 * mục hiển thị cho các báo cáo kết quả tính lương (PA_ITEM_INPUT). Kế hoạch trả lương và cây phòng ban
 * dùng chung 2 API đã có sẵn ở ViewPaPayStubService (/pa/workManagement/api/paySchedule và
 * /pa/wagebase/api/supervisor/authorized-departments), đúng như bản Thymeleaf gốc viewPaResult.html
 * chỉ định. exportExcel backend tự sinh file .xlsx theo query params nên điều hướng trình duyệt tới
 * URL kèm params thay vì gọi HttpClient responseType 'blob' (xem exportExcelUrl() + pattern ở
 * ViewArCardRecordMealService).
 */
@Injectable({ providedIn: 'root' })
export class ViewPaResultService {
  constructor(private readonly http: HttpClient) {}

  getPaySchedules(): Observable<PaPayScheduleDto[]> {
    return this.http.get<PaPayScheduleDto[]>('/pa/workManagement/api/paySchedule', { withCredentials: true });
  }

  getAuthorizedDepartments(): Observable<AuthDeptNode[]> {
    return this.http.get<AuthDeptNode[]>('/pa/wagebase/api/supervisor/authorized-departments', { withCredentials: true });
  }

  getSectionItems(): Observable<PaSectionItemsDto> {
    return this.http.get<PaSectionItemsDto>(`${API_BASE}/sectionItems`, { withCredentials: true });
  }

  getSavedItems(isUse: number, itemType: number): Observable<PaItemInputDto[]> {
    const params = new HttpParams().set('isUse', isUse).set('itemType', itemType);
    return this.http.get<PaItemInputDto[]>(`${API_BASE}/savedItems`, { params, withCredentials: true });
  }

  save(payload: PaItemInputSaveReqDto): Observable<{ success: boolean; message: string }> {
    return this.http.post<{ success: boolean; message: string }>(`${API_BASE}/save`, payload, { withCredentials: true });
  }

  exportExcelUrl(params: PaResultExportExcelParams): string {
    const httpParams = new HttpParams({ fromObject: { ...params } });
    return `${API_BASE}/exportExcel?${httpParams.toString()}`;
  }
}
