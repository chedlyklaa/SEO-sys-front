import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BacklinksComponent } from './backlinks.component';

describe('BacklinksComponent', () => {
  let component: BacklinksComponent;
  let fixture: ComponentFixture<BacklinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BacklinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BacklinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
