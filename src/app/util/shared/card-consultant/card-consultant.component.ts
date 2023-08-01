import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-consultant',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-consultant.component.html',
  styleUrls: ['./card-consultant.component.scss']
})
export class CardConsultantComponent {

  @Input() data : any;

}
