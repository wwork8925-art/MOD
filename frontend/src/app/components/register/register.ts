import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  private auth = inject(AuthService);
  private router = inject(Router);

  username = '';
  password = '';
  civilNumber = '';
  phoneNumber = '';
  profileImageUrl = '';
  selectedFile: File | null = null;
  imagePreview = signal<string>('');
  uploading = signal(false);
  loading = signal(false);
  error = signal('');

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return;
    const file = input.files[0];
    this.selectedFile = file;
    // Show local preview immediately
    const reader = new FileReader();
    reader.onload = (e) => this.imagePreview.set(e.target?.result as string);
    reader.readAsDataURL(file);
    // Auto-upload right away
    this.uploading.set(true);
    this.profileImageUrl = '';
    this.auth.uploadProfileImage(file).subscribe({
      next: (res) => {
        this.profileImageUrl = res.imageUrl;
        this.uploading.set(false);
      },
      error: (err) => {
        this.error.set(err?.error?.message ?? 'خطأ في رفع الصورة');
        this.uploading.set(false);
      },
    });
  }

  submit(): void {
    if (!this.username.trim() || !this.password || !this.civilNumber.trim() || !this.phoneNumber.trim()) {
      this.error.set('يرجى تعبئة جميع الحقول المطلوبة');
      return;
    }
    this.loading.set(true);
    this.error.set('');
    this.auth
      .register({
        username: this.username.trim(),
        password: this.password,
        civilNumber: this.civilNumber.trim(),
        number: this.phoneNumber.trim(),
        profileImageUrl: this.profileImageUrl,
      })
      .subscribe({
        next: () => this.router.navigate(['/hostels']),
        error: (err) => {
          this.error.set(err?.error?.message ?? 'حدث خطأ أثناء التسجيل');
          this.loading.set(false);
        },
      });
  }
}
