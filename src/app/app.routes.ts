import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { Layout } from './components/layout/layout';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [{ path: '', component: HomePage }],
  },
];
