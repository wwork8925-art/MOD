import { Routes } from '@angular/router';
import { adminGuard } from './guards/admin-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'hostels', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () => import('./components/login/login').then((m) => m.Login),
  },
  {
    path: 'register',
    loadComponent: () => import('./components/register/register').then((m) => m.Register),
  },
  {
    path: 'hostels',
    loadComponent: () => import('./components/hostel-list/hostel-list').then((m) => m.HostelList),
  },
  {
    path: 'hostels/:name',
    loadComponent: () =>
      import('./components/hostel-detail/hostel-detail').then((m) => m.HostelDetail),
  },

  {
    path: 'dash', loadComponent:() => import('./components/dash/dash').then((m) => m.Dash)

  },
  {
    path: 'admin',
    loadComponent: () => import('./components/admin/admin').then((m) => m.Admin),
    canActivate: [adminGuard],
  },
  { path: '**', redirectTo: 'hostels' },
];
