import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artbox-page',
  templateUrl: './artbox-page.component.html',
  styleUrls: ['./artbox-page.component.scss']
})
export class ArtboxPageComponent implements OnInit {

  static title = 'ArtBox';
  public artBoxes = [];

  constructor() { }

  ngOnInit() {
  }

}
