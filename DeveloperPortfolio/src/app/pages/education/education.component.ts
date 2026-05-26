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
  selector: 'app-education',
  standalone: true,
  imports: [
    CommonModule,
    MatExpansionModule,
    ReactiveFormsModule
  ],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  
  openedPanel = 0;

  educationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.educationForm = this.fb.group({
      educationList: this.fb.array([
        this.createEducation({
          title: 'Bachelor of Science (Hons) in Computer Science',
          period: 'Mar 2020 — Oct 2024',
          institute: 'University of Kelaniya',
          location: 'Kelaniya, Sri Lanka',
          mapUrl: 'https://maps.google.com/?q=University+of+Kelaniya',
          badge: 'Undergraduate Degree',
          description:
            'Completed a comprehensive Computer Science degree with focus on software engineering, algorithms, databases, web technologies, and enterprise application development.'
        }),
        this.createEducation({
          title: 'English Diploma',
          period: 'Mar 2025 — Feb 2026',
          institute: 'SANIT Campus',
          location: 'Kandy, Sri Lanka',
          mapUrl: 'https://maps.google.com/?q=SANIT+Campus+Kandy',
          badge: 'Professional Diploma',
          description:
            'Strengthening professional communication, business English, presentation skills, and workplace communication.'
        })
      ])
    });
  }

  createEducation(data: any): FormGroup {
    return this.fb.group({
      title: [data.title],
      period: [data.period],
      institute: [data.institute],
      location: [data.location],
      mapUrl: [data.mapUrl],
      badge: [data.badge],
      description: [data.description]
    });
  }

  get educationList(): FormArray {
    return this.educationForm.get('educationList') as FormArray;
  }
}