import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item-action',
  standalone: false,
  templateUrl: './item-action.component.html',
  styleUrl: './item-action.component.css'
})
export class ItemActionComponent {
  @Input() icon!: string; 
  @Input() label!: string; 
  @Output() actionClick = new EventEmitter<void>();
}
