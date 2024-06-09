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
import { modelKitReducer } from './model-kit/ngrx/reducer/model-kit.reducer';
import { ModelKitEffects } from './model-kit/ngrx/effect/model-kit.effect';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideHttpClient(withFetch()),
  provideStore(),
  provideState({ name: 'manga', reducer: mangaReducer }),
  provideState({ name: 'model-kit', reducer: modelKitReducer }),
  provideEffects(MangaEffects),
  provideEffects(ModelKitEffects),
  provideStoreDevtools()
  ]
};
