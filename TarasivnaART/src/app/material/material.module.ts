import { NgModule } from '@angular/core';
import { MatButtonModule, MatSidenavModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { ScrollingModule } from '@angular/cdk/scrolling';

const materialComponents = [
  MatButtonModule,
  MatGridListModule,
  MatSidenavModule,
  MatIconModule,
  ScrollingModule,
];

@NgModule({
  declarations: [],
  imports: [ materialComponents ],
  exports: [ materialComponents ],
})
export class MaterialModule { }
