import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Produit } from '../../../entities/produit';
import { getItem, setItem } from '../../../util/localStorage';
import { SweetAlertService } from '../../../util/sweet-alert';

@Component({
  selector: 'app-action-list',
  standalone: false,
  templateUrl: './action-list.component.html',
  styleUrls: ['./action-list.component.css'],
})
export class ActionListComponent {
  @Input() produitId!: number; 
  isMenuVisible = false;

  constructor(private sweetAlertService: SweetAlertService) {}

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }

  viewDetail() {
    console.log('Viewing details for produit ID:', this.produitId);
    // Navigate to the detail page or show a modal
  }

  editProduit() {
    console.log('Editing produit ID:', this.produitId);
   
  }

  async deleteProduit() {
    const confirm = await this.sweetAlertService.confirmDeletion();
    if (confirm) {
      let produits: Produit[] = getItem('produits') || [];
      console.log("produits : ",produits);
      console.log("id : ",this.produitId);
      
      produits = produits.filter(p => p.id !== this.produitId); 
      setItem('produits', produits);
      this.sweetAlertService.successMessage('Le produit a été supprimé.');
      window.location.reload(); 
    }
  }

  duplicateProduit() {
    console.log('Duplicating produit ID:', this.produitId);
    const produits: Produit[] = getItem('produits') || [];
    const produitToDuplicate = produits.find(p => p.id === this.produitId);

    if (produitToDuplicate) {
      const newProduit = { ...produitToDuplicate, id: Math.max(...produits.map(p => p.id)) + 1 }; 
      produits.push(newProduit);
      setItem('produits', produits);
      this.sweetAlertService.successMessage('Le produit a été dupliqué.');
      window.location.reload();
    }
  }
}
