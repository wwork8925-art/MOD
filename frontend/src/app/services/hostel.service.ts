import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Hostel {
  hostelName: string;
  capacity: number;
  currentResidents: number;
  location: string;
  imageUrls: string[];
  info: string;
}

@Injectable({ providedIn: 'root' })
export class HostelService {
  private readonly API = 'http://localhost:5003/api/hostels';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Hostel[]> {
    return this.http.get<Hostel[]>(this.API);
  }

  getByName(name: string): Observable<Hostel> {
    return this.http.get<Hostel>(`${this.API}/${encodeURIComponent(name)}`);
  }

  create(dto: Hostel): Observable<Hostel> {
    return this.http.post<Hostel>(this.API, dto);
  }

  update(name: string, dto: Hostel): Observable<void> {
    return this.http.put<void>(`${this.API}/${encodeURIComponent(name)}`, dto);
  }

  uploadImages(files: File[]): Observable<{ imageUrls: string[] }> {
    const formData = new FormData();
    files.forEach((f) => formData.append('files', f));
    return this.http.post<{ imageUrls: string[] }>(`${this.API}/upload-images`, formData);
  }
}
