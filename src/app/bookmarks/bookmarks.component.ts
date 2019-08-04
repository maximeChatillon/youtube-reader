import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'Bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})


export class BookmarksComponent implements OnInit {

  url : string;
  bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  seeBookmarks = false;

  @Input() bookmarkId: string;

  @Output() idChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  addBookmark(bookmarkId :string){
    if(this.bookmarks === null) {
      this.bookmarks = [];
    }
    if (this.bookmarks.indexOf(bookmarkId) === -1 && bookmarkId.length ===11){
      this.bookmarks.push(bookmarkId);
      localStorage.setItem('bookmarks', JSON.stringify(this.bookmarks));
      console.log('Bookmarks added in localStorage');
      console.log(JSON.parse(localStorage.getItem('bookmarks')));
    }

  }

  changeViewBookMark() {
    if (this.seeBookmarks === true){
      this.seeBookmarks = false;
    }
    else {
      this.seeBookmarks = true;
    }
  }

  getBookmarks(){
    var localBookmarks = localStorage.getItem('bookmarks');
    if (localBookmarks === null){
      return [];
    }
    else {
      return JSON.parse(localBookmarks);

    }

  }

  setId(id: string) {
    this.idChange.emit(id)
    }





}
