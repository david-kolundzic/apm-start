import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {

  @Input() rating:number=0;
  @Output() onRatingClicked: EventEmitter<string> = new EventEmitter<string>();

  cropWidth=75;
  //rating=4;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Changes");
    console.log(changes);
    
    
    this.cropWidth = this.rating * 75/5;
  }

  ngOnInit(): void {
  }
  
  onClick():void{
    var message =`The rating ${this.rating} was clicked!` 
    // console.log(message);
    this.onRatingClicked.emit(message);
  }

}
