import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EduTrainArchive, EduTrainArchiveSearch } from './edu-train-archives.model';

const API_BASE = '/edu/traineducation/api/trainArchives';

/** API của EduTrainArchivesController. */
@Injectable({ providedIn: 'root' })
export class EduTrainArchivesService {
  constructor(private readonly http: HttpClient) {}

  getList(search: EduTrainArchiveSearch): Observable<EduTrainArchive[]> {
    let params = new HttpParams();
    if (search.keyword) params = params.set('keyword', search.keyword);
    if (search.deptNo) params = params.set('deptNo', search.deptNo);
    if (search.courseName) params = params.set('courseName', search.courseName);
    if (search.startDate) params = params.set('startDate', search.startDate);
    if (search.endDate) params = params.set('endDate', search.endDate);
    if (search.trainContent) params = params.set('trainContent', search.trainContent);
    return this.http.get<EduTrainArchive[]>(`${API_BASE}/list`, { params, withCredentials: true });
  }
}
