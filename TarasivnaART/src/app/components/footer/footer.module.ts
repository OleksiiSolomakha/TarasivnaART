import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { MaterialModule } from 'src/app/material/material.module';
import { MatIconModule } from '@angular/material';



@NgModule({
  declarations: [FooterComponent],
  exports: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatIconModule,
  ],
})
export class FooterModule { }
