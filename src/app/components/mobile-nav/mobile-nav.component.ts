import { isPlatformBrowser } from '@angular/common';
import { Component, EventEmitter, Inject, Input, OnInit, Output, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';

interface NavItem {
  label: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'app-mobile-nav',
  standalone: false,
  templateUrl: './mobile-nav.component.html',
  styleUrl: './mobile-nav.component.scss'
})
export class MobileNavComponent implements OnInit {
  @Output() closeNav = new EventEmitter<void>();
  @Input() isOpen: boolean = false;
  
  navItems: NavItem[] = [
    { label: 'Home', route: '/', icon: 'home' },
    { label: 'About', route: '/about', icon: 'info' },
    { label: 'Services', route: '/services', icon: 'construction' },
    { label: 'Projects', route: '/projects', icon: 'work' },
    { label: 'Testimonials', route: '/testimonials', icon: 'assignment' },
    { label: 'Contact', route: '/contact', icon: 'contact_mail' }
  ];

  constructor(
    public router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    // Any initialization that might use browser APIs
    if (isPlatformBrowser(this.platformId)) {
      // Browser-only code here if needed
    }
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
    // Close the mobile nav after navigation
    this.closeNav.emit();
  }
}