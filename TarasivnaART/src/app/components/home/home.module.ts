import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FunctionalModule } from '../functional/functional.module';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';


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
    AngularFullpageModule,
  ]
})
export class HomeModule { }
