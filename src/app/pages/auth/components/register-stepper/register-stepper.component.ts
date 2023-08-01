import { CdkStepper } from '@angular/cdk/stepper';
import { Component, OnInit, ViewChild } from '@angular/core';
import { StepBehavior } from '../register-steps/step-behavior';
import { AfterViewInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'register-stepper',
  templateUrl: './register-stepper.component.html',
  styleUrls: ['./register-stepper.component.scss'],
  providers: [{ provide: CdkStepper, useExisting: RegisterStepperComponent }]
})
export class RegisterStepperComponent extends CdkStepper implements OnInit, AfterViewInit {


@ViewChild('cdkStepper')
cdkStepper!: CdkStepper;
stepTitle:string="";
public stepValidator : BehaviorSubject<any> = new BehaviorSubject("")


ngOnInit(): void {
  this.validateStep()
  this.selectionChange.subscribe(n =>{
    console.log(n, n.selectedStep);
  })

  
}

validateStep(){
  this.stepValidator.subscribe(d =>{
    if(d ){
      switch(d.step){
        case 0:
          this.next();
      }
    }
    
    console.log(d)
  })
}

}
