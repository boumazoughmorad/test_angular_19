import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-page',
  standalone: false,
  templateUrl: './header-page.component.html',
  styleUrl: './header-page.component.css'
})
export class HeaderPageComponent {
    @Input() title: string = ''; 
    @Input() buttonInfos: { name: string; icon: string; style: string; action: () => void }[] = [];

}
