import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-service-details',
  standalone: false,
  templateUrl: './service-details.component.html',
  styleUrl: './service-details.component.css'
})
export class ServiceDetailsComponent {
  @Input() service: { name: string; description: string } = { name: '', description: '' }; // Input for service details
  @Output() onSubmit = new EventEmitter<void>(); // Event emitter for form submission
  @Output() fileChange = new EventEmitter<File>(); // Event emitter for file change
  imagePreview: string | null = null;
  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.fileChange.emit(file); // Émet le fichier sélectionné

      // Génère un aperçu de l’image
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  removeImage() {
    this.imagePreview = null;
  }
}