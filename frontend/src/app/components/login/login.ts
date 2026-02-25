import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private auth = inject(AuthService);      // هنا ادخلنا اوث سيرفس جاخل لوجن تس 
  private router = inject(Router);

  username = '';
  password = '';
  loading = signal(false);
  error = signal('');

  submit(): void {
    if (!this.username.trim() || !this.password.trim()) {
      this.error.set('يرجى تعبئة جميع الحقول');
      return;
    }
    this.loading.set(true);
    this.error.set('');
    this.auth.login(this.username.trim(), this.password).subscribe({
      next: () => this.router.navigate(['/hostels']),
      error: (err) => {
        this.error.set(err?.error?.message ?? 'بيانات غير صحيحة. تحقق من اسم المستخدم وكلمة المرور');
        this.loading.set(false);
      },
    });
  }
}
