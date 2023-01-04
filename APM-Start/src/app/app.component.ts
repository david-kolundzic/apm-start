import { Component, OnInit } from '@angular/core';
import { Observable, range, map, filter } from "rxjs";

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  source$: Observable<number> = range(0, 10);
  ngOnInit(): void {
    console.log("Ovdje dolazi test za observable");
    this.source$.pipe(
      map(x=> x*3),
      filter(x=> x%2 == 0)
    ).subscribe(x => console.log(x)
    )
  }
  title = 'Angular: Getting Started';
}
