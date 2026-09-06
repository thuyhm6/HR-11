import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AddressApplyPayload,
  CodeItem,
  EmergencyApplyPayload,
  EssPersonalInfoDto,
  FamilyApplyPayload,
  HrAddressMatters,
  HrEmergencyAddress,
  HrFamily,
  PersonalApplyPayload,
} from './personal-info.model';

const API_BASE = '/ess/empinfo/api/personalInfo';

/**
 * Gọi lại nguyên các API JSON đã có sẵn ở EssEmpInfoController (không đổi backend) - bản Angular của
 * ess/empinfo/viewPersonalInfoForEss.html (Thymeleaf + jQuery). savePersonal/saveFamily/saveEmergency
 * nhận form fields (không phải JSON) kèm file đính kèm multipart nên build bằng FormData - đúng như
 * ajax jQuery bản gốc (backend bind qua @RequestParam từng field, không @RequestBody); riêng
 * saveAddress là JSON thuần vì endpoint đó không hỗ trợ file đính kèm.
 */
@Injectable({ providedIn: 'root' })
export class PersonalInfoService {
  constructor(private readonly http: HttpClient) {}

  getMyInfo(): Observable<EssPersonalInfoDto> {
    return this.http.get<EssPersonalInfoDto>(`${API_BASE}/myInfo`, { withCredentials: true });
  }

  getMyAddresses(): Observable<HrAddressMatters[]> {
    return this.http.get<HrAddressMatters[]>(`${API_BASE}/myAddress`, { withCredentials: true });
  }

  getMyFamilies(): Observable<HrFamily[]> {
    return this.http.get<HrFamily[]>(`${API_BASE}/myFamily`, { withCredentials: true });
  }

  getMyEmergencies(): Observable<HrEmergencyAddress[]> {
    return this.http.get<HrEmergencyAddress[]>(`${API_BASE}/myEmergency`, { withCredentials: true });
  }

  getCodeList(parentCodeNo: string): Observable<CodeItem[]> {
    return this.http.get<CodeItem[]>('/sys/api/getCode/list', {
      params: new HttpParams().set('parentCodeNo', parentCodeNo),
      withCredentials: true,
    });
  }

  savePersonal(payload: PersonalApplyPayload, files: File[]): Observable<{ applyNo: string }> {
    return this.http.post<{ applyNo: string }>(`${API_BASE}/savePersonal`, this.toFormData(payload, files), {
      withCredentials: true,
    });
  }

  saveAddress(payload: AddressApplyPayload): Observable<{ addressNo: string }> {
    return this.http.post<{ addressNo: string }>(`${API_BASE}/saveAddress`, payload, { withCredentials: true });
  }

  saveFamily(payload: FamilyApplyPayload, files: File[]): Observable<{ applyNo: string }> {
    return this.http.post<{ applyNo: string }>(`${API_BASE}/saveFamily`, this.toFormData(payload, files), {
      withCredentials: true,
    });
  }

  saveEmergency(payload: EmergencyApplyPayload, files: File[]): Observable<{ applyNo: string }> {
    return this.http.post<{ applyNo: string }>(`${API_BASE}/saveEmergency`, this.toFormData(payload, files), {
      withCredentials: true,
    });
  }

  /** Không set Content-Type thủ công - trình duyệt tự thêm boundary đúng cho multipart/form-data. */
  private toFormData<T extends object>(payload: T, files: File[]): FormData {
    const fd = new FormData();
    Object.entries(payload).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') fd.append(key, String(value));
    });
    files.forEach((file) => fd.append('attachFiles', file));
    return fd;
  }
}
