import { createAction, props } from '@ngrx/store';
import { IManga } from '../../interface/manga.interface';

export const loadManga = createAction('[Manga] Load Manga List');
export const loadMangaSuccess = createAction(
  '[Manga] Load Manga List Success',
  props<{ mangaList: IManga[] }>()
);
export const addManga = createAction(
  '[Manga] Add Manga',
  props<{ manga: IManga }>()
);

export const updateManga = createAction(
  '[Manga] update Manga',
  props<{ mangaNo: string, mangaUpdate: IManga }>()
);