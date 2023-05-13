import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSitemapComponent } from './manage-sitemap.component';

describe('ManageSitemapComponent', () => {
  let component: ManageSitemapComponent;
  let fixture: ComponentFixture<ManageSitemapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageSitemapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageSitemapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
