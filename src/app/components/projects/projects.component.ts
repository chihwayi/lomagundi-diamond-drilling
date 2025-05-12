import { Component, OnInit } from '@angular/core';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  client: string;
  date: string;
  location: string;
  details: string[];
}

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent  implements OnInit {
  projects: Project[] = [
    {
      id: 1,
      title: 'Southampton City Hospital Expansion',
      description: 'Core drilling for new medical wing infrastructure',
      category: 'Healthcare',
      image: '/assets/images/projects/hospital-drilling.jpg',
      client: 'Southampton Health Trust',
      date: 'March 2023',
      location: 'Southampton, UK',
      details: [
        'Precise core drilling for structural assessments',
        'Minimal disruption to hospital operations',
        'Advanced diamond drilling techniques'
      ]
    },
    {
      id: 2,
      title: 'Coastal Research Center Foundation',
      description: 'Geological sampling and research drilling',
      category: 'Research',
      image: '/assets/images/projects/research-drilling.jpg',
      client: 'Marine Geology Institute',
      date: 'June 2022',
      location: 'Portsmouth, UK',
      details: [
        'Specialized deep core extraction',
        'Precision geological sampling',
        'Environmental impact minimization'
      ]
    },
    // Add more projects here
  ];

  filteredProjects: Project[] = [];
  selectedCategory: string = 'All';
  categories: string[] = ['All', 'Healthcare', 'Research', 'Commercial', 'Industrial'];

  ngOnInit(): void {
    this.filterProjects(this.selectedCategory);
  }

  filterProjects(category: string): void {
    this.selectedCategory = category;
    this.filteredProjects = category === 'All' 
      ? this.projects 
      : this.projects.filter(project => project.category === category);
  }
}
