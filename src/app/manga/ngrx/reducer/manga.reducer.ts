import { createReducer, on } from '@ngrx/store';
import { loadMangaSuccess } from '../action/manga.action';
import { IManga } from '../../interface/manga.interface';

export const initialState: IManga[] = [];

export const mangaReducer = createReducer(
    initialState,
    on(loadMangaSuccess, (state, { mangaList }) =>
        mangaList
    )
);