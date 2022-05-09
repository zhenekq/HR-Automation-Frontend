import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewCandidateModalComponent } from './create-new-candidate-modal.component';

describe('CreateNewCandidateModalComponent', () => {
  let component: CreateNewCandidateModalComponent;
  let fixture: ComponentFixture<CreateNewCandidateModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewCandidateModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewCandidateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
