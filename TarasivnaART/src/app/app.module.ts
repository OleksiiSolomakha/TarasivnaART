import { MasterClassModule } from './pages/master-class/master-class.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HomeModule } from './pages/home/home.module';
import { FunctionalModule } from './components/functional/functional.module';
import { NavModule } from './components/nav/nav.module';
import { AnnouncementModule } from './pages/announcement/announcement.module';
import { ContactModule } from './pages/contact/contact.module';
import { FaqModule } from './pages/faq/home.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HomeModule,
    FunctionalModule,
    NavModule,
    AnnouncementModule,
    ContactModule,
    FaqModule,
    MasterClassModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
