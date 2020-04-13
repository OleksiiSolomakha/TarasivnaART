import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { FunctionalComponent } from './functional.component';
import { NavModule } from '../nav/nav.module';



@NgModule({
  declarations: [
    FunctionalComponent,
  ],
  exports: [
    FunctionalComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NavModule,
  ]
})
export class FunctionalModule { }
