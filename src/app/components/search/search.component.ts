import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';
import { updateKeyword } from 'src/app/actions/user.actions';
import { FlickrService } from 'src/app/services/flickr.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  showLoader = false;
  timer: any;
  imagesData: any;
  searchKeyword: string;
  images = [];
  keyword: string; 
  constructor(private flickrService: FlickrService, private store: Store<State>) {
    this.store.select(appState => appState.user).subscribe((state) => {
      if(state){
        this.searchKeyword = state.searchKeyword;
        this.imagesData = Array.isArray(state.imageData)  ? state.imageData : [] ;
      }
    });
  }

  onSearchChange(searchValue: string): void {
    if(searchValue.length >= 3){
      this.showLoader = true;
    } else {
      this.showLoader = false;
    }
    if(this.timer){
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(() => {
      if(searchValue.length >= 3){
        this.showLoader = false;
        this.store.dispatch(updateKeyword({searchKeyword: searchValue}));
        this.store.dispatch({ type: '[Image Page] Load Images' });
       }
    }, 2000);
  }

  ngOnInit(): void {
  }

  // onScroll() {
  //   if (this.searchKeyword && this.searchKeyword.length > 0) {
  //     this.flickrService.search_keyword()
  //     .toPromise()
  //     .then(res => {
  //       this.images = this.images.concat(res);
  //     });
  //   }
  // }

}
