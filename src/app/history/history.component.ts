import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'History',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],

  }
)


export class HistoryComponent implements OnChanges {

  histories = JSON.parse(localStorage.getItem('histories'));


  @Input() historyId: string;

  @Output() idChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  addHistory(id:string) {
    this.histories.push(id);
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    if( this.histories ===null){
      this.histories = [];
    }
    for (let propName in changes) {
      let changedProp = changes[propName];
      let to = JSON.stringify(changedProp.currentValue);
      let sub = `${to}`.substring(1,12);
      if (sub.length === 11){
        this.histories.push(sub);
        localStorage.setItem('histories', JSON.stringify(this.histories));
        }
      }
    }

    setId(id: string) {
      this.idChange.emit(id)
      }


}
