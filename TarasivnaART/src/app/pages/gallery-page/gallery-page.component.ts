import { Component, OnInit } from '@angular/core';
import { GalleryItem, GalleryService } from 'src/app/services/gallery/gallery.service';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.scss']
})
export class GalleryPageComponent implements OnInit {

  static title = 'Галерея';
  public items: GalleryItem[];
  public config: any;
  public fullpageApi: any;

  constructor(private galleryService: GalleryService) { }

  ngOnInit() {
    this.items = this.galleryService.getGalleryItems();
    this.config = { licenseKey: 'YOUR LICENSE KEY HERE' };
  }

  public getRef(fullPageRef) {
    this.fullpageApi = fullPageRef;
  }

}
