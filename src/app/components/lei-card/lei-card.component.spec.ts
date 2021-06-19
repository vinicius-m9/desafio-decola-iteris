import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeiCardComponent } from './lei-card.component';

describe('LeiCardComponent', () => {
  let component: LeiCardComponent;
  let fixture: ComponentFixture<LeiCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeiCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeiCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
