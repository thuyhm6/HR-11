import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EssBasicInfoDto, PersonShiftDto, PersonShiftSearchParams } from './person-shift-list.model';

const API_BASE = '/ess/workgroup/api';

/**
 * Gọi lại nguyên các API JSON đã có sẵn ở EssWorkGroupController (không đổi backend) - bản Angular
 * của ess/workgroup/viewPersonShiftList.html (Thymeleaf + DataTables). getBasicInfo dùng chung
 * endpoint /api/personalInfo/myInfo mà fragments/essEmpInfoCard.html gốc gọi qua loadEssEmpInfoCard().
 */
@Injectable({ providedIn: 'root' })
export class PersonShiftListService {
  constructor(private readonly http: HttpClient) {}

  getBasicInfo(): Observable<EssBasicInfoDto> {
    return this.http.get<EssBasicInfoDto>('/ess/empinfo/api/personalInfo/myInfo', { withCredentials: true });
  }

  getList(params: PersonShiftSearchParams): Observable<PersonShiftDto[]> {
    let httpParams = new HttpParams();
    for (const [key, value] of Object.entries(params)) {
      if (value) httpParams = httpParams.set(key, value);
    }
    return this.http.get<PersonShiftDto[]>(`${API_BASE}/personShift/myList`, {
      params: httpParams,
      withCredentials: true,
    });
  }
}
