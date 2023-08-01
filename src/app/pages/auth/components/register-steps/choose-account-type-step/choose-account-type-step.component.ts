import { Component } from '@angular/core';
import { StepBehavior } from '../step-behavior';
import { RegisterStepperComponent } from '../../register-stepper/register-stepper.component';

@Component({
  selector: 'app-choose-account-type-step',
  templateUrl: './choose-account-type-step.component.html',
  styleUrls: ['./choose-account-type-step.component.scss']
})
export class ChooseAccountTypeStepComponent implements StepBehavior {

  constructor(private parent : RegisterStepperComponent){

  }
  getStepTitle(): string {
    return "Type de compte utilisateur"
  }

  chooseType(type :string){
    console.log(this.parent.selectedIndex)
    console.log(type)

    this.parent.stepValidator.next({
      step : 0,
      data : {
        type : type
      }
    })
  }
}
