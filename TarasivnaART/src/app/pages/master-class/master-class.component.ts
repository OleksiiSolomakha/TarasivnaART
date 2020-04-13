import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master-class',
  templateUrl: './master-class.component.html',
  styleUrls: ['./master-class.component.scss']
})
export class MasterClassComponent implements OnInit {

  static title = 'Майстеркласи';

  constructor() { }

  ngOnInit() {
  }

}
