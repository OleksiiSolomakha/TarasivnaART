import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/app-routing.module';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public pages = routes;

  constructor() {
    console.log(this.pages);
   }

  ngOnInit() {
  }

}
