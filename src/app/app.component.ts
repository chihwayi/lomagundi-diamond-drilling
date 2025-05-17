import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'lomagundi-diamond-drilling';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  
  ngOnInit(): void {
    // Make sure any browser-specific code runs only in browser
    if (isPlatformBrowser(this.platformId)) {
      // Handle any global initialization that requires browser APIs
      this.handleBrowserInit();
    }
  }
  
  private handleBrowserInit(): void {
    // Set up any browser-only configurations or listeners
    document.addEventListener('DOMContentLoaded', () => {
      console.log('DOM fully loaded and parsed');
      // You could initialize third-party scripts here
    });
  }
}

