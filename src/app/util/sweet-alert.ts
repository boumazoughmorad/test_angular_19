import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {
  
  // Confirmation alert
  confirmDeletion(): Promise<boolean> {
    return Swal.fire({
      title: 'Êtes-vous sûr ?',
      text: 'Cette action est irréversible !',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Oui, supprimer !',
      cancelButtonText: 'Annuler'
    }).then(result => result.isConfirmed);
  }

  // Success notification
  successMessage(message: string) {
    Swal.fire({
      icon: 'success',
      title: 'Succès',
      text: message,
      timer: 2000,
      showConfirmButton: false
    });
  }

  // Error notification
  errorMessage(message: string) {
    Swal.fire({
      icon: 'error',
      title: 'Erreur',
      text: message,
      timer: 2000,
      showConfirmButton: false
    });
  }
}
