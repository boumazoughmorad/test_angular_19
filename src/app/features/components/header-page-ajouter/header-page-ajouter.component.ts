import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-header-page-ajouter',
  standalone: false,
  templateUrl: './header-page-ajouter.component.html',
  styleUrl: './header-page-ajouter.component.css'
})
export class HeaderPageAjouterComponent {
  @Input() title: string = ''; // Input for the header title
  @Output() onCreate = new EventEmitter<void>(); // Event emitter for "Créer" button
  @Output() onCancel = new EventEmitter<void>();
}
