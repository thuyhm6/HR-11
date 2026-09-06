import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EssBasicInfoDto, EssPersonOtInfoDto, PersonOtSearchParams } from './person-ot-apply-info-list.model';

const API_BASE = '/ess/infoApply/api/personOt';

/**
 * Gọi lại nguyên các API JSON đã có sẵn (không đổi backend) - bản Angular của
 * ess/infoApply/viewPersonOtApplyInfoList.html (Thymeleaf + jQuery, tự build bảng + phân trang bằng
 * tay). getBasicInfo dùng chung endpoint /api/personalInfo/myInfo mà fragments/essEmpInfoCard.html gốc
 * gọi qua loadEssEmpInfoCard(). getList dùng chung /api/personOt/list mà
 * DashboardService.getPersonOtList() cũng đang gọi cho biểu đồ Dashboard - không đổi field/tham số để
 * không ảnh hưởng Dashboard.
 */
@Injectable({ providedIn: 'root' })
export class PersonOtApplyInfoListService {
  constructor(private readonly http: HttpClient) {}

  getBasicInfo(): Observable<EssBasicInfoDto> {
    return this.http.get<EssBasicInfoDto>('/ess/empinfo/api/personalInfo/myInfo', { withCredentials: true });
  }

  getItemList(): Observable<EssPersonOtInfoDto[]> {
    return this.http.get<EssPersonOtInfoDto[]>(`${API_BASE}/items`, { withCredentials: true });
  }

  getList(params: PersonOtSearchParams): Observable<EssPersonOtInfoDto[]> {
    let httpParams = new HttpParams();
    if (params.startDate) httpParams = httpParams.set('startDate', params.startDate);
    if (params.endDate) httpParams = httpParams.set('endDate', params.endDate);
    if (params.itemNoSearch) httpParams = httpParams.set('itemNoSearch', params.itemNoSearch);
    if (params.minQuantity) httpParams = httpParams.set('minQuantity', params.minQuantity);
    return this.http.get<EssPersonOtInfoDto[]>(`${API_BASE}/list`, { params: httpParams, withCredentials: true });
  }
}
