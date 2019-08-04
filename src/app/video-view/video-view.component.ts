import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'videoView',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.css']
})

export class VideoViewComponent implements OnInit {

  @Input() videoId:string;

  playerVars = {
    cc_lang_pref: 'en'
  }

  private player;
  private ytEvent;

  constructor() {

  }

  ngOnInit() {
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    for (let propName in changes) {
      let changedProp = changes[propName];
      let to = JSON.stringify(changedProp.currentValue);
      let sub = `${to}`.substring(1,12);
      if (sub.length === 11){
        this.videoId=sub;
        this.player.loadVideoById(this.videoId);
        }
      }
    }

  onStateChange(event) {
    this.ytEvent = event.data;
  }
  savePlayer(player) {
    this.player = player;
  }

  playVideo() {
    this.player.playVideo();
  }

  pauseVideo() {
    this.player.pauseVideo();
  }
}
