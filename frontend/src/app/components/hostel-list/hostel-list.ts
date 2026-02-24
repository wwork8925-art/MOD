import { Component, inject, signal, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { HostelService, Hostel } from '../../services/hostel.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-hostel-list',
  imports: [RouterLink],
  templateUrl: './hostel-list.html',
  styleUrl: './hostel-list.css',
})
export class HostelList implements OnInit {
  private hostelService = inject(HostelService);
  auth = inject(AuthService);
  private router = inject(Router);

  hostels = signal<Hostel[]>([]);
  loading = signal(true);
  error = signal('');

  ngOnInit(): void {
    this.hostelService.getAll().subscribe({
      next: (data) => {
        this.hostels.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('تعذر تحميل السكنات. تحقق من تشغيل الخادم');
        this.loading.set(false);
      },
    });
  }

  getOccupancyPercent(hostel: Hostel): number {
    if (!hostel.capacity) return 0;
    return Math.round((hostel.currentResidents / hostel.capacity) * 100);
  }

  getOccupancyClass(hostel: Hostel): string {
    const pct = this.getOccupancyPercent(hostel);
    if (pct >= 90) return 'full';
    if (pct >= 60) return 'medium';
    return 'available';
  }
}
