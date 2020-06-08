import { Injectable } from '@angular/core';

export interface GalleryItem {
  title: string;
  size: string;
  price: number;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  public galleryItems: GalleryItem[] = [
    { title: 'Бесконечность', size: '1м*3м', price: 4500, url: '../../../assets/gallery/1-infinity.jpg' },
    { title: 'Любовь', size: '50*60', price: 2000, url: '../../../assets/gallery/2-love.jpg' },
    { title: 'Море слышит', size: '1м*1м', price: 2000, url: '../../../assets/gallery/3-sea.jpg' },
    { title: 'Фламинго исполняющий желания', size: '120*80', price: 1800, url: '../../../assets/gallery/4-flamingo.jpg' },
    { title: 'Цветы', size: '90*90', price: 1800, url: '../../../assets/gallery/5-flovers.jpg' },
    { title: 'Подсолнухи Ван Гога', size: '35*45', price: 700, url: '../../../assets/gallery/6-van-goh.jpg' },
    { title: 'Желание', size: '70*80', price: 1500, url: '../../../assets/gallery/7-desire.jpg' },
  ];

  constructor() { }

  public getGalleryItems(): GalleryItem[] {
    return this.galleryItems;
  }
}
