import { createReducer, on } from '@ngrx/store';
import { addModelKit, loadModelKitSuccess } from '../action/model-kit.action';
import { IModelKit } from '../../interface/manga.interface';

export const initialState: IModelKit[] = [];

export const modelKitReducer = createReducer(
    initialState,
    on(loadModelKitSuccess, (_state, { modelKitList }) =>
        modelKitList
    ), on(addModelKit, (state, { modelKit }) =>
        [...state, modelKit]
    ),
);