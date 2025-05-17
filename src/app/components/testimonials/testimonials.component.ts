import { Component } from '@angular/core';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  quote: string;
  image: string;
  rating: number;
}

@Component({
  selector: 'app-testimonials',
  standalone: false,
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {

  testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'John Richards',
      position: 'Project Manager',
      company: 'Southampton City Construction',
      quote: 'Lomagundi Diamond Drilling provided exceptional precision and professionalism. Their core drilling work was instrumental in our hospital expansion project.',
      image: '/assets/images/clients/john.png',
      rating: 5
    },
    {
      id: 2,
      name: 'Sarah Thompson',
      position: 'Chief Geologist',
      company: 'Marine Research Institute',
      quote: 'The team\'s expertise in geological sampling is unmatched. Their advanced drilling techniques have significantly improved our research capabilities.',
      image: '/assets/images/clients/sarah.png',
      rating: 5
    },
    {
      id: 3,
      name: 'Michael Clarke',
      position: 'Site Director',
      company: 'National Infrastructure Projects',
      quote: 'Reliability and technical expertise define Lomagundi Diamond Drilling. They consistently deliver high-quality results under challenging conditions.',
      image: '/assets/images/clients/michael.png',
      rating: 4
    }
  ];

  getStarArray(rating: number): number[] {
    return Array(rating).fill(0);
  }

}
