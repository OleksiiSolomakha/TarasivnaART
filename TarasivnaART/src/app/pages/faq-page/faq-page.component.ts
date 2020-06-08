import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq-page',
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.scss']
})
export class FaqPageComponent implements OnInit {

  static title = 'Популярні Запитання';
  public config: any;
  public fullpageApi: any;

  constructor() { }

  ngOnInit() {
    this.config = { licenseKey: 'YOUR LICENSE KEY HERE' };
  }

  public getRef(fullPageRef) {
    this.fullpageApi = fullPageRef;
  }

}
