import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-confirmation-authenticity-step',
  templateUrl: './confirmation-authenticity-step.component.html',
  styleUrls: ['./confirmation-authenticity-step.component.scss']
})
export class ConfirmationAuthenticityStepComponent implements OnInit {

  form!:FormGroup;

  constructor(private fb : FormBuilder){

  }

  ngOnInit(): void {
  this.form =   this.fb.group({
    numSiret : new FormControl('', [
      Validators.required
    ]),
    enterprise : new FormControl('', [
      Validators.required
    ])
  })
  }

}
