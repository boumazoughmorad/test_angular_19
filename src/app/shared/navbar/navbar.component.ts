import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  dashboardItems: string[] = ['Dashboard Item 1', 'Dashboard Item 2'];
  contactItems: string[] = ['Contact Item 1', 'Contact Item 2'];
  catalogueItems: string[] = ['Catalogue Item 1', 'Catalogue Item 2'];
}
