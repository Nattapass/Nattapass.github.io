import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError, tap, mergeMap, take } from 'rxjs/operators';
import { MangaService } from '../../service/manga.service';
import { loadManga, loadMangaSuccess } from '../action/manga.action';

@Injectable()
export class MangaEffects {

    loadMovies$ = createEffect(() => this.actions$.pipe(
        ofType(loadManga),
        mergeMap(() => this.mangaService.getMangaList()
            .pipe(
                tap((data) => {
                    console.log('data is ===>', data);
                }),
                map(mangas => (loadMangaSuccess({ mangaList: mangas }))),
                catchError(() => EMPTY)
            )), take(1)
    )
    );

    constructor(
        private actions$: Actions,
        private mangaService: MangaService
    ) { }
}