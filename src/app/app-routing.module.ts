import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterPageComponent } from './features/ajouter-page/ajouter-page.component';

const routes: Routes = [
  {
    path:"",
    component:AjouterPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
