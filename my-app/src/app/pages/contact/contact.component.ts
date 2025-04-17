import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [CommonModule, SidebarComponent, RouterModule, ReactiveFormsModule]
})
export class ContactComponent {
  contactForm: FormGroup;
  contactInfo = {
    address: '123 Entertainment Avenue, Kuwait City, Kuwait',
    phone: '+965 1234 5678',
    email: 'info@kland.com',
    workingHours: '10:00 AM - 10:00 PM (Daily)',
    socialMedia: {
      instagram: '@kland',
      facebook: 'K-Land Entertainment',
      twitter: '@kland'
    }
  };

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      // In a real app, this would send the form data to a server
      alert('Thank you for your message! We will get back to you soon.');
      this.contactForm.reset();
    }
  }
} 