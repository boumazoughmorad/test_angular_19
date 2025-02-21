import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from '../../entities/produit';
import { getItem, setItem } from '../../util/localStorage';
import { Category } from '../../entities/category';
import { loadCategories, loadProduits } from '../../util/loadData';

@Component({
  selector: 'app-ajouter-page',
  standalone: false,
  templateUrl: './ajouter-page.component.html',
  styleUrls: ['./ajouter-page.component.css']
})
export class AjouterPageComponent {
  produits: Produit[] = [];
  categories: Category[] = [];
  selectedCategoryId: number | undefined; 

  buttonInfos = [
    {
      name: "Créer",
      icon: "",
      style: "btn-purple",
      action: () => this.addProduit()
    },
    {
      name: "Annuler",
      icon: "",
      style: "btn-gray",
      action: () => this.resetForm()
    },
  ];

  newService = { name: '', description: '' };
  newPrix = { prixVente: 0, tva: 0 };
  tvaOptions = [10, 15, 20];
  selectedFile: File | null = null;

  constructor(private router: Router) {
    this.categories = loadCategories(); 
    this.produits = loadProduits(); 
  }

  // Convert file to base64
  convertFileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(file);
    });
  }

  // Add a new produit
  async addProduit() {
    let imageBase64 = 'assets/default.jpg'; 

    if (this.selectedFile) {
      imageBase64 = await this.convertFileToBase64(this.selectedFile); 
    }

    const newId = this.produits.length > 0 ? Math.max(...this.produits.map(p => p.id)) + 1 : 1; 
    const newProduit: Produit = {
      id: newId,
      image: imageBase64, 
      name: this.newService.name,
      description: this.newService.description,
  
      status: true, 
      typeTva: this.newPrix.tva,
      prix: this.newPrix.prixVente,
      id_category: this.selectedCategoryId || 1, 
    };

    this.produits.push(newProduit); 
    setItem('produits', this.produits); 
    this.resetForm();
    this.router.navigate(['/list']); 
  }



  handleFileChange(file: File) {
    this.selectedFile = file;
  }

  resetForm() {
    this.newService = { name: '', description: '' };
    this.newPrix = { prixVente: 0, tva: 0 };
    this.selectedFile = null;
    this.selectedCategoryId = undefined; 
  }
}