import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AjouterPageComponent } from './ajouter-page/ajouter-page.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { HeaderPageAjouterComponent } from './components/header-page-ajouter/header-page-ajouter.component';
import { PriceDetailsComponent } from './components/price-details/price-details.component';
import { ServiceDetailsComponent } from './components/service-details/service-details.component';


@NgModule({
  declarations: [
    AjouterPageComponent,
    HeaderPageAjouterComponent,
    PriceDetailsComponent,
    ServiceDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,

  ],
  exports:[
    HeaderPageAjouterComponent,
    PriceDetailsComponent,
    ServiceDetailsComponent
  ]
})
export class FeaturesModule { }
