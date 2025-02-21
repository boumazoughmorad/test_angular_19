import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-page',
  standalone: false,
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.css'
})
export class ListPageComponent {
  buttonInfos = [
    {
      name: "Nouveau Service",
      icon: "add",
      style: "btn-purple",
      action: () => this.newService()
    }
  ];
    constructor(private router: Router) {
      
    }

    
    filterCriteria = {
      category_id: null as number | null, 
      status: '',
      name: ''
    };
  
    newService() {
      this.router.navigate(['/']);
    }
    onFilterChange(filters: { category_id: number | null; status: string; name: string }) {
      this.filterCriteria = filters;
    }

  
}
