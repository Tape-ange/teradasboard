import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationAuthenticityStepComponent } from './confirmation-authenticity-step.component';

describe('ConfirmationAuthenticityStepComponent', () => {
  let component: ConfirmationAuthenticityStepComponent;
  let fixture: ComponentFixture<ConfirmationAuthenticityStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmationAuthenticityStepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmationAuthenticityStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
