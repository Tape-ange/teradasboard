import { Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'stepper-item',
  templateUrl: './stepper-item.component.html',
  styleUrls: ['./stepper-item.component.scss']
})
export class StepperItemComponent implements OnInit{
  @Input() state:boolean = false;
  @Input() currentIndex:number = 0;
  @Input() stepNumber:number = -1;
  @Input() steps = 0;
  @ViewChild('template', { static: true }) template : any;

  constructor(
    private view: ViewContainerRef
) {}
  ngOnInit(): void {
    this.view.createEmbeddedView(this.template);
  }


  renderState(){
     if(this.stepNumber < this.currentIndex){
      return true;
    }
    else if(this.currentIndex == this.stepNumber){
      return true;
    }
    return false;
  }

}
