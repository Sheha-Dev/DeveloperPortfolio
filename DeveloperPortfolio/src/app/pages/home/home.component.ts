import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardContent, MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-home',
  imports: [
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  aboutForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.aboutForm = this.fb.group({
      imageUrl: ['assets/images/DSC06732.jpg'],
      altText: ['Vindika Shehan'],
      greeting: ["HI THERE! I'M"],
      name: ['VINDIKA SHEHAN'],
      descriptionOne: [
        'A Software Engineer passionate about building scalable web applications, modern UI experiences, and clean backend systems.'
      ],
      descriptionTwo: [
        'I enjoy working with Angular, .NET, SQL Server, and cloud technologies to create high-quality software solutions.'
      ],
      githubUrl: ['https://github.com/Sheha-Dev/Sheha-Dev'],
      linkedinUrl: ['https://www.linkedin.com/in/vindika-shehan-504029389/']
    });
  }

  get f() {
    return this.aboutForm.controls;
  }
}
