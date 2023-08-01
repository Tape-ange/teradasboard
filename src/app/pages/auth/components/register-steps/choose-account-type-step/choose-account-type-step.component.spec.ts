import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseAccountTypeStepComponent } from './choose-account-type-step.component';

describe('ChooseAccountTypeStepComponent', () => {
  let component: ChooseAccountTypeStepComponent;
  let fixture: ComponentFixture<ChooseAccountTypeStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseAccountTypeStepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseAccountTypeStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
