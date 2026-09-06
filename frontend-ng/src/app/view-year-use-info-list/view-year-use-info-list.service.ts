import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthDeptNode, CodeItem, YearUseInfoListDto, YearUseInfoListSearchParams } from './view-year-use-info-list.model';

const API_BASE = '/ess/tempEmp/api/yearUseInfoList';

/**
 * Giao diện tạo mới (không phải chuyển đổi trang cũ) - gọi API JSON mới được tạo cùng lúc ở
 * EssTempEmpController (xem YearUseInfoListMapper.selectList - công thức tính phép tham khảo
 * YearUseInfoMapper.selectVacationRowsByYear, mở rộng cho nhiều nhân viên).
 */
@Injectable({ providedIn: 'root' })
export class ViewYearUseInfoListService {
  constructor(private readonly http: HttpClient) {}

  getList(params: YearUseInfoListSearchParams): Observable<YearUseInfoListDto[]> {
    let httpParams = new HttpParams();
    for (const [key, value] of Object.entries(params)) {
      if (value) httpParams = httpParams.set(key, value);
    }
    return this.http.get<YearUseInfoListDto[]>(`${API_BASE}/list`, { params: httpParams, withCredentials: true });
  }

  getCodeList(parentCodeNo: string): Observable<CodeItem[]> {
    return this.http.get<CodeItem[]>('/sys/api/getCode/list', {
      params: new HttpParams().set('parentCodeNo', parentCodeNo),
      withCredentials: true,
    });
  }

  getAuthorizedDepartments(): Observable<AuthDeptNode[]> {
    return this.http.get<AuthDeptNode[]>('/ar/attendanceSettings/api/arSupervisor/authorized-departments', {
      withCredentials: true,
    });
  }
}
