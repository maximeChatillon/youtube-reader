import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BookmarksComponent } from '../bookmarks/bookmarks.component';
import { HistoryComponent } from '../history/history.component';
import { VideoViewComponent } from '../video-view/video-view.component';


@Component({
  selector: 'searchBar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  localId : string;

  @Output() idChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }



  onWatchVideo(url: string) {
    let newId = this.youtube_parser(url);
    this.localId = newId;

    this.idChange.emit(newId)
//    addHistory(url);
}


  youtube_parser(url:string){

    var regex = new RegExp(/(?:\?v=)([^&]+)(?:\&)*/);
    var matches = regex.exec(url);

    return matches[1];
  };
}
