import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtboxPageComponent } from './artbox-page.component';
import { FunctionalModule } from '../../components/functional/functional.module';



@NgModule({
  declarations: [ArtboxPageComponent],
  exports: [ArtboxPageComponent],
  imports: [
    CommonModule,
    FunctionalModule,
  ]
})
export class ArtboxPageModule { }
