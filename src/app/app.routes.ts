import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'war',
    loadComponent: () => import('./pages/other/war/war.component').then(m => m.War)
  },
  {
    path: 'roger',
    loadComponent: () => import('./pages/other/roger/roger.component').then(m => m.Roger)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];