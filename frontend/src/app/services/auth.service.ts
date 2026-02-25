import { Injectable, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

export interface AuthResponse {
  id: number;
  username: string;
  role: string;
  token: string;
  profileImageUrl: string;
  hostelName?: string | null;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly API = 'http://localhost:5003/api/auth';
  private readonly STORAGE_KEY = 'auth_user';

  private _user = signal<AuthResponse | null>(this.loadUser());
  readonly user = this._user.asReadonly();
  readonly isLoggedIn = computed(() => this._user() !== null);
  readonly isAdmin = computed(() => this._user()?.role === 'Admin');

  constructor(private http: HttpClient) {}
  private loadUser(): AuthResponse | null {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  }

  login(username: string, password: string): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(`${this.API}/login`, { username, password })
      .pipe(tap((res) => this.setUser(res)));
  }

  register(dto: {
    username: string;
    password: string;
    civilNumber: string;
    number: string;
    profileImageUrl: string;
  }): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(`${this.API}/register`, dto)
      .pipe(tap((res) => this.setUser(res)));
  }

  logout(): void {
    localStorage.removeItem(this.STORAGE_KEY);
    this._user.set(null);
  }

  getToken(): string | null {
    return this._user()?.token ?? null;
  }

  uploadProfileImage(file: File): Observable<{ imageUrl: string }> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<{ imageUrl: string }>(`${this.API}/upload-profile-image`, formData);
  }

  private setUser(user: AuthResponse): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(user));
    this._user.set(user);
  }
}
