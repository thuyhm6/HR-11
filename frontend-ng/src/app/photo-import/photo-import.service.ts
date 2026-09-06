import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PhotoImportResult } from './photo-import.model';

const API_BASE = '/hrm/empinfo/api/photo';

/**
 * Gọi lại nguyên các API JSON đã có sẵn ở HrEmpinfoController (không đổi backend) - trang Thymeleaf
 * hrm/empinfo/photoImport.html đã được thay bằng Angular route /photo-import.
 */
@Injectable({ providedIn: 'root' })
export class PhotoImportService {
  constructor(private readonly http: HttpClient) {}

  previewPhotos(files: File[]): Observable<PhotoImportResult[]> {
    return this.http.post<PhotoImportResult[]>(`${API_BASE}/preview`, this.toFormData(files), {
      withCredentials: true,
    });
  }

  savePhotos(files: File[]): Observable<PhotoImportResult[]> {
    return this.http.post<PhotoImportResult[]>(`${API_BASE}/save`, this.toFormData(files), {
      withCredentials: true,
    });
  }

  private toFormData(files: File[]): FormData {
    const fd = new FormData();
    files.forEach((f) => fd.append('files', f));
    return fd;
  }
}
