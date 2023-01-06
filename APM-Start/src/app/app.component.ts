import { Component, OnInit } from '@angular/core';
import { Observable, range, map, filter } from "rxjs";

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pageTitle = 'Acme Product Management';
}
