import { createReducer, on } from '@ngrx/store';
import { addManga, loadMangaSuccess, updateManga } from '../action/manga.action';
import { IManga } from '../../interface/manga.interface';

export const initialState: IManga[] = [];

export const mangaReducer = createReducer(
    initialState,
    on(loadMangaSuccess, (_state, { mangaList }) =>
        mangaList
    ), on(addManga, (state, { manga }) =>
        [...state, manga]
    ), on(updateManga, (state, { mangaNo, mangaUpdate }) => {
        const index = state.findIndex(m => m.no === mangaNo);
        if (index !== -1) {
            return [
                ...state.slice(0, index),
                { ...state[index], ...mangaUpdate },
                ...state.slice(index + 1)
            ];
        }
        return state;
    })
);