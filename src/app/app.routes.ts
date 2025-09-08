import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { Layout } from './components/layout/layout';
import { SlimePage } from './pages/slime-page/slime-page';
import { WorldPage } from './pages/locations/world-page/world-page';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: '', component: HomePage },
      { path: 'slime/:slug', component: SlimePage },
      { path: 'world/:slug', component: WorldPage },
    ],
  },
];
