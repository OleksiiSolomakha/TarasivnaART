import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqPageComponent } from './faq-page.component';
import { FunctionalModule } from '../../components/functional/functional.module';



@NgModule({
  declarations: [FaqPageComponent],
  exports: [FaqPageComponent],
  imports: [
    CommonModule,
    FunctionalModule,
  ]
})
export class FaqPageModule { }
