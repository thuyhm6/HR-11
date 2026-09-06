import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CodeItem, EssBasicInfoDto, WorkGroupHistoryDto, WorkGroupSearchParams } from './workgroup-exper-list.model';

const API_BASE = '/ess/workgroup/api';

/**
 * Gọi lại nguyên các API JSON đã có sẵn ở EssWorkGroupController (không đổi backend) - bản Angular
 * của ess/workgroup/viewWorkGroupExperList.html (Thymeleaf + DataTables). getBasicInfo dùng chung
 * endpoint /api/personalInfo/myInfo mà fragments/essEmpInfoCard.html gốc gọi qua loadEssEmpInfoCard().
 */
@Injectable({ providedIn: 'root' })
export class WorkgroupExperListService {
  constructor(private readonly http: HttpClient) {}

  getBasicInfo(): Observable<EssBasicInfoDto> {
    return this.http.get<EssBasicInfoDto>('/ess/empinfo/api/personalInfo/myInfo', { withCredentials: true });
  }

  getList(params: WorkGroupSearchParams): Observable<WorkGroupHistoryDto[]> {
    let httpParams = new HttpParams();
    for (const [key, value] of Object.entries(params)) {
      if (value) httpParams = httpParams.set(key, value);
    }
    return this.http.get<WorkGroupHistoryDto[]>(`${API_BASE}/workGroup/myList`, {
      params: httpParams,
      withCredentials: true,
    });
  }

  getCodeList(parentCodeNo: string): Observable<CodeItem[]> {
    return this.http.get<CodeItem[]>('/sys/api/getCode/list', {
      params: new HttpParams().set('parentCodeNo', parentCodeNo),
      withCredentials: true,
    });
  }
}
