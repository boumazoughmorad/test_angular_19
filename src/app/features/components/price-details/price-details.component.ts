import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-price-details',
  standalone: false,
  templateUrl: './price-details.component.html',
  styleUrl: './price-details.component.css'
})
export class PriceDetailsComponent {
  @Input() price: { prixVente: number; tva: number } = { prixVente: 0, tva: 0 }; // Input for price details
  @Input() tvaOptions: number[] = []; // Input for TVA options
  @Output() onSubmit = new EventEmitter<void>(); // Event emitter for form submission
}
