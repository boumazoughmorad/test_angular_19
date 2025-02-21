import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterPageComponent } from './features/ajouter-page/ajouter-page.component';
import { ListPageComponent } from './features/list-page/list-page.component';

const routes: Routes = [
  {
    path:"",
    component:AjouterPageComponent
  },
  {
    path:"list",
    component:ListPageComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
