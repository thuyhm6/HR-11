import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthDeptNode, DataTablesResponse, EntryInfoListSearchParams, EssEntryInfoListDto, ShiftOption } from './view-entry-info-list.model';

const API_BASE = '/ess/viewDept/api/entryInfoList';

/**
 * Gọi lại nguyên các API JSON đã có sẵn ở EssViewDeptController (xem viewEntryInfoList.html bản
 * Thymeleaf gốc) - không đổi backend. /list vẫn trả DataTablesResponse phân trang server-side (không
 * đổi sang trả toàn bộ danh sách vì dữ liệu quẹt thẻ có thể rất lớn).
 */
@Injectable({ providedIn: 'root' })
export class ViewEntryInfoListService {
  constructor(private readonly http: HttpClient) {}

  getPageList(params: EntryInfoListSearchParams): Observable<DataTablesResponse<EssEntryInfoListDto>> {
    let httpParams = new HttpParams();
    for (const [key, value] of Object.entries(params)) {
      httpParams = httpParams.set(key, String(value));
    }
    return this.http.get<DataTablesResponse<EssEntryInfoListDto>>(`${API_BASE}/list`, { params: httpParams, withCredentials: true });
  }

  getShiftList(): Observable<ShiftOption[]> {
    return this.http.get<ShiftOption[]>('/ar/attendanceSettings/api/shift', { withCredentials: true });
  }

  getAuthorizedDepartments(): Observable<AuthDeptNode[]> {
    return this.http.get<AuthDeptNode[]>('/ar/attendanceSettings/api/arSupervisor/authorized-departments', {
      withCredentials: true,
    });
  }
}
