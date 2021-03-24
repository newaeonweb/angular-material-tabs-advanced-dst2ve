import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-track",
  templateUrl: "./track.component.html",
  styleUrls: ["./track.component.css"]
})
export class TrackComponent implements OnInit {
  @Input() tracks: any[];
  @Input() album: string;
  constructor() {}

  ngOnInit() {
    this.tracks = this.multiFilter(this.tracks["results"], {
      collectionName: this.album,
      trackName: this.tracks["results"][0]
    });
    console.log(this.tracks);
  }

  multiFilter = (arr: Object[], filters: Object) => {
    const filterKeys = Object.keys(filters);
    return arr.filter(eachObj => {
      return filterKeys.every(eachKey => {
        if (!filters[eachKey].length) {
          return true; // passing an empty filter means that filter is ignored.
        }
        return filters[eachKey].includes(eachObj[eachKey]);
      });
    });
  };
}
