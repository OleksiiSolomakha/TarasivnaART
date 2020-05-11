import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FunctionalModule } from './components/functional/functional.module';
import { NavModule } from './components/nav/nav.module';
import { FaqPageModule } from './pages/faq-page/faq-page.module';
import { HomePageModule } from './pages/home-page/home-page.module';
import { CertificatePageModule } from './pages/certificate-page/certificate-page.module';
import { ArtboxPageModule } from './pages/artbox-page/artbox-page.module';
import { GalleryPageModule } from './pages/gallery-page/gallery-page.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HomePageModule,
    FunctionalModule,
    NavModule,
    CertificatePageModule,
    ArtboxPageModule,
    FaqPageModule,
    GalleryPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
