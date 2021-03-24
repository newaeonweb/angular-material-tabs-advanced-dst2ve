import {
  HttpClient,
  HttpErrorResponse,
  HttpParams
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";

export interface IBand {
  id?: number;
  name?: string;
  albums?: string[];
}

@Injectable({
  providedIn: "root"
})
export class MusicService {
  constructor(private http: HttpClient) {}

  getAlbumsBandById(amgArtistId: number): Observable<IBand[]> {
    const params = new HttpParams()
      .set("amgArtistId", amgArtistId.toString())
      .set("entity", "album");

    return this.http
      .get<IBand[]>(`https://itunes.apple.com/lookup`, { params })
      .pipe(catchError(error => this.handleError(error)));
  }

  getSongsByBandId(amgArtistId: number): Observable<IBand[]> {
    const params = new HttpParams()
      .set("amgArtistId", amgArtistId.toString())
      .set("entity", "song");

    return this.http
      .get<IBand[]>(`https://itunes.apple.com/lookup`, { params })
      .pipe(catchError(error => this.handleError(error)));
  }

  getBandByName(
    name: string,
    entity = "allArtist",
    attribute = "allArtistTerm",
    limit = 20,
    media = "music"
  ): Observable<IBand[]> {
    return this.http
      .get<IBand[]>(
        `https://itunes.apple.com/search?term=${name}&entity=${entity}&attribute=${attribute}&limit=${limit}`
      )
      .pipe(catchError(error => this.handleError(error)));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error("An error occurred:", error.error.message);
    } else {
      console.error("An error occurred:", error.message);
      return throwError(error);
    }
    return throwError(
      "Ohps something wrong happen here; please try again later."
    );
  }
}

// `https://itunes.apple.com/search?term=${name}&entity=${entity}&attribute=${attribute}`
