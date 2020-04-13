import { Component, Input } from '@angular/core';
import { ThemePalette } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Input()color: ThemePalette;
  title = 'TarasivnaART';
}
