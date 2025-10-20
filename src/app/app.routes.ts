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
    path: 'prompt',
    loadComponent: () => import('./pages/other/prompt/prompt.component').then(m => m.Prompt)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];