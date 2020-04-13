import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MasterClassComponent } from './pages/master-class/master-class.component';
import { AnnouncementComponent } from './pages/announcement/announcement.component';
import { FaqComponent } from './pages/faq/faq.component';
import { ContactComponent } from './pages/contact/contact.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'master-class', component: MasterClassComponent },
  { path: 'announcement', component: AnnouncementComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
