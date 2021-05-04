import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { StoreModule } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FlickrService } from '../services/flickr.service';

import { AppEffects } from './app.effects';

describe('AppEffects', () => {
  let actions$: Observable<any>;
  let effects: AppEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
        StoreModule.forRoot({})
      ],
      providers: [
        AppEffects,
        FlickrService,
        provideMockActions(() => actions$),
        // mock the Store and the selectors that are used within the Effect
    // provideMockStore({
    //   selectors: [
    //     {
    //       selector: selectCustomers,
    //       value: {
    //         Bob: { name: 'Bob' },
    //       },
    //     },
    //   ],
    // }),
      ]
    });
    // '[Image Page] Load Images'

    effects = TestBed.inject(AppEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
