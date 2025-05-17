import { Component } from '@angular/core';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio: string;
  image: string;
  linkedin?: string;
}

interface Milestone {
  year: number;
  event: string;
}

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  companyOverview = {
    founded: 2010,
    description: 'Lomagundi Diamond Drilling is a specialized subsidiary of Lomagundi Construction Services, focusing on precision drilling solutions across various industries. With over a decade of expertise, we provide cutting-edge drilling technologies and unparalleled technical support.',
    mission: 'To deliver exceptional drilling services with precision, safety, and innovation, supporting critical infrastructure and research projects across the United Kingdom.',
    vision: 'To be the leading diamond drilling company in England, recognized for our technical excellence, reliability, and commitment to sustainable practices.'
  };

  teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'David Williams',
      position: 'Chief Executive Officer',
      bio: 'With 25 years of experience in construction and drilling technologies, David leads our strategic vision and ensures world-class service delivery.',
      image: '/assets/images/team/david.png',
      linkedin: 'https://www.linkedin.com/in/davidwilliams'
    },
    {
      id: 2,
      name: 'Emma Richardson',
      position: 'Technical Operations Director',
      bio: 'A geological engineering expert with extensive experience in advanced drilling techniques and project management.',
      image: '/assets/images/team/emma.png',
      linkedin: 'https://www.linkedin.com/in/emmarichardson'
    },
    {
      id: 3,
      name: 'Michael Thompson',
      position: 'Senior Drilling Engineer',
      bio: 'Specialized in complex geological drilling projects with a proven track record of innovative solutions.',
      image: '/assets/images/team/michael.png',
      linkedin: 'https://www.linkedin.com/in/michaelthompson'
    }
  ];

  milestones: Milestone[] = [
    { year: 2010, event: 'Company Establishment' },
    { year: 2014, event: 'First Major Infrastructure Project' },
    { year: 2018, event: 'Advanced Drilling Technology Acquisition' },
    { year: 2022, event: 'Expansion of Research Drilling Services' }
  ];

}
