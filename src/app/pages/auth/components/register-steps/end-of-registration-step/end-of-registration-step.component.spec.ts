import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndOfRegistrationStepComponent } from './end-of-registration-step.component';

describe('EndOfRegistrationStepComponent', () => {
  let component: EndOfRegistrationStepComponent;
  let fixture: ComponentFixture<EndOfRegistrationStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndOfRegistrationStepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EndOfRegistrationStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
