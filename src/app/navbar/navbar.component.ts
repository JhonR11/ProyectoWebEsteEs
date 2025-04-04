import { Component } from '@angular/core';
import { SidebarService } from '../services/sidebar.services';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private sidebarService: SidebarService) {}

  toggleSidebar(): void {
    this.sidebarService.toggle();
  }
}