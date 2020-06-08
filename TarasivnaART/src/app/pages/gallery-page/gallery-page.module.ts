import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryPageComponent } from './gallery-page.component';
import { FunctionalModule } from '../../components/functional/functional.module';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';



@NgModule({
  declarations: [GalleryPageComponent],
  exports: [GalleryPageComponent],
  imports: [
    CommonModule,
    FunctionalModule,
    AngularFullpageModule,
  ]
})
export class GalleryPageModule { }
