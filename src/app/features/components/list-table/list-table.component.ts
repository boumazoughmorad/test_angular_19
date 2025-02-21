import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Produit } from '../../../entities/produit';
import { loadCategories, loadProduits } from '../../../util/loadData';
import { Category } from '../../../entities/category';

@Component({
  selector: 'app-list-table',
  standalone: false,
  templateUrl: './list-table.component.html',
  styleUrl: './list-table.component.css'
})
export class ListTableComponent implements OnInit, OnChanges {
  produits: Produit[] = [];
  filteredProduits: Produit[] = []; 
  paginatedProduits: Produit[] = []; 
  category: Category[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 5; 
  totalPages: number = 0;


  @Input() filterCriteria: {
    category_id: number | null; 
    status: string;
    name: string;
  } = { category_id: null, status: '', name: '' };



  ngOnInit() {
    this.produits = loadProduits();
    this.applyFilters(); 
    this.category = loadCategories();
  }
  ngOnChanges() {
    this.applyFilters(); 
  }

  getCategoryName(category_id: number | null): string {
    if (category_id === null) return 'No Category'; 
    const category = this.category.find(c => c.id === category_id);
    return category ? category.name : 'Unknown Category'; 
  }
  applyFilters() {
    this.filteredProduits = this.produits.filter((produit) => {
      const matchesCategory = !this.filterCriteria.category_id || produit.id_category == this.filterCriteria.category_id;
      const matchesStatus =
        !this.filterCriteria.status || produit.status === (this.filterCriteria.status === 'Active');
      const matchesName = !this.filterCriteria.name || produit.name.toLowerCase().includes(this.filterCriteria.name.toLowerCase());

      return matchesCategory && matchesStatus && matchesName;
    });
    this.totalPages = Math.ceil(this.filteredProduits.length / this.itemsPerPage);
    this.currentPage = 1;
    this.paginateData();
  }

  paginateData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedProduits = this.filteredProduits.slice(startIndex, endIndex);
  }
  
  changePage(page: number) {
    if (page > 0 && page <= this.totalPages) {
      this.currentPage = page;
      this.paginateData(); 
    }
  }
}