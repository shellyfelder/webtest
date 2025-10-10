import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'war',
    loadComponent: () => import('./pages/other/war/war.component').then(m => m.War)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];