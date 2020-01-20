import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  title = 'Ng-Grace';
  current_year = new Date().getFullYear();

  ngOnInit() {
  }

}
