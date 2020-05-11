import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FunctionalModule } from 'src/app/components/functional/functional.module';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import { HomeModule } from '../../components/home/home.module';
import { ContactModule } from '../../components/contact/contact.module';
import { MasterClassModule } from '../../components/master-class/master-class.module';
import { AnnouncementModule } from '../../components/announcement/announcement.module';
import { InfoModule } from '../../components/info/info.module';



@NgModule({
  declarations: [HomePageComponent],
  exports: [HomePageComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FunctionalModule,
    AngularFullpageModule,
    HomeModule,
    ContactModule,
    MasterClassModule,
    AnnouncementModule,
    InfoModule,
  ]
})
export class HomePageModule { }
