import { Component } from '@angular/core';

@Component({
  selector: 'app-profil-esn',
  templateUrl: './profil-esn.component.html',
  styleUrls: ['./profil-esn.component.scss']
})
export class ProfilESNComponent {

  elements = [
    {
      imgConsultant:'../assets/image/img-ESN.svg',
      nmbConsultants: '(203)',
      consultantName: 'James Ryan Christian O’Brien ',
      func:'Ingénieur DevOps',
      companyName:'Canal +',
      consultantExp:'8 ans',
      tjm:'500 $',
      type:'Full-Time',
      telConsultant:'(+1) 240 486 1313',
      consultantMail:'james.obrien@company.com'
   },

  ]

}
