import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface HostelRequest {
  id: number;
  userId: number;
  username: string;
  hostelName: string;
  status: string;
  createdAt: string;
}

@Injectable({ providedIn: 'root' })
export class RequestService {
  private readonly API = 'http://localhost:5003/api/requests';

  constructor(private http: HttpClient) {}

  getAll(): Observable<HostelRequest[]> {
    return this.http.get<HostelRequest[]>(this.API);
  }

  create(hostelName: string): Observable<HostelRequest> {
    return this.http.post<HostelRequest>(this.API, { hostelName });
  }

  updateStatus(id: number, status: string): Observable<void> {
    return this.http.put<void>(`${this.API}/${id}`, { status });
  }
}
