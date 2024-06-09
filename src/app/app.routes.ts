import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { MangaListComponent } from './manga/manga-list/manga-list.component';
import { ModelKitListComponent } from './model-kit/model-kit-list/model-kit-list.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    redirectTo: 'manga',
  },
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
];
