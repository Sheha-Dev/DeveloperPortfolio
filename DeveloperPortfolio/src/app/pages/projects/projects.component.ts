import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    MatExpansionModule,
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {

  openedPanel = 0;

    projectForm!: FormGroup;

  constructor(private fb: FormBuilder) {

  this.projectForm = this.fb.group({
    projects: this.fb.array([
      this.createProject({
        title: 'Sanasa Life Insurance API',
        duration: 'Nov 2023 — May 2024',
        description:
          'Secure insurance API for policy and customer management.',
        techStack: ['.NET API', 'Oracle SQL Server', 'JWT'],
        badge: 'Restful API Project',
        bullets: [
          'Developed RESTful APIs using .NET',
          'Implemented JWT-based authentication and authorization',
        ],
        images: [
          'assets/images/projects/sanasa/1.png',
          'assets/images/projects/sanasa/2.png',
        ],
        showLinks: false,
        githubUrl: '',
        liveUrl: '',
        currentImageIndex: 0,
      }),

      this.createProject({
        title: 'Line Balancing System',
        duration: 'Nov 2024 — Jan 2025',
        description:
          'Internal manufacturing workflow optimization application for production efficiency improvement.',
        techStack: [
          'ASP.NET Razor Pages',
          'MS SQL Server',
          'Bootstrap 5',
          'AJAX',
        ],
        badge: 'MVC Project',
        bullets: [
          'Developed MVC web application using ASP.NET Razor Pages',
          'Improved production workflow efficiency',
        ],
        images: [
          'assets/images/projects/line-balancing/1.png',
          'assets/images/projects/line-balancing/2.png',
        ],
        showLinks: false,
        githubUrl: '',
        liveUrl: '',
        currentImageIndex: 0,
      }),

      this.createProject({
        title: 'Central Authentication API',
        duration: 'Jan 2025 — Jan 2025',
        description:
          'Secure centralized authentication platform for enterprise identity and access management.',
        techStack: [
          'ASP.NET Core',
          'EF Core 8',
          'SQL Server',
          'JWT',
          'Identity',
        ],
        badge: 'Central Restful API Project',
        bullets: [
          'Built secure authentication system using .NET Core and Entity Framework Core',
          'Used identity management package',
        ],
        images: [
          'assets/images/projects/auth/1.png',
          'assets/images/projects/auth/2.png',
        ],
        showLinks: false,
        githubUrl: '',
        liveUrl: '',
        currentImageIndex: 0,
      }),

      this.createProject({
        title: 'PLM System',
        duration: 'Jul 2025 — Mar 2026',
        description:
          'Enterprise product lifecycle management system for workflow and product operations.',
        techStack: [
          'Angular 18',
          '.NET 8 API',
          'EF Core 8',
          'SQL Server',
          'JWT',
        ],
        badge: 'Professional Enterprise Project',
        bullets: [
          'Built full-stack application using .NET Core API, EF Core, and Angular',
          'Integrated secure JWT authentication',
        ],
        images: [
          'assets/images/projects/plm/1.png',
          'assets/images/projects/plm/2.png',
        ],
        showLinks: false,
        githubUrl: '',
        liveUrl: '',
        currentImageIndex: 0,
      }),

      this.createProject({
        title: 'Developer Portfolio Website',
        duration: 'May 2026 — May 2026',
        description:
          'Personal developer portfolio showcasing projects, skills, experience, and contact information with responsive UI.',
        techStack: [
          'Angular 18',
          'TypeScript',
          'SCSS',
          'Angular Material',
          'Cloudflare Pages',
        ],
        badge: '',
        bullets: [
          'Built responsive developer portfolio using Angular',
          'Integrated project showcase with image carousel',
          'Implemented modern UI with Angular Material',
        ],
        images: [
          'assets/images/projects/portfolio/1.png',
          'assets/images/projects/portfolio/2.png',
        ],
        showLinks: true,
        githubUrl: 'https://github.com/Sheha-Dev/DeveloperPortfolio',
        liveUrl: 'https://your-live-demo.com',
        currentImageIndex: 0,
      }),
    ]),
  });

}

  get projects(): FormArray {
    return this.projectForm.get('projects') as FormArray;
  }

  createProject(project: any): FormGroup {
    return this.fb.group({
      title: [project.title],
      duration: [project.duration],
      description: [project.description],
      techStack: [project.techStack],
      badge: [project.badge],
      bullets: [project.bullets],
      images: [project.images],
      showLinks: [project.showLinks],
      githubUrl: [project.githubUrl],
      liveUrl: [project.liveUrl],
      currentImageIndex: [project.currentImageIndex],
    });
  }

  nextImage(index: number) {
    const project = this.projects.at(index);
    const images = project.get('images')?.value;
    const current = project.get('currentImageIndex')?.value;

    project.patchValue({
      currentImageIndex: (current + 1) % images.length,
    });
  }

  prevImage(index: number) {
    const project = this.projects.at(index);
    const images = project.get('images')?.value;
    const current = project.get('currentImageIndex')?.value;

    project.patchValue({
      currentImageIndex: (current - 1 + images.length) % images.length,
    });
  }
}