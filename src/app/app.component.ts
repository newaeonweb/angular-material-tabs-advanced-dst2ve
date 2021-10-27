import { EventEmitter, Input } from '@angular/core';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Band, MusicService } from './services/music.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @Input() loadAlbums = new EventEmitter();
  currentTabIndex = 0;
  bands$: Observable<Band[]>;
  albums$: Observable<any>; // interface not implemented yet
  tracks$: Observable<any>; // interface not implemented yet
  isLoadingInProgress$ = new BehaviorSubject<boolean>(false);
  album: string;
  name: string;

  constructor(private musicService: MusicService) {}

  ngOnInit() {}

  ngAfterViewInit() {}

  goToTabIndex(index: number) {
    this.currentTabIndex = index;
  }

  searchByName(name: string) {
    this.isLoadingInProgress$.next(true);
    this.bands$ = this.musicService
      .getBandByName(name)
      .pipe(finalize(() => this.isLoadingInProgress$.next(false)));
    this.currentTabIndex = 0;
  }

  getAlbums(id: number) {
    this.isLoadingInProgress$.next(true);
    this.albums$ = this.musicService
      .getAlbumsBandById(id)
      .pipe(finalize(() => this.isLoadingInProgress$.next(false)));
    this.goToTabIndex(1);
  }

  getTracks(album) {
    this.album = album.collectionName;

    this.isLoadingInProgress$.next(true);
    this.tracks$ = this.musicService
      .getSongsByBandId(album.amgArtistId)
      .pipe(finalize(() => this.isLoadingInProgress$.next(false)));
    this.goToTabIndex(2);
  }

  tabChanged(tabChangeEvent: number) {
    console.log('tab selected: ' + tabChangeEvent);
  }
}
