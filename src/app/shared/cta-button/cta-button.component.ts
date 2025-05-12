import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cta-button',
  standalone: false,
  templateUrl: './cta-button.component.html',
  styleUrl: './cta-button.component.scss'
})
export class CtaButtonComponent {
  @Input() text: string = 'Contact Us';
  @Input() link: string = '/contact';
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() outlined: boolean = false;
  @Input() icon: string = '';
  @Input() buttonText: string = ''; 
  @Input() fullWidth: boolean = false; 

}
