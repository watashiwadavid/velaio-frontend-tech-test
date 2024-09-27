import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('@velaio/ui/layouts').then((ly) => ly.BaseLayoutComponent),
    // children: [{ path: 'tasks',  }, { path: '**', redirectTo: 'tasks' }],
  },
];
