import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RequestService, HostelRequest } from '../../services/request.service';

@Component({
  selector: 'app-dash',
  imports: [CommonModule, RouterLink],
  templateUrl: './dash.html',
  styleUrl: './dash.css',
})
export class Dash implements OnInit {

  // آخر طلب خاص بالمستخدم المسجل حالياً (ليس كل الطلبات)
  myRequest = signal<HostelRequest | null>(null);
  loading = signal(true);
  // رسالة الخطأ إذا لم يوجد طلب أو فشل الاتصال
  errorMsg = signal<string | null>(null);

  constructor(private requestService: RequestService) {}

  ngOnInit() {
    // جلب آخر طلب خاص بالمستخدم من الباك إند عند فتح الصفحة
    // getMyLatest() يستدعي api/UserReqYN/my-latest الخاص بالمستخدم فقط
    this.requestService.getMyLatest().subscribe({
      next: (data) => {
        this.myRequest.set(data);  // حفظ الطلب
        this.loading.set(false);
      },
      error: (err) => {
        // 404 = المستخدم لم يقدم أي طلب بعد
        if (err.status === 404) {
          this.errorMsg.set('لم تقدم أي طلب سكن بعد.');
        } else {
          this.errorMsg.set('حدث خطأ أثناء جلب البيانات.');
        }
        this.loading.set(false);
      }
    });
  }
}