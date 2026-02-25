import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// =============================================================================
// هذا الـ Interface يمثل شكل بيانات طلب السكن القادمة من الباك إند
// كل خاصية هنا تطابق الـ HostelRequestDto في السيرفر
// =============================================================================
export interface HostelRequest {
  id: number;           // رقم الطلب التسلسلي
  userId: number;       // رقم المستخدم الذي أنشأ الطلب
  username: string;     // اسم المستخدم
  hostelName: string;   // اسم السكن المطلوب
  status: string;       // حالة الطلب: Pending / Approved / Rejected
  createdAt: string;    // تاريخ إنشاء الطلب
}

// providedIn: 'root' → يجعل هذا الـ Service متاحاً في كامل التطبيق بدون الحاجة لتسجيله يدوياً
@Injectable({ providedIn: 'root' })
export class RequestService {
  // رابط الـ API الخاص بطلبات السكن في الباك إند
  private readonly API = 'http://localhost:5003/api/requests';

  constructor(private http: HttpClient) {}

  // -----------------------------------------------------------------
  // GET /api/requests
  // يجلب جميع الطلبات — متاح للأدمن فقط
  // -----------------------------------------------------------------
  getAll(): Observable<HostelRequest[]> {
    return this.http.get<HostelRequest[]>(this.API);
  }

  // -----------------------------------------------------------------
  // POST /api/requests
  // يُنشئ طلب سكن جديد للمستخدم الحالي
  // hostelName → اسم السكن الذي يريده المستخدم
  // -----------------------------------------------------------------
  create(hostelName: string): Observable<HostelRequest> {
    return this.http.post<HostelRequest>(this.API, { hostelName });
  }

  // -----------------------------------------------------------------
  // GET /api/UserReqYN/my-latest
  // يجلب آخر طلب للمستخدم الحالي — للمستخدم العادي فقط
  // -----------------------------------------------------------------
  getMyLatest(): Observable<HostelRequest> {
    return this.http.get<HostelRequest>('http://localhost:5003/api/UserReqYN/my-latest');
  }

  // -----------------------------------------------------------------
  // PUT /api/requests/{id}
  // يُحدّث حالة الطلب — للأدمن فقط
  // status → القيم المسموحة: 'Approved' أو 'Rejected'
  // -----------------------------------------------------------------
  updateStatus(id: number, status: string): Observable<void> {
    return this.http.put<void>(`${this.API}/${id}`, { status });
  }
}
