import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-homepage',
  standalone: false,
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0, transform: 'translateY(30px)' })),
      transition(':enter', [
        animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('slideIn', [
      state('void', style({ opacity: 0, transform: 'translateX(-50px)' })),
      transition(':enter', [
        animate('0.6s 0.2s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class HomepageComponent implements OnInit {
  
  services = [
    {
      title: 'Diamond Drilling',
      description: 'Precision diamond drilling services for various applications including wet core drilling.',
      icon: 'build',
      image: '/assets/images/services/diamond-drilling.jpg'
    },
    {
      title: 'Diamond Sawing',
      description: 'Clean and accurate cutting of concrete and other materials with our diamond sawing equipment.',
      icon: 'content_cut',
      image: '/assets/images/services/diamond-sawing.jpg'
    },
    {
      title: 'Core Drilling',
      description: 'Professional core drilling services for residential, commercial, and industrial projects.',
      icon: 'sync',
      image: '/assets/images/services/core-drilling.jpg'
    },
    {
      title: 'Wire Sawing',
      description: 'Advanced wire sawing techniques for handling complex cutting tasks with precision.',
      icon: 'linear_scale',
      image: '/assets/images/services/wire-sawing.jpg'
    }
  ];

  features = [
    {
      title: 'Expert Team',
      description: 'Our team consists of highly trained professionals with years of experience.',
      icon: 'engineering'
    },
    {
      title: '24/7 Operations',
      description: 'Round-the-clock field operations to meet your urgent project needs.',
      icon: 'schedule'
    },
    {
      title: 'Quality Equipment',
      description: 'State-of-the-art drilling equipment and technology for optimal results.',
      icon: 'construction'
    },
    {
      title: 'Safety First',
      description: 'Strict adherence to safety protocols and regulations on every project.',
      icon: 'health_and_safety'
    }
  ];

  testimonials = [
    {
      name: 'John Smith',
      position: 'Project Manager, ABC Construction',
      quote: 'Lomagundi Diamond Drilling delivered exceptional service on our commercial renovation project. Their precision and professionalism were outstanding.',
      image: '/assets/images/testimonials/client1.jpg'
    },
    {
      name: 'Sarah Johnson',
      position: 'Director, XYZ Engineering',
      quote: 'We\'ve worked with many drilling contractors, but Lomagundi stands out for their attention to detail and reliability. Highly recommended.',
      image: '/assets/images/testimonials/client2.jpg'
    },
    {
      name: 'Michael Brown',
      position: 'Site Manager, DEF Developments',
      quote: 'The team at Lomagundi Diamond Drilling completed our complex project on time and within budget. Their expertise was invaluable.',
      image: '/assets/images/testimonials/client3.jpg'
    }
  ];

  projects = [
    {
      title: 'Southampton City Center Renovation',
      category: 'Commercial',
      description: 'Diamond drilling and sawing services for major renovation project.',
      image: '/assets/images/projects/project1.jpg'
    },
    {
      title: 'Hampshire Industrial Complex',
      category: 'Industrial',
      description: 'Core drilling for new industrial facility installation.',
      image: '/assets/images/projects/project2.jpg'
    },
    {
      title: 'Portsmouth Residential Development',
      category: 'Residential',
      description: 'Various drilling services for new housing development.',
      image: '/assets/images/projects/project3.jpg'
    }
  ];

  statistics = [
    { value: 150, label: 'Projects Completed', icon: 'assignment_turned_in' },
    { value: 15, label: 'Years Experience', icon: 'history' },
    { value: 50, label: 'Team Members', icon: 'people' },
    { value: 100, label: 'Satisfied Clients', icon: 'thumb_up' }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
