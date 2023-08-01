import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-candidature',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-candidature.component.html',
  styleUrls: ['./card-candidature.component.scss']
})
export class CardCandidatureComponent {

  @Input() data : any;

}
