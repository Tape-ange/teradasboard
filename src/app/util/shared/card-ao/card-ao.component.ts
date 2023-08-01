import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-ao',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-ao.component.html',
  styleUrls: ['./card-ao.component.scss']
})
export class CardAoComponent {

@Input() data : any

}
