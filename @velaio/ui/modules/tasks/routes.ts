import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./list').then((c) => c.TasksListPage),
  },
  {
    path: 'create',
    loadComponent: () => import('./form').then((c) => c.TaskFormPage),
  },
  {
    path: 'edit/:id',
    loadComponent: () => import('./form').then((c) => c.TaskFormPage),
  },
];
