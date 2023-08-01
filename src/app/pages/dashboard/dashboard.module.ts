import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { TenderAccueilComponent } from './components/tender-accueil/tender-accueil.component';
import { ProfilAccueilComponent } from './components/profil-accueil/profil-accueil.component';
import { ListeCandidatureAcceuilComponent } from './components/liste-candidature-acceuil/liste-candidature-acceuil.component';
import { CardAoComponent } from "../../util/shared/card-ao/card-ao.component";
import {MatTabsModule} from '@angular/material/tabs';

import { LayoutModule } from 'src/app/layout/layout.module';
import { NavBarComponent } from "../../layout/nav-bar/nav-bar.component";
import { ProfilESNComponent } from './components/profil-esn/profil-esn.component';
import { CardCandidatureComponent } from 'src/app/util/shared/card-candidature/card-candidature.component';
import { CardConsultantComponent } from "../../util/shared/card-consultant/card-consultant.component";
import { ProfilConsultantComponent } from './components/profil-consultant/profil-consultant.component';

const routes : Route[] =[
    {
        path: 'profil',
        component: ProfilAccueilComponent
    },
    {
        path: '',
        component: AccueilComponent
    }
]

@NgModule({
    declarations: [
        AccueilComponent,
        TenderAccueilComponent,
        ProfilAccueilComponent,
        ListeCandidatureAcceuilComponent,
        ProfilESNComponent,
        ProfilConsultantComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatTabsModule,
        CardCandidatureComponent,
        CardAoComponent,
        NavBarComponent,
        CardConsultantComponent
    ]
})
export class DashboardModule { }
