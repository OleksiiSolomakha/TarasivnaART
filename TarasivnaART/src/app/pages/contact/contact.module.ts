import { FunctionalModule } from '../../components/functional/functional.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { ContactComponent } from './contact.component';



@NgModule({
  declarations: [
    ContactComponent,
  ],
  exports: [
    ContactComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FunctionalModule,
  ]
})
export class ContactModule { }
