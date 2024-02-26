import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { provideState, provideStore } from '@ngrx/store';
import { MangaEffects } from './manga/ngrx/effect/manga.effect';
import { mangaReducer } from './manga/ngrx/reducer/manga.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideHttpClient(withFetch()),
  provideStore(),
  provideState({ name: 'manga', reducer: mangaReducer }),
  provideEffects(MangaEffects),
  provideStoreDevtools()
  ]
};
