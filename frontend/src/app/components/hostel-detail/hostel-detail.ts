import { Component, inject, signal, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HostelService, Hostel } from '../../services/hostel.service';
import { CommentService, Comment } from '../../services/comment.service';
import { RequestService } from '../../services/request.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-hostel-detail',
  imports: [FormsModule, RouterLink],
  templateUrl: './hostel-detail.html',
  styleUrl: './hostel-detail.css',
})
export class HostelDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private hostelService = inject(HostelService);
  private commentService = inject(CommentService);
  private requestService = inject(RequestService);
  auth = inject(AuthService);

  hostel = signal<Hostel | null>(null);
  comments = signal<Comment[]>([]);
  loading = signal(true);
  error = signal('');

  selectedImageIndex = signal(0);
  newComment = '';
  commentLoading = signal(false);
  commentError = signal('');
  commentSuccess = signal('');

  requestLoading = signal(false);
  requestError = signal('');
  requestSuccess = signal('');

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name')!;
    this.hostelService.getByName(name).subscribe({
      next: (h) => {
        this.hostel.set(h);
        this.loading.set(false);
        this.loadComments(name);
      },
      error: () => {
        this.error.set('تعذر تحميل بيانات السكن');
        this.loading.set(false);
      },
    });
  }

  loadComments(hostelName: string): void {
    this.commentService.getByHostel(hostelName).subscribe({
      next: (c) => this.comments.set(c),
    });
  }

  submitComment(): void {
    if (!this.newComment.trim()) return;
    this.commentLoading.set(true);
    this.commentError.set('');
    this.commentSuccess.set('');
    const hostelName = this.hostel()!.hostelName;
    this.commentService.create(this.newComment.trim(), hostelName).subscribe({
      next: (comment) => {
        this.comments.update((prev) => [comment, ...prev]);
        this.newComment = '';
        this.commentSuccess.set('تم إضافة التعليق بنجاح');
        this.commentLoading.set(false);
        setTimeout(() => this.commentSuccess.set(''), 3000);
      },
      error: (err) => {
        this.commentError.set(err?.error?.message ?? 'حدث خطأ أثناء إضافة التعليق');
        this.commentLoading.set(false);
      },
    });
  }

  requestRoom(): void {
    const hostelName = this.hostel()!.hostelName;
    this.requestLoading.set(true);
    this.requestError.set('');
    this.requestSuccess.set('');
    this.requestService.create(hostelName).subscribe({
      next: () => {
        this.requestSuccess.set('تم إرسال طلبك بنجاح. سيتم مراجعته من الإدارة');
        this.requestLoading.set(false);
      },
      error: (err) => {
        this.requestError.set(err?.error?.message ?? 'حدث خطأ أثناء إرسال الطلب');
        this.requestLoading.set(false);
      },
    });
  }

  getOccupancyPercent(): number {
    const h = this.hostel();
    if (!h || !h.capacity) return 0;
    return Math.min(100, Math.round((h.currentResidents / h.capacity) * 100));
  }

  formatDate(date: string): string {
    return new Date(date).toLocaleDateString('ar-SA', {
      year: 'numeric', month: 'short', day: 'numeric',
    });
  }
}
