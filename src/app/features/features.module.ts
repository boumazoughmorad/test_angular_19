import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AjouterPageComponent } from './ajouter-page/ajouter-page.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { PriceDetailsComponent } from './components/price-details/price-details.component';
import { ServiceDetailsComponent } from './components/service-details/service-details.component';
import { ListPageComponent } from './list-page/list-page.component';
import { HeaderPageComponent } from './components/header-page/header-page.component';
import { ListFiltersComponent } from './components/list-filters/list-filters.component';
import { ListTableComponent } from './components/list-table/list-table.component';
import { ActionListComponent } from './components/action-list/action-list.component';
import { ItemActionComponent } from './components/item-action/item-action.component';
import { PaginationComponent } from './components/pagination/pagination.component';


@NgModule({
  declarations: [
    AjouterPageComponent,
    PriceDetailsComponent,
    ServiceDetailsComponent,
    ListPageComponent,
    HeaderPageComponent,
    ListFiltersComponent,
    ListTableComponent,
    ActionListComponent,
    ItemActionComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,


  ],
  exports:[
    ActionListComponent,
    PriceDetailsComponent,
    ServiceDetailsComponent,
    ItemActionComponent
  ]
})
export class FeaturesModule { }
