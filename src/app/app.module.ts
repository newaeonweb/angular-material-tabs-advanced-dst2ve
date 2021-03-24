import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

import { MatButtonModule } from "@angular/material/button";
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";

import { AppComponent } from "./app.component";
import { BandComponent } from "./modules/band/band.component";
import { FormsModule } from "@angular/forms";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { AlbumComponent } from "./modules/album/album.component";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { LoaderComponent } from './modules/loader/loader.component';
import { TrackOrderPipe } from './track-order.pipe';
import { TrackComponent } from './modules/track/track.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatTabsModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatProgressBarModule
  ],
  declarations: [AppComponent, BandComponent, AlbumComponent, LoaderComponent, TrackOrderPipe, TrackComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}
