import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      sectionLabel: ["LET'S CONNECT"],
      heading: ["I'd love to"],
      headingHighlight: ['hear from you'],
      description: [
        `Whether you have a project idea, job opportunity, collaboration,
        or just want to say hello — feel free to reach out.
        I'm always open to meaningful conversations.`
      ],

      email: ['shehanvindika429@gmail.com'],
      phone: ['+94 75 7500597'],
      location: ['Sri Lanka'],

      githubUrl: ['https://github.com/Sheha-Dev'],
      linkedinUrl: ['https://www.linkedin.com/in/vindika-shehan-504029389/'],

      name: ['', Validators.required],
      senderEmail: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    console.log(this.contactForm.value);
  }
}