import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificatePageComponent } from './certificate-page.component';
import { FunctionalModule } from '../../components/functional/functional.module';



@NgModule({
  declarations: [CertificatePageComponent],
  exports: [CertificatePageComponent],
  imports: [
    CommonModule,
    FunctionalModule,
  ]
})
export class CertificatePageModule { }
