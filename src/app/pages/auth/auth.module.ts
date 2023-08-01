import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { CdkStepperModule } from '@angular/cdk/stepper';
import {SharedModule} from "../../util/shared/shared.module";
import { RegisterStepperComponent } from './components/register-stepper/register-stepper.component';
import { StepperItemComponent } from './components/stepper-item/stepper-item.component';
import { ChooseAccountTypeStepComponent } from './components/register-steps/choose-account-type-step/choose-account-type-step.component';
import { ConfirmationAuthenticityStepComponent } from './components/register-steps/confirmation-authenticity-step/confirmation-authenticity-step.component';
import { GeneralInformationStepComponent } from './components/register-steps/general-information-step/general-information-step.component';
import { EndOfRegistrationStepComponent } from './components/register-steps/end-of-registration-step/end-of-registration-step.component'
import { SignupComponent } from './signup/signup.component';
const routes: Route[]  =[
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'login',
    component:LoginComponent
  }
];

@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent,
    RegisterStepperComponent,
    StepperItemComponent,
    ChooseAccountTypeStepComponent,
    ConfirmationAuthenticityStepComponent,
    GeneralInformationStepComponent,
    EndOfRegistrationStepComponent
  ],
  imports: [
    SharedModule,
    CommonModule,CdkStepperModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
