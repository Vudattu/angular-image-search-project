import { Component, OnInit, Input } from '@angular/core';
import { FavoriteList } from 'src/app/interfaces';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { createList, addFavorite } from 'src/app/actions/user.actions';
import { ImageData } from '../../interfaces';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {
  @Input() imageData: ImageData | any;

  favoriteListNames: Array<FavoriteList>;

  constructor(private store: Store<State>, public dialog: MatDialog) {
    store.select(appState => appState.user.favoriteList).subscribe(data => {
      this.favoriteListNames = data;
    });
  }

  ngOnInit(): void {
  }

  
  openDialog() {
    let dialogRef = this.dialog.open(DialogComponent, {
      height: '300px',
      width: '300px',
      data: { imageUrl: this.imageData.url }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  goToLink(url: string){
    window.open(url, "_blank");
  }
}
