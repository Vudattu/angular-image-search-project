import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { FlickrService } from '../services/flickr.service';


@Injectable()
export class AppEffects {

  loadImages$ = createEffect(() => this.actions$.pipe(
    ofType('[Image Page] Load Images'),
    mergeMap(() => this.service.search_keyword()
      .pipe(
        map(images => ({ type: '[Images API] Images Loaded Success', payload: images })),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(private actions$: Actions, private service: FlickrService) {}

}
