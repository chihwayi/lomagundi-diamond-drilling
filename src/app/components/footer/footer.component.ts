import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
  
  companyInfo = {
    name: 'Lomagundi Diamond Drilling',
    parentCompany: 'Lomagundi Construction Services Ltd',
    address: '4a Premier Parade, Forest Hills Drive',
    city: 'Southampton',
    postcode: 'SO 18 2GA',
    country: 'England',
    landline: '02381 112882',
    mobile: '07934 848877',
    email: 'info@lomagundiconstructionservicesltd.com',
    officeHours: 'Monday-Friday: 8am – 5pm, Saturday & Sunday: Closed',
    fieldOperations: '24/7',
    website: 'https://lomagundiconstructionservicesltd.co.uk/'
  };

  quickLinks = [
    { text: 'Home', route: '/' },
    { text: 'About Us', route: '/about' },
    { text: 'Services', route: '/services' },
    { text: 'Projects', route: '/projects' },
    { text: 'Testimonials', route: '/testimonials' },
    { text: 'Contact Us', route: '/contact' }
  ];

  servicesLinks = [
    { text: 'Diamond Drilling', route: '/services' },
    { text: 'Diamond Sawing', route: '/services' },
    { text: 'Core Drilling', route: '/services' },
    { text: 'Wire Sawing', route: '/services' },
    { text: 'Track Sawing', route: '/services' },
    { text: 'Floor Sawing', route: '/services' }
  ];

}
