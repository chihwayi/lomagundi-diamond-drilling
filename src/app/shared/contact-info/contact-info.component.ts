import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-info',
  standalone: false,
  templateUrl: './contact-info.component.html',
  styleUrl: './contact-info.component.scss'
})
export class ContactInfoComponent {
  @Input() vertical: boolean = false;
  @Input() showIcons: boolean = true;
  @Input() inverse: boolean = false;
  
  contactInfo = {
    address: '4a Premier Parade, Forest Hills Drive Southampton England SO 18 2GA',
    landline: '02381 112882',
    mobile: '07934 848877 (Out of Hours)',
    email: 'info@lomagundiconstructionservicesltd.com',
    officeHours: {
      weekdays: 'Monday-Friday: 8am – 5pm',
      weekend: 'Saturday & Sunday: Closed'
    },
    fieldOperations: '24/7'
  };

}
