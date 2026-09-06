import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface EmpMonthlyStatsRow {
  monthNum: number;
  empCount: number;
  newJoinerCount: number;
  leaverCount: number;
}

/**
 * Gọi lại các API JSON mà login/hrm.html (Thymeleaf, đã xoá) đang dùng - không đổi backend, chỉ port
 * phần gọi/hiển thị sang Angular. Riêng /hrm/api/expiringContracts/count là API mới thêm ở
 * HomeController (bản gốc lấy số liệu này qua Model lúc render trang Thymeleaf, giờ cần expose dạng
 * JSON). API /hrm/contractInfo/api/noContract/count CHƯA từng tồn tại ở backend (gọi luôn lỗi 404 ở
 * cả bản gốc lẫn bản này) - giữ nguyên hành vi gốc (ô số lượng hiển thị "-"), không tự ý thêm logic
 * đếm mới ngoài phạm vi yêu cầu.
 */
@Injectable({ providedIn: 'root' })
export class HrmDashboardService {
  constructor(private readonly http: HttpClient) {}

  getExpiringContractsCount(): Observable<number> {
    return this.http.get<number>('/hrm/api/expiringContracts/count', { withCredentials: true });
  }

  getNoContractCount(): Observable<number> {
    return this.http.get<number>('/hrm/contractInfo/api/noContract/count', { withCredentials: true });
  }

  getEmpMonthlyStats(year: number): Observable<EmpMonthlyStatsRow[]> {
    return this.http.get<EmpMonthlyStatsRow[]>('/hrm/api/empMonthlyStats', {
      params: new HttpParams().set('year', year),
      withCredentials: true,
    });
  }
}
