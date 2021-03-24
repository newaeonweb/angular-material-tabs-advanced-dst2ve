import { EventEmitter, Output } from "@angular/core";
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-album",
  templateUrl: "./album.component.html",
  styleUrls: ["./album.component.css"]
})
export class AlbumComponent implements OnInit {
  @Input() albums: any;
  @Output() loadTracks = new EventEmitter();

  constructor() {}

  ngOnInit() {
    console.log(this.albums);
  }

  loadTracksByAlbumId(amgArtistId: number, collectionName: string ) {
    const album = {
      amgArtistId, 
      collectionName
    }
    this.loadTracks.emit(album);
  }
}
