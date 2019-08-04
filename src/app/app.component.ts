import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'youtube-reader';
  id : string;
  show = false;

  setId(id:string) {

    this.id = id;
    this.show = true;
  }

}
