import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxYoutubePlayerModule } from 'ngx-youtube-player';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { HistoryComponent } from './history/history.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { VideoViewComponent } from './video-view/video-view.component';

@NgModule({
  declarations: [
    AppComponent,
    BookmarksComponent,
    HistoryComponent,
    SearchBarComponent,
    VideoViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxYoutubePlayerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
