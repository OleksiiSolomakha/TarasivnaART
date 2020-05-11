import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FaqPageComponent } from './pages/faq-page/faq-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ArtboxPageComponent } from './pages/artbox-page/artbox-page.component';
import { CertificatePageComponent } from './pages/certificate-page/certificate-page.component';
import { GalleryPageComponent } from './pages/gallery-page/gallery-page.component';


export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'gallery', component: GalleryPageComponent },
  { path: 'artbox', component: ArtboxPageComponent },
  { path: 'certificate', component: CertificatePageComponent },
  { path: 'faq', component: FaqPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
