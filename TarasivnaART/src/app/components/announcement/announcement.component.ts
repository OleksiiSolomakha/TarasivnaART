import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent implements OnInit {

  static title = 'Анонси';

  public announcements = [
    { date: '24.04', time: '12:00', description: 'рідкий акрил, алкогольні чорнила' },
    { date: '25.04', time: '11:00', description: 'розпис футболки' },
    { date: '27.04', time: '11:00', description: 'акварель' },
    { date: '29.04', time: '11:00', description: 'епоксидна смола' },
    { date: '03.05', time: '11:00', description: 'петрі арт' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
