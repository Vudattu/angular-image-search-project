import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { MockStore } from '@ngrx/store/testing';
import { State } from 'src/app/reducers';

import { FavoriteComponent } from './favorite.component';

describe('FavoriteComponent', () => {
  let component: FavoriteComponent;
  let fixture: ComponentFixture<FavoriteComponent>;
  let store: Store<State>;
  let store1: MockStore;
  const initialState = { books: ['Book 1', 'Book 2', 'Book 3'] };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteComponent ],
      providers: [
        Store
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = fixture.debugElement.injector.get(Store);
    // store = getMockStore({initialState});
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

//   it(‘store to be defined’, async(() => { 
//     expect(store).toBeDefined();
// })),

// it(‘data is there in component’, async(() => {
//    expect(component.data).toBeDefined();
// })),

});
