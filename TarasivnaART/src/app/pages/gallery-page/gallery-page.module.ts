import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryPageComponent } from './gallery-page.component';
import { FunctionalModule } from '../../components/functional/functional.module';



@NgModule({
  declarations: [GalleryPageComponent],
  exports: [GalleryPageComponent],
  imports: [
    CommonModule,
    FunctionalModule,
  ]
})
export class GalleryPageModule { }
