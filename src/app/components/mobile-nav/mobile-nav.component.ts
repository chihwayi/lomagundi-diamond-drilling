import { Component } from '@angular/core';
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
export class MobileNavComponent {
  navItems: NavItem[] = [
    { label: 'Home', route: '/', icon: 'home' },
    { label: 'About', route: '/about', icon: 'info' },
    { label: 'Services', route: '/services', icon: 'construction' },
    { label: 'Projects', route: '/projects', icon: 'work' },
    { label: 'Contact', route: '/contact', icon: 'contact_mail' }
  ];

  constructor(public router: Router) {}

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

}
