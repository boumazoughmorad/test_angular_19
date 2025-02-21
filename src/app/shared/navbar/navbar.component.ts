import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  dashboardItems: string[] = [];
  contactItems: string[] = ['Ajouter client', 'Liste client','Ajouter fourniseur','liste fourniseur'];
  catalogueItems: string[] = ['Ajouter Produit', 'Liste des produits','Ajouter un service','List des services','Parameter des Produits'];
  venteItems: string[] = ['creér une facture', 'Liste des factures','creés une device','List des devices','créer un avoir','liste des avoirs','facture récurrentes', 'Paramerter des vente'];
  achatItems: string[] = ['creér une facture fourniseur', 'Liste des factures fourniseur','creés une device fourniseur','List des devices fourniseur','créer un avoir fourniseur','liste des avoirs fourniseur','facture récurrentes fourniseur', 'Paramerter d\'achat'];
  oppertuniteItems: string[] = ['créer une opportunité', 'Liste des opportunités','vue pipline','Parameter'];

}
