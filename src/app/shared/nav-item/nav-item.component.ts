import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-item',
  standalone: false,
  templateUrl: './nav-item.component.html',
  styleUrl: './nav-item.component.css'
})
export class NavItemComponent {
  @Input() icon: string = ''; 
  @Input() label: string = ''; 
  @Input() items: string[] = [];
  @Input() havelist: boolean = false; 
}
