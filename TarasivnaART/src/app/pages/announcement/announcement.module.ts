import { FunctionalModule } from '../../components/functional/functional.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { AnnouncementComponent } from './announcement.component';



@NgModule({
  declarations: [
    AnnouncementComponent,
  ],
  exports: [
    AnnouncementComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FunctionalModule,
  ]
})
export class AnnouncementModule { }
