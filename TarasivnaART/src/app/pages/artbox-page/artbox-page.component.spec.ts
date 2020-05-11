import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtboxPageComponent } from './artbox-page.component';

describe('ArtboxPageComponent', () => {
  let component: ArtboxPageComponent;
  let fixture: ComponentFixture<ArtboxPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtboxPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtboxPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
