import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarService } from '../services/sidebar.services';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faCompass, 
  faLayerGroup, 
  faMapPin, 
  faGear 
} from '@fortawesome/free-solid-svg-icons';

interface MenuItem {
  icon: any; // Cambiado a 'any' para aceptar los iconos de Font Awesome
  label: string;
  id: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule], // Añade FontAwesomeModule a los imports
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  activeItem = 'navigation';
  
  // Definir los iconos de Font Awesome
  faCompass = faCompass;
  faLayerGroup = faLayerGroup;
  faMapPin = faMapPin;
  faGear = faGear;

  menuItems: MenuItem[] = [
    { icon: faCompass, label: 'Mapa', id: 'navigation' },
    { icon: faLayerGroup, label: 'Rutas', id: 'layers' },
    { icon: faMapPin, label: 'Lugares', id: 'locations' },
    { icon: faGear, label: 'Configuracion', id: 'settings' }
  ];

  constructor(public sidebarService: SidebarService) {}

  setActiveItem(id: string): void {
    this.activeItem = id;
  }
}