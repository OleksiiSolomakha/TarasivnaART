import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqPageComponent } from './faq-page.component';
import { FunctionalModule } from '../../components/functional/functional.module';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';



@NgModule({
  declarations: [FaqPageComponent],
  exports: [FaqPageComponent],
  imports: [
    CommonModule,
    FunctionalModule,
    AngularFullpageModule,
  ]
})
export class FaqPageModule { }
