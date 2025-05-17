import { Component } from '@angular/core';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string;
  highlights: string[];
  applications: string[];
}

@Component({
  selector: 'app-services',
  standalone: false,
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

  services: Service[] = [
    {
      id: 1,
      title: 'Core Drilling',
      description: 'Precision diamond core drilling for geological sampling, structural investigation, and material testing.',
      icon: 'settings_suggest',
      image: '/assets/images/services/core-drilling2.jpg',
      highlights: [
        'Minimal site disturbance',
        'High-precision sampling',
        'Suitable for various terrains'
      ],
      applications: [
        'Geological research',
        'Construction site investigations',
        'Material strength testing'
      ]
    },
    {
      id: 2,
      title: 'Wall Sawing',
      description: 'Precision wall cutting and opening services for construction and renovation projects.',
      icon: 'build',
      image: '/assets/images/services/wall-sawing.jpg',
      highlights: [
        'Accurate opening creation',
        'Reduced structural impact',
        'Clean and precise cuts'
      ],
      applications: [
        'Door and window openings',
        'HVAC and utility installations',
        'Building renovations'
      ]
    },
    {
      id: 3,
      title: 'Concrete Scanning',
      description: 'Advanced non-destructive concrete scanning and utility detection services.',
      icon: 'search',
      image: '/assets/images/services/concrete-scanning.png',
      highlights: [
        'Real-time subsurface imaging',
        'Prevents accidental damage',
        'Comprehensive utility mapping'
      ],
      applications: [
        'Pre-construction planning',
        'Utility location',
        'Safety assessment'
      ]
    }
  ];

  selectedService: Service | null = null;

  openServiceDetails(service: Service): void {
    this.selectedService = service;
  }

  closeServiceDetails(): void {
    this.selectedService = null;
  }

}
