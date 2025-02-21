import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from '../../entities/produit';

@Component({
  selector: 'app-ajouter-page',
  standalone: false,
  templateUrl: './ajouter-page.component.html',
  styleUrl: './ajouter-page.component.css'
})
export class AjouterPageComponent {
  // Static list of produits
  produits: Produit[] = [
    {
      image: 'assets/images/product1.jpg',
      name: 'Product 1',
      description: 'Description for Product 1',
      category: 'maintenance',
      status: true,
      typeTva: 20,
      prix: 100,
    },
    {
      image: 'assets/images/product2.jpg',
      name: 'Product 2',
      description: 'Description for Product 2',
      category: 'maintenance',
      status: true,
      typeTva: 15,
      prix: 200,
    },
  ];

  // New product form data
  newService = { name: '', description: '' };
  newPrix = { prixVente: 0, tva: 0 };
  tvaOptions = [10, 15, 20];
  selectedFile: File | null = null;

  constructor(private router: Router) {}

  // Add a new product to the list
  addProduit() {
    const newProduit: Produit = {
      image: this.selectedFile ? URL.createObjectURL(this.selectedFile) : 'assets/images/default.jpg',
      name: this.newService.name,
      description: this.newService.description,
      category: 'maintenance', // Default category
      status: true, // Default status (Active)
      typeTva: this.newPrix.tva,
      prix: this.newPrix.prixVente,
    };
    console.log(newProduit);
    
    this.produits.push(newProduit); // Add the new product to the list
    console.log(this.produits);
    
    // this.router.navigate(['/list-page']); // Redirect to the list page
  }

  // Handle file upload
  onFileChange(event: Event ) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  handleFileChange(file: File) {
    this.selectedFile = file;
  }

  // Reset form
  resetForm() {
    this.newService = { name: '', description: '' };
    this.newPrix = { prixVente: 0, tva: 0 };
    this.selectedFile = null;
  }  
}
