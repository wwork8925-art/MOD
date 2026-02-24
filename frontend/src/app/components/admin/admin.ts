import { Component, inject, signal, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HostelService, Hostel } from '../../services/hostel.service';
import { UserService, UserDto } from '../../services/user.service';
import { RequestService, HostelRequest } from '../../services/request.service';

type Tab = 'hostels' | 'users' | 'requests';

@Component({
  selector: 'app-admin',
  imports: [FormsModule],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin implements OnInit {
  private hostelService = inject(HostelService);
  private userService = inject(UserService);
  private requestService = inject(RequestService);

  activeTab = signal<Tab>('hostels');

  // --- Hostels ---
  hostels = signal<Hostel[]>([]);
  hostelsLoading = signal(true);
  showHostelForm = signal(false);
  editingHostel = signal<Hostel | null>(null);
  hostelForm: Hostel = this.emptyHostelForm();
  hostelError = signal('');
  hostelSuccess = signal('');
  hostelSaving = signal(false);
  imageUploadLoading = signal(false);
  newImageUrl = '';

  // --- Users ---
  users = signal<UserDto[]>([]);
  usersLoading = signal(true);
  usersError = signal('');
  usersSuccess = signal('');

  // --- Requests ---
  requests = signal<HostelRequest[]>([]);
  requestsLoading = signal(true);
  requestsError = signal('');
  requestsSuccess = signal('');

  ngOnInit(): void {
    this.loadHostels();
    this.loadUsers();
    this.loadRequests();
  }

  // ====== HOSTELS ======
  private emptyHostelForm(): Hostel {
    return { hostelName: '', capacity: 0, currentResidents: 0, location: '', imageUrls: [], info: '' };
  }

  loadHostels(): void {
    this.hostelsLoading.set(true);
    this.hostelService.getAll().subscribe({
      next: (h) => { this.hostels.set(h); this.hostelsLoading.set(false); },
      error: () => this.hostelsLoading.set(false),
    });
  }

  openAddHostel(): void {
    this.editingHostel.set(null);
    this.hostelForm = this.emptyHostelForm();
    this.hostelError.set('');
    this.hostelSuccess.set('');
    this.showHostelForm.set(true);
  }

  openEditHostel(h: Hostel): void {
    this.editingHostel.set(h);
    this.hostelForm = { ...h, imageUrls: [...h.imageUrls] };
    this.hostelError.set('');
    this.hostelSuccess.set('');
    this.showHostelForm.set(true);
  }

  cancelHostelForm(): void {
    this.showHostelForm.set(false);
    this.editingHostel.set(null);
  }

  addImageUrl(): void {
    const url = this.newImageUrl.trim();
    if (url && !this.hostelForm.imageUrls.includes(url)) {
      this.hostelForm.imageUrls = [...this.hostelForm.imageUrls, url];
      this.newImageUrl = '';
    }
  }

  removeImageUrl(url: string): void {
    this.hostelForm.imageUrls = this.hostelForm.imageUrls.filter((u) => u !== url);
  }

  onImageFilesSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return;
    const files = Array.from(input.files);
    this.imageUploadLoading.set(true);
    this.hostelService.uploadImages(files).subscribe({
      next: (res) => {
        this.hostelForm.imageUrls = [...this.hostelForm.imageUrls, ...res.imageUrls];
        this.imageUploadLoading.set(false);
      },
      error: (err) => {
        this.hostelError.set(err?.error?.message ?? 'خطأ في رفع الصور');
        this.imageUploadLoading.set(false);
      },
    });
  }

  saveHostel(): void {
    if (!this.hostelForm.hostelName.trim() || !this.hostelForm.location.trim() || this.hostelForm.capacity <= 0) {
      this.hostelError.set('يرجى تعبئة جميع الحقول المطلوبة');
      return;
    }
    this.hostelSaving.set(true);
    this.hostelError.set('');
    const editing = this.editingHostel();
    const onSuccess = () => {
      this.hostelSuccess.set(editing ? 'تم تحديث السكن بنجاح' : 'تم إضافة السكن بنجاح');
      this.hostelSaving.set(false);
      this.showHostelForm.set(false);
      this.loadHostels();
      setTimeout(() => this.hostelSuccess.set(''), 3000);
    };
    const onError = (err: any) => {
      this.hostelError.set(err?.error?.message ?? 'حدث خطأ');
      this.hostelSaving.set(false);
    };
    if (editing) {
      this.hostelService.update(editing.hostelName, this.hostelForm).subscribe({ next: onSuccess, error: onError });
    } else {
      this.hostelService.create(this.hostelForm).subscribe({ next: onSuccess, error: onError });
    }
  }

  // ====== USERS ======
  loadUsers(): void {
    this.usersLoading.set(true);
    this.userService.getAll().subscribe({
      next: (u) => { this.users.set(u); this.usersLoading.set(false); },
      error: () => this.usersLoading.set(false),
    });
  }

  toggleRole(user: UserDto): void {
    const newRole = user.role === 'Admin' ? 'User' : 'Admin';
    this.userService.updateRole(user.id, newRole).subscribe({
      next: () => {
        this.users.update((prev) => prev.map((u) => u.id === user.id ? { ...u, role: newRole } : u));
        this.usersSuccess.set('تم تحديث الصلاحية');
        setTimeout(() => this.usersSuccess.set(''), 3000);
      },
      error: (err) => this.usersError.set(err?.error?.message ?? 'حدث خطأ'),
    });
  }

  deleteUser(user: UserDto): void {
    if (!confirm(`هل تريد حذف "${user.username}"?`)) return;
    this.userService.delete(user.id).subscribe({
      next: () => {
        this.users.update((prev) => prev.filter((u) => u.id !== user.id));
        this.usersSuccess.set('تم حذف المستخدم');
        setTimeout(() => this.usersSuccess.set(''), 3000);
      },
      error: (err) => this.usersError.set(err?.error?.message ?? 'حدث خطأ'),
    });
  }

  // ====== REQUESTS ======
  loadRequests(): void {
    this.requestsLoading.set(true);
    this.requestService.getAll().subscribe({
      next: (r) => { this.requests.set(r); this.requestsLoading.set(false); },
      error: () => this.requestsLoading.set(false),
    });
  }

  updateRequestStatus(req: HostelRequest, status: 'Approved' | 'Rejected'): void {
    this.requestService.updateStatus(req.id, status).subscribe({
      next: () => {
        this.requests.update((prev) =>
          prev.map((r) => r.id === req.id ? { ...r, status } : r)
        );
        this.requestsSuccess.set(`تم ${status === 'Approved' ? 'قبول' : 'رفض'} الطلب`);
        setTimeout(() => this.requestsSuccess.set(''), 3000);
      },
      error: (err) => this.requestsError.set(err?.error?.message ?? 'حدث خطأ'),
    });
  }

  formatDate(date: string): string {
    return new Date(date).toLocaleDateString('ar-SA', { year: 'numeric', month: 'short', day: 'numeric' });
  }
}
