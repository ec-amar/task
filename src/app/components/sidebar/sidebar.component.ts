import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class SidebarComponent {
  // menuItems = [
  //   { icon: 'fas fa-user-edit', label: 'Edit Profile', route: '/account' },
  //   { icon: 'fas fa-question-circle', label: 'FAQs', route: '/faqs' },
  //   { icon: 'fas fa-envelope', label: 'Contact Us', route: '/contact' },
  //   { icon: 'fas fa-trash-alt', label: 'Delete Account', route: '/delete-account' },
  //   { icon: 'fas fa-sign-out-alt', label: 'Logout', route: '/logout' }
  // ];

  menuItems = [
    { icon: 'fas fa-user-edit', label: 'Edit Profile', route: '/account' },
    { icon: 'fas fa-question-circle', label: 'FAQs', route: '#' },
    { icon: 'fas fa-envelope', label: 'Contact Us', route: '#' },
    { icon: 'fas fa-trash-alt', label: 'Delete Account', route: '#' },
    { icon: 'fas fa-sign-out-alt', label: 'Logout', route: '/logout' }
  ];
  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  navigateTo(route: string): void {
    if (route === '/logout') {
      console.log('Logging out...');
      // Call the logout method from AuthService
      this.authService.logout();
      // Navigate to login page
      this.router.navigate(['/login']);
    } else {
      this.router.navigate([route]);
    }
  }
} 