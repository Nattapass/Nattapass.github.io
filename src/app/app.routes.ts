import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { MangaListComponent } from './manga/manga-list/manga-list.component';
import { ModelKitListComponent } from './model-kit/model-kit-list/model-kit-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'model-kit',
    component: ModelKitListComponent,
  },
  {
    path: 'manga',
    component: MangaListComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  { path: '404', component: DashboardComponent },
  { path: '**', component: DashboardComponent }
];
