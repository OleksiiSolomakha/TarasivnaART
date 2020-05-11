import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  static title = 'Головна';

  public config: any;
  public fullpageApi: any;

  constructor() {

    this.config = {
      licenseKey: 'YOUR LICENSE KEY HERE',
    };
  }

  ngOnInit() {
  }

  public getRef(fullPageRef) {
    this.fullpageApi = fullPageRef;
  }

}
