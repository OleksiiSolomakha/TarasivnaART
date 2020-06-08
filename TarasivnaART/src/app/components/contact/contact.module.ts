import { FunctionalModule } from '../functional/functional.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { ContactComponent } from './contact.component';
import { FooterModule } from '../footer/footer.module';



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
    FooterModule,
  ]
})
export class ContactModule { }
