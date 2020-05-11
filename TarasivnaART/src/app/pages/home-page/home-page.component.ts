import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

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
