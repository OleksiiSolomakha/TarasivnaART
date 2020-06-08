import { Component, OnInit } from '@angular/core';
import { MasterClassService, MasterClassItem } from 'src/app/services/master-class/master-class.service';

@Component({
  selector: 'app-master-class',
  templateUrl: './master-class.component.html',
  styleUrls: ['./master-class.component.scss']
})
export class MasterClassComponent implements OnInit {

  static title = 'Майстеркласи';
  public masterClasses: MasterClassItem[];

  constructor(private masterClassService: MasterClassService) { }

  ngOnInit() {
    this.masterClasses = this.masterClassService.getMasterClassItems();
  }

  public onClick(masterclass) {
    console.log(masterclass);
  }
}
