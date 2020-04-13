import { FunctionalModule } from './../../components/functional/functional.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MaterialModule } from 'src/app/material/material.module';



@NgModule({
  declarations: [
    HomeComponent,
  ],
  exports: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FunctionalModule,
  ]
})
export class HomeModule { }
