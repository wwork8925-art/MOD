import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Comment {
  id: number;
  text: string;
  createdAt: string;
  userId: number;
  username: string;
  hostelName: string;
}

@Injectable({ providedIn: 'root' })
export class CommentService {
  private readonly API = 'http://localhost:5003/api/comments';

  constructor(private http: HttpClient) {}

  getByHostel(hostelName: string): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.API}/${encodeURIComponent(hostelName)}`);
  }

  create(text: string, hostelName: string): Observable<Comment> {
    return this.http.post<Comment>(this.API, { text, hostelName });
  }
}
