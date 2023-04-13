import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordThemeComponent } from './keyword-theme.component';

describe('KeywordThemeComponent', () => {
  let component: KeywordThemeComponent;
  let fixture: ComponentFixture<KeywordThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeywordThemeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeywordThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
