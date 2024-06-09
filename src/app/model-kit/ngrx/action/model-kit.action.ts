import { createAction, props } from '@ngrx/store';
import { IModelKit } from '../../interface/manga.interface';

export const loadModelKit = createAction('[ModelKit] Load ModelKit List');
export const loadModelKitSuccess = createAction(
  '[ModelKit] Load Model kit List Success',
  props<{ modelKitList: IModelKit[] }>()
);
export const addModelKit = createAction(
  '[ModelKit] Add ModelKit',
  props<{ modelKit: IModelKit }>()
);