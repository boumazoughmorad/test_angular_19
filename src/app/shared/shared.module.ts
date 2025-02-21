import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { NavItemComponent } from './nav-item/nav-item.component';



@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    NavItemComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    NavbarComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
