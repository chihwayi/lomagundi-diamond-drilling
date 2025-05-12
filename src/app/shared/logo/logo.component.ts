import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: false,
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss'
})
export class LogoComponent {

  @Input() isFooter: boolean = false;

}
