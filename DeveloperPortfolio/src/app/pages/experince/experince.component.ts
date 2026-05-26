import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule
} from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-experince',
  standalone: true,
  imports: [
    CommonModule,
    MatExpansionModule,
    ReactiveFormsModule
  ],
  templateUrl: './experince.component.html',
  styleUrl: './experince.component.scss'
})

export class ExperinceComponent {
  
  openedPanel = 0;
  experienceForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.experienceForm = this.fb.group({
      experiences: this.fb.array([
        this.createExperience({
          role: 'Trainee Software Engineer',
          duration: 'Nov 2023 — May 2024',
          company: 'Bellvantage Pvt Ltd',
          location: 'Kottawa, Sri Lanka',
          mapUrl: 'https://maps.google.com/?q=Bellvantage+Pvt+Ltd+Kottawa',
          domain: 'Insurance Domain',
          techStack: [
            // '.NET Core',
            // 'Oracle Server'
          ],
          responsibilities: [
            'Developed backend API features for enterprise applications',
            'Worked with RESTful API development using .NET Core',
            'Implemented authentication and authorization mechanisms',
            'Collaborated with senior developers in enterprise software projects'
          ]
        }),

        this.createExperience({
          role: 'Associate Software Engineer',
          duration: 'Nov 2024 — Present',
          company: 'Courtaulds Trading Company',
          location: 'Minuwangoda, Sri Lanka',
          mapUrl: 'https://maps.google.com/?q=Courtaulds+Trading+Company+Minuwangoda',
          domain: 'Apparel Manufacturing Domain',
          techStack: [
            // 'Angular 18',
            // '.NET 8 API',
            // 'EF Core 8',
            // 'SQL Server',
            // 'JWT',
            // 'Razor Pages'
          ],
          responsibilities: [
            'Developing enterprise-scale web applications for internal business operations',
            'Building full-stack systems using Angular and .NET Core',
            'Designing secure authentication and authorization workflows',
            'Contributing to manufacturing and workflow automation solutions'
          ]
        })
      ])
    });
  }

  get experiences(): FormArray {
    return this.experienceForm.get('experiences') as FormArray;
  }

  createExperience(experience: any): FormGroup {
    return this.fb.group({
      role: [experience.role],
      duration: [experience.duration],
      company: [experience.company],
      location: [experience.location],
      mapUrl: [experience.mapUrl],
      domain: [experience.domain],
      techStack: [experience.techStack],
      responsibilities: [experience.responsibilities]
    });
  }
}