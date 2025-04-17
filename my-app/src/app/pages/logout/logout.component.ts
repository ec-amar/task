import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logout',
  template: '<div class="text-center p-5">Logging out...</div>',
  standalone: true,
  imports: [CommonModule]
})
export class LogoutComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log('Logout component initialized');
    // Perform logout
    this.authService.logout();
    
    // Navigate to login page after a short delay
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 500);
  }
} 