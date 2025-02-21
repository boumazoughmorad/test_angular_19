import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Category } from '../../../entities/category';
import { loadCategories } from '../../../util/loadData';

@Component({
  selector: 'app-list-filters',
  standalone: false,
  templateUrl: './list-filters.component.html',
  styleUrl: './list-filters.component.css'
})
export class ListFiltersComponent implements OnInit {
  categories: Category[] = [];  
  statuses = ['Active', 'Inactive'];
  
  selectedCategory_id : number | null = null; ;
  selectedStatus: string = '';
  searchName: string = '';
  ngOnInit() {
    this.categories = loadCategories(); 
  }
  @Output() filterChange = new EventEmitter<{
    category_id: number | null;
    status: string;
    name: string;
  }>();

  onFilterChange() {
    this.filterChange.emit({
      category_id: this.selectedCategory_id,
      status: this.selectedStatus,
      name: this.searchName
    });
  }
}
