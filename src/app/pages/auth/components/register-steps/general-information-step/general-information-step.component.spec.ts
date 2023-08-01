import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralInformationStepComponent } from './general-information-step.component';

describe('GeneralInformationStepComponent', () => {
  let component: GeneralInformationStepComponent;
  let fixture: ComponentFixture<GeneralInformationStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralInformationStepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralInformationStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
