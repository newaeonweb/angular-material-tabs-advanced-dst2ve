import { EventEmitter, Output } from "@angular/core";
import { Component, Input, OnInit } from "@angular/core";
import { IBand } from "../../services/music.service";

@Component({
  selector: "app-band",
  templateUrl: "./band.component.html",
  styleUrls: ["./band.component.css"]
})
export class BandComponent implements OnInit {
  @Input() data: any;
  @Output() loadAlbums = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  loadAlbumsById(id: number) {
    this.loadAlbums.emit(id);
  }
}

export class Band {
  artistName: string;
  collectionName: string;
  releaseDate: string;
  collectionId: number;
  artworkUrl100: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

}



