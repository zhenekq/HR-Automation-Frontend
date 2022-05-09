import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateSideMenuComponent } from './candidate-side-menu.component';

describe('CandidateSideMenuComponent', () => {
  let component: CandidateSideMenuComponent;
  let fixture: ComponentFixture<CandidateSideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateSideMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
