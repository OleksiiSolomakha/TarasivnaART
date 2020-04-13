import { FunctionalModule } from './../../components/functional/functional.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { FaqComponent } from './faq.component';



@NgModule({
  declarations: [
    FaqComponent,
  ],
  exports: [
    FaqComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FunctionalModule,
  ]
})
export class FaqModule { }
