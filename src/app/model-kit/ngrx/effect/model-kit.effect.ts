import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, catchError, tap, mergeMap, take } from 'rxjs/operators';
import { loadModelKit, loadModelKitSuccess } from '../action/model-kit.action';
import { ModelKitService } from '../../service/model-kit.service';

@Injectable()
export class ModelKitEffects {

    loadMovies$ = createEffect(() => this.actions$.pipe(
        ofType(loadModelKit),
        mergeMap(() => this.modelkitService.getModelKitList()
            .pipe(
                tap((data) => {
                    // console.log('data is ===>', data);
                }),
                map(data => (loadModelKitSuccess({ modelKitList: data }))),
                catchError(() => EMPTY)
            )), take(1)
    )
    );

    constructor(
        private actions$: Actions,
        private modelkitService: ModelKitService
    ) { }
}