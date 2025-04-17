import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss'],
  standalone: true,
  imports: [CommonModule, SidebarComponent, RouterModule]
})
export class FaqsComponent {
  faqs = [
    {
      question: 'What is K-Land?',
      answer: 'K-Land is an entertainment destination offering various attractions, games, and experiences for visitors of all ages. Our facility features themed zones, interactive exhibits, and special events throughout the year.',
      isOpen: true
    },
    {
      question: 'How do I book tickets?',
      answer: 'You can book tickets through our website by selecting your preferred date and time. We also offer walk-in tickets at our facility, but booking online is recommended to avoid long queues, especially during peak times.',
      isOpen: false
    },
    {
      question: 'What are your opening hours?',
      answer: 'K-Land is open daily from 10:00 AM to 10:00 PM. During special events and holidays, we may extend our hours. Please check our website or contact us for the most up-to-date information.',
      isOpen: false
    },
    {
      question: 'Is there an age restriction?',
      answer: 'K-Land is designed for visitors of all ages. Some attractions may have specific height or age requirements for safety reasons. Please check individual attraction details before your visit.',
      isOpen: false
    },
    {
      question: 'Do you offer group discounts?',
      answer: 'Yes, we offer special rates for groups of 10 or more people. Please contact our group sales department at least 48 hours in advance to arrange your group visit.',
      isOpen: false
    },
    {
      question: 'Can I bring my own food and drinks?',
      answer: 'Outside food and drinks are not permitted in K-Land. We have several dining options available within our facility, offering a variety of cuisines to suit all tastes.',
      isOpen: false
    },
    {
      question: 'Is parking available?',
      answer: 'Yes, we have ample parking available for all visitors. Parking is free for the first 3 hours, after which a nominal fee applies.',
      isOpen: false
    },
    {
      question: 'Do you offer refunds?',
      answer: 'Tickets are non-refundable once purchased. However, we can reschedule your visit to another date if you contact us at least 24 hours before your scheduled visit.',
      isOpen: false
    }
  ];

  toggleFaq(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
} 