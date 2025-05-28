import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, SidebarComponent]
})
export class DeleteAccountComponent {
  deleteForm: FormGroup;
  showConfirmation = false;

  constructor(private fb: FormBuilder) {
    this.deleteForm = this.fb.group({
      password: ['', [Validators.required]],
      confirmation: ['', [Validators.required, Validators.pattern('DELETE')]]
    });
  }

  onSubmit(): void {
    if (this.deleteForm.valid) {
      this.showConfirmation = true;
    }
  }

  confirmDelete(): void {
    // Here you would typically call a service to delete the account
    console.log('Account deletion confirmed');
    // After successful deletion, redirect to login
    window.location.href = '/login';
  }

  cancelDelete(): void {
    this.showConfirmation = false;
  }
} 