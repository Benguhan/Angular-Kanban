import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, SidebarModule, ButtonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isSidebarOpen = true;

  openSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
