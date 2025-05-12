import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-links',
  standalone: false,
  templateUrl: './social-links.component.html',
  styleUrl: './social-links.component.scss'
})
export class SocialLinksComponent {
  @Input() inverse: boolean = false;
  
  socialLinks = [
    { icon: 'facebook', url: 'https://facebook.com/' },
    { icon: 'twitter', url: 'https://twitter.com/' },
    { icon: 'linkedin', url: 'https://linkedin.com/' },
    { icon: 'instagram', url: 'https://instagram.com/' }
  ];

}
