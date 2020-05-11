import { FunctionalModule } from '../functional/functional.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { MasterClassComponent } from './master-class.component';



@NgModule({
  declarations: [
    MasterClassComponent,
  ],
  exports: [
    MasterClassComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FunctionalModule,
  ]
})
export class MasterClassModule { }
